import React, { useState } from "react";

export default function MultChoiceQuestion({ terms, definition }) {

    const [answer, setAnswer] = useState();
    const [term1Selected, setTerm1Selected] = useState(false)
    const [term2Selected, setTerm2Selected] = useState(false)
    const [term3Selected, setTerm3Selected] = useState(false)
    const [term4Selected, setTerm4Selected] = useState(false)


    return (
        <div className="bg-white rounded-lg shadow-lg w-2/3 h-72">
            <div className="flex flex-row justify-center h-1/2 px-10">
                <h1 className="text-xl text-center mt-10 text-slate-800 overflow-auto" >{definition}</h1>
            </div>
            <div className="h-1/2 grid grid-cols-2 place-items-center">
                <h2 onClick={() => { setAnswer(terms[0]); setTerm1Selected(true); setTerm2Selected(false); setTerm3Selected(false); setTerm4Selected(false) }} className={term1Selected ? 'bg-blue-800 rounded-lg w-2/3 py-2 text-white text-center' : `border-2 border-slate-300 rounded-lg w-2/3 text-center py-2 hover:py-2 hover:text-white hover:bg-blue-800 hover:border-blue-800`}>{terms[0]}</h2>
                <h2 onClick={() => { setAnswer(terms[1]); setTerm2Selected(true); setTerm1Selected(false); setTerm3Selected(false); setTerm4Selected(false) }} className={term2Selected ? 'bg-blue-800 rounded-lg w-2/3 py-2 text-white text-center' : `border-2 border-slate-300 rounded-lg w-2/3 text-center py-2 hover:py-2 hover:text-white hover:bg-blue-800 hover:border-blue-800`}>{terms[1]}</h2>
                <h2 onClick={() => { setAnswer(terms[2]); setTerm3Selected(true); setTerm1Selected(false); setTerm2Selected(false); setTerm4Selected(false) }} className={term3Selected ? 'bg-blue-800 rounded-lg w-2/3 py-2 text-white text-center' : `border-2 border-slate-300 rounded-lg w-2/3 text-center py-2 hover:py-2 hover:text-white hover:bg-blue-800 hover:border-blue-800`}>{terms[2]}</h2>
                <h2 onClick={() => { setAnswer(terms[3]); setTerm4Selected(true); setTerm1Selected(false); setTerm2Selected(false); setTerm3Selected(false) }} className={term4Selected ? 'bg-blue-800 rounded-lg w-2/3 py-2 text-white text-center' : `border-2 border-slate-300 rounded-lg w-2/3 text-center py-2 hover:py-2 hover:text-white hover:bg-blue-800 hover:border-blue-800`}>{terms[3]}</h2>

            </div>
        </div>
    )
}