import PlusLogo from "../assets/plus.svg"
import { BlogSection } from "../components/BlogSection";
import { TopBar } from "../components/TopBar";
import { useBlogs } from "../hooks";
export const Blog = () => {

    const {loading, blogs} = useBlogs()

    if(loading){
        return(<div>Loading...</div>)
    }

    return (
        <div>
          <TopBar />
          <div className="ml-40">
            <div className="flex justify-start">
                <img src={PlusLogo} alt="" className="w-5 h-5 mr-5 hover:cursor-pointer  hover:bg-gray-200 hover:rounded-full "/>
                <p className="text-sm font-medium text-gray-500 hover:text-black hover:underline hover:cursor-pointer mr-5">For you</p>
                  <p className="text-sm font-medium text-gray-500 hover:text-black hover:underline hover:cursor-pointer">Following</p>
            </div>
            <div className="border-t mr-60 border-gray-200 mt-3 mb-10"></div>

            {blogs.map((blog: { id: string, author: { name: string }, title: string, content: string, date: string }) => {
                return (
                    <BlogSection key={blog.id} id={blog.id} authorName={blog.author.name || "Anonymous"} title={blog.title} content={blog.content} date={blog.date} />
                )
            })}
          </div>  
        </div>
            
        );
}




