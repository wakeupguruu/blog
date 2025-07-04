import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Singup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { SingleBlogPage } from './pages/SingleBlog'
import { CreateBlog } from './pages/CreateBlog'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blog/>} />
          <Route path="/blog/:id" element={<SingleBlogPage />} />
          <Route path="/create-blog" element={<CreateBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

