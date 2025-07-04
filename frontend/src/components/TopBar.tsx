import Logo from "../assets/5zCSwO01.svg"
import SeatchSvg from "../assets/searchIcon.svg"
import WriteSvg from "../assets/writeicon.svg"
import BellSvg from "../assets/bellicon.svg"
import { Link } from "react-router-dom"

export const TopBar = () => {

    return(
        <div>
            <div className="flex justify-between">
                <div className="flex justify-start items-center">
                    <img src={Logo} alt="" className="h-35 w-35 -mb-10 -mt-10" />
                <div className="h-10 w-60 bg-[#FAF9F6] rounded-full flex justify-start items-center">
                        <img src={SeatchSvg} alt="" className="ml-2 h-6 w-15 " />
                        <input type="text" placeholder="Search" className="pl-2 outline-none" />
                </div>
                </div>

                <div className="flex justify-start items-center">
                    <Link to={"/create-blog"}>
                        <img src={WriteSvg} alt="" className="h-6 w-10 -mr-2" />
                    </Link>
                    
                    <p className="text-gray-500 ml-2 text-sm mr-5">Write</p>
                    <img src={BellSvg} alt="" className="h-10 w-10 mr-5" />
                    <Avatar authorName={"Guru"} />
                </div>
            </div>
             <div className="border-t border-gray-200 mb-10"></div>
        </div>
    )
}

function Avatar({authorName}: {authorName: string}) {
    return (
        <div className="relative mr-10 inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
            <span className="font-medium text-gray-600">{authorName[0]}</span>
        </div>
    )
}