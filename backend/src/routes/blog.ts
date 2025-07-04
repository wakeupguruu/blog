import { Hono } from "hono";
import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "@prisma/client/edge";
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "../../../common/src/index";
import { format } from 'date-fns';

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  },
  Variables: {
    userId: string;
  }
}>();


blogRouter.use('/*', async (c, next) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const headers = c.req.header('authorization')
    console.log("Headers:", headers);

    if (!headers) {
      c.status(401)
      return c.json({ error: "Unauthorized" })
    }

    const token = headers.split(' ')[1]
    console.log("Token:", token);

    const payload = await verify(token, c.env.JWT_SECRET)
    console.log("Payload:", payload);
    if (!payload) {
      c.status(401)
      return c.json({ error: "Unauthorized" })
    }

    if (payload.id) {
      c.set('userId', payload.id as string)
      console.log("next functoin is getting called")
      await next()
      console.log("next function is called")
    } else {
      c.status(401)
      return c.json({ error: "Unauthorized" })
    }
  } catch (err) {
    console.error('Middleware error:', err);
    c.status(500);
    return c.json({ error: 'Internal server error', details: String(err) });
  }
})




blogRouter.post('/', async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const userId = c.get('userId')

    const body = await c.req.json()
    if (!body.title || !body.content) {
      c.status(400)
      return c.json({ error: "title and content are required" })
    }

    const success = createBlogInput.safeParse(body);
    if (!success) {
      c.status(411);
      return c.json({
        message: "Inputs not correct"
      })
    }

    const createdPost = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId
      }
    })

    return c.json(createdPost)
  } catch (err) {
    console.error('POST / error:', err);
    c.status(500);
    return c.json({ error: 'Internal server error', details: String(err) });
  }
})




blogRouter.put('/', async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())


    const userId = c.get('userId')

    const body = await c.req.json()
    if (!body.title && !body.content) {

      c.status(400)
      c.json({ error: "title or content are required" })
    }

    const success = updateBlogInput.safeParse(body);
    if (!success) {
      c.status(411);
      return c.json({
        message: "Inputs not correct"
      })
    }

    const pastPost = await prisma.blog.findUnique({
      where: {
        id: body.id
      }
    })


    if (!pastPost) {
      c.status(404)
      return c.json({ error: "post not found" })
    }

    if (pastPost.authorId !== userId) {
      c.status(403)
      return c.json({ error: "You are not authorized to update this post" })
    }

    const newPost = await prisma.blog.update({
      where: {
        id: body.id
      },
      data: {
        title: body.title,
        content: body.content,
        authorId: userId
      }
    })

    return c.json(newPost)
  } catch (err) {
    console.error('PUT / error:', err);
    c.status(500);
    return c.json({ error: 'Internal server error', details: String(err) });
  }
})





blogRouter.get('/bulk', async (c) => {
  try {
    console.log("Bulk route hit!");
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

   

    const blogs = await prisma.blog.findMany({
      select: {
        content: true,
        title: true,
        id: true,
        date: true,
        author: {
          select: {
            name: true
          }
        }
      }
    });
    const blogsWithFormattedDates = blogs.map(blog => ({
      ...blog,
      date: format(new Date(blog.date), 'MMM d, yyyy'), // e.g. May 20, 2025

    }));

    return c.json({
      blogs: blogsWithFormattedDates
    })
  } catch (err) {
    console.error('GET /bulk error:', err);
    c.status(500);
    return c.json({ error: 'Internal server error', details: String(err) });
  }
})






blogRouter.get('/:id', async (c) => {
  try {

    console.log("GET /:id route hit!", c.req.param('id'));
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const id = c.req.param('id')

    const blog = await prisma.blog.findUnique({
      where: {
        id: id
      }, select: {
        title: true,
        content: true,
        id: true,
        date: true,
        author: {
          select: {
            name: true
          }
        }
      }
    })

    if (!blog) {
      c.status(404)
      return c.json({ error: "post not found" })
    }

    const blogsWithFormattedDates = {...blog, date: format(new Date(blog.date), 'MMM d, yyyy')}

    return c.json({
      blog: blogsWithFormattedDates
    })
  } catch (err) {
    console.error('GET /:id error:', err);
    c.status(500);
    return c.json({ error: 'Internal server error', details: String(err) });
  }
})



