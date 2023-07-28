import React, { useState, useEffect } from "react";

export default function MultChoiceQuestionResult({ terms, definition, answer, selected }) {


    const displayTerm = (term) => {
        if (term == answer) return <h2 className="border-2 border-slate-300 rounded-lg w-2/3 text-center py-2 bg-emerald-500 text-white">{term}</h2>
        else if (term == selected) return <h2 className="border-2 border-slate-300 rounded-lg w-2/3 text-center py-2 bg-red-500 text-white ">{term}</h2>
        else return <h2 className="border-2 border-slate-300 rounded-lg w-2/3 text-center py-2 " >{term}</h2>
    }

    return (
        <div className="bg-white rounded-lg shadow-lg w-2/3 h-72">
            <div className="flex flex-row justify-center h-1/2 px-10">
                <h1 className="text-xl text-center mt-10 text-slate-800 overflow-auto" >{definition}</h1>
            </div>
            <div className="h-1/2 grid grid-cols-2 place-items-center">


                {terms.map((term, index) => displayTerm(term))}

            </div>
        </div>
    )
}