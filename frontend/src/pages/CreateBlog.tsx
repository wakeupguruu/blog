import { TextEditor } from "../components/TextEditor";
import { TopBar } from "../components/TopBar";



export const CreateBlog = ()=>{
    return (
        <div>
            <TopBar/>
            <div className="ml-40">
                <TextEditor />
            </div>  
        </div>
    )
}