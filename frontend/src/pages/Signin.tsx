import Caption from "../components/Caption"
import SignInForm from "../components/SignIn"

export const Signin = ()=>{
    return(
            <div className="grid grid-cols-2">
                <div>
                    <SignInForm/>
                </div>
                <div>
                    <Caption />
                </div>
            </div>
            )
}