import SaveSvg from "../assets/K0SjZy01.svg"
import UndoSvg from "../assets/eCdTPb01.svg"
import DotSvg from "../assets/93w1LP01.svg"
import { Link } from "react-router-dom"
interface BlogCardProps{
    title: string,
    content: string,
    date: string,
    authorName: string
    id: string
}
export const BlogSection = ({
    title, 
    content, 
    date, 
    authorName,
    id,
    }: BlogCardProps) => {

        return(
            <Link to={"/blog/"+id}>
                <div className="w-2/5">
                    <div className="flex justify-start space-x-1 text-xs">
                        <Avatar authorName={authorName} />
                        <p className="text-black font-semibold">
                            {authorName}.
                        </p>
                        <p className="text-gray-500">
                            ·{date}
                        </p>
                        <p className="text-gray-500">
                            - Members Only
                        </p>
                        
                    </div>
                    <div className="text-2xl mt-2  font-bold" >
                        {title}
                    </div>
                    <div className="line-clamp-2 font-serif mt-2 mb-6">
                        {content.slice(0, 150) + "..."}
                    </div>
                    <div className="flex justify-between space-x-2 text-xs">
                    
                        <div className="text-gray-500">
                            {`${Math.ceil(content.length / 100)} min read`}
                        </div>

                        <div className="flex hover:cursor-pointer ">
                            <img src={SaveSvg} alt=""className="w-10 h-10 hover:bg-gray-200 rounded-full" />
                            <img src={UndoSvg} alt=""className="w-10 h-10  hover:bg-gray-200 rounded-full" />
                            <img src={DotSvg} alt=""className="w-10 h-10  hover:bg-gray-200 rounded-full" />

                        </div>
                    </div>
                    <div className="border-t border-gray-200 mb-7 mt-5"></div>
                </div>
             </Link>

        )

}



export function Avatar({authorName}: {authorName: string}) {


    return (
        <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full">
            <span className="font-medium text-gray-600">{authorName[0]}</span>
        </div>
    )
}