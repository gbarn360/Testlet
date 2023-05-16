import React from "react";

export default function Plans({ title, features, btnColor }) {
    const buttonStyle = btnColor === "blue" ? "bg-blue-500" : "bg-yellow-500";

    return (
        <div className="flex flex-col border-2 rounded-lg w-80 mt-20 shadow-lg">
            <h1 className="text-center flex-1 border-b-2 p-2 text-lg font-medium 2xl:text-xl">
                {title}
            </h1>
            <ul className="text-sm space-y-3 mb-12 m-4">
                {features.map((item) => {
                    return <li>{item}</li>;
                })}
            </ul>
            <div className="flex justify-center">
                <button onClick={() => { window.location.href = "/createAccount" }}
                    className={`${buttonStyle} text-white font-medium p-2 rounded-lg mt-5 w-1/2 m-6 shadow-md`}
                >
                    Sign up
                </button>
            </div>
        </div>
    );
}
