import React from "react"
export default function NavBar() {

    return (
        <div className=" w-auto h-14 flex flex-row text-sm bg-slate-50 text-slate-600 font-medium sticky top-0 z-40 shadow-xl">
            <div className=" flex justify-center items-center md:ml-10  ">
                <h1 className=" text-3xl font-bold text-blue-700  w-screen md:w-auto text-center md:text-left" >Testlet</h1>
            </div>
            {localStorage.getItem("token") == null ? " " : <div className=" space-x-10 md:flex items-center ml-10">
                {/* <a href="/home">Home</a> */}

            </div>}
            {localStorage.getItem("token") === null ? <div className="hidden space-x-10 md:flex items-center  md:flex-1 md:justify-end md:mr-6">
                <a href="/signIn">Log in</a>
                <a href="/createAccount" className=" bg-yellow-300 rounded-md p-2">Sign up</a>
            </div>
                : <div className="hidden space-x-10 md:flex items-center  md:flex-1 md:justify-end md:mr-6">
                    <button onClick={() => { window.location.href = "http://localhost:3000"; localStorage.removeItem("token") }} className=" bg-blue-800 text-white rounded px-2 py-2 text-xs">Sign out</button>
                </div>}

            {/* <div className="hidden space-x-10 md:flex items-center  md:flex-1 md:justify-end md:mr-6">
                <a href="/signIn">user</a>
            </div> */}
        </div>
    )
}