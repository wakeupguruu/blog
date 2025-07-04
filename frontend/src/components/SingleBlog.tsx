import { Avatar } from "./BlogSection"
import { useSingleBlog } from "../hooks"
import { useParams } from "react-router-dom"


export const SingleBlog = () => {

    
    const {id} = useParams();
    const { loading, singleBlog } = useSingleBlog(id || "");

    if(loading){
        <div>
            Loading...
        </div>
    }

    return(

        <div className="flex flex-row">
             <div className="basis-2/3 mt-5 ml-20 mr-5">
                <div className="text-5xl font-extrabold mb-2 ">
                    {singleBlog.title}
                </div>
                <div className="text-gray-500 mb-3">
                   {singleBlog.date}
                </div>

                <div>
                    {singleBlog.content}
                </div>
            </div>

            <div className="basis-1/3 mt-5 flex flex-col overflow-hidden">
                <div className="space-y-2">
                    <div className="mb-5">Author</div>
                        <div className="flex items-center space-x-3">
                            <Avatar authorName="Jokster" />
                            <div className="font-bold text-2xl">{singleBlog.authorName}</div>
                        </div>
                    <div className="text-sm ml-8 text-gray-600 w-2/3">Master of mirth, purvey of puns, and the funniest person in the kingdom</div>
                </div>
            </div>

        </div>



    )
}