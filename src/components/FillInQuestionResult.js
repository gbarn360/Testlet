import React, { useState, useEffect } from "react";

export default function FillInQuestion({ term, definition, answer }) {


    return (

        <div className="bg-white rounded-lg shadow-lg w-2/3 h-72 ">
            <div className="flex flex-row justify-center h-2/3 px-10">
                <h1 className="text-xl text-center mt-10 text-slate-800 overflow-auto" >___________ : {definition}</h1>
            </div>
            <div className="flex flex-row justify-center h-1/3 ">
                <h2 className="text-2xl ">{answer}</h2>
            </div>

        </div>
    )
}