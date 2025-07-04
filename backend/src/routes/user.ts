import { Hono } from 'hono';
import { withAccelerate } from '@prisma/extension-accelerate'
import { PrismaClient } from '@prisma/client/edge';
import { sign } from 'hono/jwt';
import { signupInput, signinInput } from "../../../common/src/index";
export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();



userRouter.post('/signup', async (c) => {

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

    const body = await c.req.json()

    const { success } = signupInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        })
    }

    if (!body.username) {
      throw new Error("Email is required");
    }

    const user = await prisma.user.findUnique({
      where: {
        email: body.username
      }
    })

    if (user) {
      console.log("user already exists")
      c.status(403)
      return c.json({ error: "user already exists" })
    }

    await prisma.user.create({
      data: {
        email: body.username,
        password: body.password,
        name: body.name,
      }
    })

  console.log("user created", user)
  return c.text('User created successfully')
})






userRouter.post('/signin', async (c) => {
  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

   console.log("getting hit")
  const body = await c.req.json()

  console.log(body)

  const { success } = signinInput.safeParse(body);

  if (!success) {
      c.status(411);
      return c.json({
          message: "Inputs not correct"
      })
  }


  const user = await prisma.user.findUnique({
    where:{
      email: body.username,
    }
  })

  
  if (user?.password !== body.password || user?.email !== body.username) {
    c.status(403)
    return c.json({ error: "user not found" })
  }


  if(user){
    const token = await sign({ id: user.id}, c.env.JWT_SECRET)
    return c.json({
      token: token
    })
  }

})
