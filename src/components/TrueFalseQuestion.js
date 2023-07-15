import React, { useState } from "react";

export default function TrueFalseQuestion({ term, definition }) {

    const [trueSelected, setTrueSelected] = useState(false);
    const [falseSelected, setFalseSelected] = useState();

    const [answer, setAnswer] = useState();
    return (
        <div className="bg-white rounded-lg shadow-lg w-2/3 h-80">
            <div className="flex flex-row justify-center h-2/3 ">
                <div className="flex flex-col w-1/2">
                    <h1 className="text-slate-400 mt-5 ml-10">term</h1>
                    <h1 className="text-xl text-center mt-10 text-slate-800" >{term}</h1>
                </div>
                <div className="flex flex-col w-1/2 border-l-2 border-slate-300 m-2 ">
                    <h1 className="text-slate-400 mt-5 ml-10">Definition</h1>
                    <h1 className="text-xl text-center mt-10 text-slate-800 overflow-auto px-5" >{definition}</h1>
                </div>
            </div>

            <div className="flex flex-row justify-center space-x-20 mt-4">
                <button onClick={() => { setAnswer("true"); setTrueSelected(true); setFalseSelected(false) }} className={trueSelected ? 'bg-blue-800 rounded-lg w-1/4 py-2 text-white' : `border-2 border-slate-300 rounded-lg w-1/4 py-2 hover:py-2 hover:text-white hover:bg-blue-800 hover:border-blue-800`}>True</button>
                <button onClick={() => { setAnswer("false"); setFalseSelected(true); setTrueSelected(false) }} className={falseSelected ? 'bg-blue-800 rounded-lg w-1/4 py-2 text-white' : `border-2 border-slate-300 rounded-lg w-1/4 py-2 hover:py-2 hover:text-white hover:bg-blue-800 hover:border-blue-800`}>False</button>
            </div>
        </div >
    )
}