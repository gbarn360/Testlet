import React from "react";

export default function CreateCard({ subjectId, subjectName, display, Icon, color, header, text }) {

    return (
        <div onClick={() => { subjectName == "" ? window.location.href = `/home/${display}` : window.location.href = `/home/${subjectName}/${display}/${subjectId}` }} className={color == "blue" ? "w-3/4 xl:w-1/4 md:w-1/3 h-32 bg-blue-200 rounded-lg m-10 flex flex-row shadow-lg hover:bg-blue-400 transition-colors duration-200 ease-in-out" : " w-3/4 xl:w-1/4  md:w-1/3 h-32 bg-emerald-200 rounded-lg m-10 flex flex-row shadow-lg hover:bg-emerald-400 transition-colors duration-200 ease-in-out"}>
            <div className="w-1/4 h-full  flex justify-center items-center">
                <Icon className={color == "blue" ? "text-4xl text-blue-700" : "text-4xl text-emerald-700"} />
            </div>
            <div className="justify-center items-start flex flex-col">
                <h1 className="text-2xl text-slate-800 font-bold">{header}</h1>
                <h3 className="text-base tracking-wide pr-1">{text}</h3>
            </div>
        </div>
    )
}
