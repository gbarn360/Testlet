import React from "react";

export default function CreateCard({ display, Icon, color, header, text }) {

    return (
        <div onClick={() => { window.location.href = `/home/${display}` }} className={`w-1/3 h-3/4 bg-${color}-200 rounded-lg m-10 flex flex-row shadow-lg hover:bg-${color}-400 transition-colors duration-200 ease-in-out`}>
            <div className="w-1/4 h-full  flex justify-center items-center">
                <Icon className={`text-4xl text-${color}-700`} />
            </div>
            <div className="justify-center items-start flex flex-col">
                <h1 className="text-2xl text-slate-800 font-bold">{header}</h1>
                <h3 className="text-base tracking-wide pr-1">{text}</h3>
            </div>
        </div>
    )
}
