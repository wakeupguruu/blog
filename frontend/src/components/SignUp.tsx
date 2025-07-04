import { Link, useNavigate} from "react-router-dom";
import type { ChangeEventHandler } from "react";
import { useState} from "react";
import type {SignupInput} from "../../../common/src/index"
import axios from "axios";
import { Alert, AlertDescription, AlertTitle } from "./Alert";


export default function SignUpForm() {
    
    const [alertInfo, setAlertInfo] = useState<{
    message: string;
    title: string;
    type: "default" | "destructive" | null;
  }>({ message: "", title: "", type: null });

    const navigate = useNavigate();
    async function sendRequest() {
        try {
            await axios.post("http://127.0.0.1:8787/api/v1/user/signup", postInputs);

            setAlertInfo({
                message: "Your Account has been created",
                title: "Success",
                type: "default",
            })

            setTimeout(() => {
                setAlertInfo({ title: "", message: "", type: null });
            }, 4000);

            navigate("/signin")
        } catch (error) {

            setAlertInfo({
                message: "An Error has occured while creating your Account",
                title: "Error",
                type: "destructive",
            })

            setTimeout(() => {
                setAlertInfo({ title: "", message: "", type: null });
            }, 4000);
        }
    }

    const [postInputs, setPostInputs] = useState<SignupInput>({
        username: "",
        password: "",
        name: "",
    });

    return (
        <div className=" h-screen flex justify-center items-center">
            <div className="w-96">
                <div className="text-center mb-6"> {/* ✅ Center text inside fixed width */}
                    <p className="text-3xl font-bold">Create an account</p>
                    <p className="text-gray-500 mt-2">
                        Already have an account?{" "}
                        <Link className="underline" to={"/signin"}>Login</Link>
                    </p>
                </div>

                <InputBox type="text" label="Username" placeholder="Enter your name" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                }}/>

                <InputBox type="email" label="Email" placeholder="yourgmail@gmail.com" onChange={(e) => {setPostInputs({
                    ...postInputs,
                    username: e.target.value
                })}}/>

                <InputBox type="password" label="Password" placeholder="●●●●●●●" onChange={(e) =>{
                    setPostInputs({
                        ...postInputs,
                        password: e.target.value
                    })
                }}/>

                <button onClick={sendRequest} className="bg-black text-white w-full mt-4 p-2 rounded-md hover:bg-gray-800 hover:text-white">Sing Up</button>
            </div>
            {alertInfo.type && (
                <div className="fixed top-4 left-4 z-50 w-full max-w-xs animate-fade-in-out">
                    <Alert variant={alertInfo.type}>
                    <AlertTitle>{alertInfo.title}</AlertTitle>
                    <AlertDescription>{alertInfo.message}</AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
    );
}



interface LableInputInterface
{
    type: string,
    label: string,
    placeholder: string,
    onChange: ChangeEventHandler<HTMLInputElement>
}

function InputBox({type, label ,placeholder, onChange }: LableInputInterface) {
    return (
        <div>
            <label className="block mb-2 font-semibold text-black">{label}</label>
            <input  onChange={onChange} type={type} id="first_name" className="bg-white border border-gray-300 text-gray-900  text-sm rounded-lg block w-96 p-2.5 mb-5" placeholder={placeholder} required />
        </div>
     );
}