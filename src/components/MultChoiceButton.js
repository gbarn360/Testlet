import React, { useState } from "react";

export default function MultChoiceButton({ term, index, setAnswer, selected, selectedTerms }) {

    const [termSelected, setTermSelected] = useState()

    return (
        <h2 onClick={() => { setAnswer(term, index); selected(index) }} className={selectedTerms[index] ? 'bg-blue-800 rounded-lg w-2/3 py-2 text-white text-center' : `border-2 border-slate-300 rounded-lg w-2/3 text-center py-2 hover:py-2 hover:text-white hover:bg-blue-800 hover:border-blue-800`}>{term}</h2>
    )
}