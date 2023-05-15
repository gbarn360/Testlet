
import React from "react";


export default function Reviews({ name, review }) {


    return (
        <div className=" border-2 rounded-md p-5 flex flex-col items-center shadow-lg">
            <h1 className="text-bold text-xl md:text-3xl w-5/6 border-b-2 text-center pb-2">{name}</h1>
            <p className="mt-5 font-medium text-sm md:text-base">"{review}"</p>
        </div>


    )
}