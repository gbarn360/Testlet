
import React from "react";


export default function Description({ header, description, Icon, iconColor }) {

    return (
        <div className="  pt-5 flex flex-col items-center ">
            <Icon className={`text-4xl mb-8 ${iconColor}`} />
            <h1 className="text-xl md:text-3xl font-bold text-slate-700">{header}</h1>
            <h3 className=" text-sm mt-4 w-2/3 leading-6">
                {description}</h3>
        </div>
    )
}