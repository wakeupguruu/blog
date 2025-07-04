import Caption from "../components/Caption"
import SignUpForm from "../components/SignUp"

export const Signup = ()=>{
    return(
        <div className="grid grid-cols-2">
            <div>
                <SignUpForm />
            </div>
            <div>
                <Caption />
            </div>
        </div>
        )
}