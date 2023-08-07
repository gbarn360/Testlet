import React, { useState, useEffect } from "react"

export default function FlashcardStack({ term, definition, onChange }) {

    const [flipped, setFlip] = useState(false);
    const [changeCardStyle, setChangeCardStyle] = useState("");
    useEffect(() => {

        setTimeout(() => { setChangeCardStyle("") }, 200);
        setChangeCardStyle("transition  -translate-y-16");
    }, [onChange])




    return (
        <div>
            <div onClick={() => { flipped == false ? setFlip(true) : setFlip(false) }} className={flipped == true ? `absolute bg-white shadow-lg rounded-lg w-1/2 flex justify-center items-center p-10 top-1/3 left-1/4 h-72 overflow-auto  ${changeCardStyle} z-20` : `absolute bg-white shadow-lg rounded-lg w-1/2 flex justify-center items-center p-10 top-1/3 left-1/4 h-72 ${changeCardStyle} z-20`}>
                <h1 className={flipped == false ? "block text-slate-400 absolute top-3 left-5" : "hidden"}>Term</h1>
                <h1 className={flipped == false ? "block text-center text-2xl" : "hidden "}>{term}</h1>
                <h1 className={flipped == false ? "hidden" : "block text-slate-400 absolute top-3 left-5"}>Definition</h1>
                <h1 className={flipped == false ? "hidden text-center text-2xl" : "block text-center text-2xl"}>{definition}</h1>
            </div>
            <div className="absolute bg-white shadow-lg rounded-lg w-1/2 flex justify-center items-center p-10 top-1/3 left-1/4 h-72 z-10">

            </div>
        </div >

    )
}