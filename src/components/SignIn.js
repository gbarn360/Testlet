import React from "react";
import { AiOutlineClose } from 'react-icons/ai';



export default function SignIn() {

    const accentColor = "blue-500";
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-screen h-screen ">
            <div className="hidden md:block bg-yellow-500">

            </div>
            <div className="flex flex-col  items-center bg-white ">
                <div className=" h-screen w-5/6 ">
                    <div className="flex flex-row h-1/6 space-x-10 mt-4 m-10 justify-center md:justify-between">
                        <div className="flex flex-row space-x-10 mt-8">
                            <button onClick={() => { window.location.href = "/createAccount" }} className=" h-10 text-2xl font-bold text-slate-400">Sign up</button>
                            <button className="text-2xl font-bold text-slate-800 border-b-4  h-10 border-yellow-400 pb-2">Log in</button>
                        </div>
                        <button onClick={() => { window.location.href = "/" }} className="text-4xl font-bold text-slate-800 mt-2 "><AiOutlineClose /></button>
                    </div>
                    <div className="flex flex-col  ml-10 space-y-10">
                        <div>
                            <input type="text" name="email" placeholder="Type your email address" className="w-5/6 border-b-2 p-2 border-slate-800 placeholder-slate-300 outline-none" />
                            <h3 className="text-slate-400 font-medium">Email</h3>
                        </div>

                        <div>
                            <input type="password" name="password" placeholder="Type your password" className="w-5/6 border-b-2 p-2 border-slate-800 placeholder-slate-300 outline-none" />
                            <div className="flex flex-row justify-between w-5/6">
                                <h3 className="text-slate-400 font-medium">Password</h3>
                                <button className={`text-${accentColor}`}>Forgot?</button>
                            </div>
                        </div>

                        <div className="flex flex-col w-5/6">
                            <button className={`bg-${accentColor} mt-10 h-16 text-xl font-medium text-white rounded-md`}>Log In</button>
                            <div className="flex flex-row border-2 border-slate-300 mt-5 p-2 justify-center space-x-2 text-sm rounded-md">
                                <h3 className="font-medium text-slate-700">New to Testlet?</h3>
                                <button onClick={() => { window.location.href = "/createAccount" }} className={`text-${accentColor}`}>Create an account</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}