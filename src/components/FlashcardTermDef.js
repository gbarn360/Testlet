import React, { useState, useEffect } from "react";
import { HiOutlinePencil } from 'react-icons/hi';
import { AiFillDelete } from 'react-icons/ai';


export default function FlashcardTermDef({ term, definition, displayDeleteButton, onDelete, onTermChange, onDefChange }) {

    const [updatedTerm, setTerm] = useState(term);
    const [updatedDefinition, setDefinition] = useState(definition);
    const [readable, setReadable] = useState(false);
    const [displayRemoveButton, setDisplayRemoveButton] = useState(displayDeleteButton);
    const [selected, setSelected] = useState("");

    useEffect(() => {
        setTerm(term);
        setDefinition(definition);
    }, [term, definition])

    return (
        <div className="flex flex-row justify-center w-screen">
            <div className="bg-white m-5 rounded-lg shadow-lg w-3/4  flex flex-row p-2 items-center" >
                <div className=" p-2 w-1/6 ">
                    <input value={updatedTerm} id="term" disabled={!readable} onChange={(e) => { setTerm(e.target.value); onTermChange(updatedTerm) }} className={`w-full text-center bg-white ${selected}`} />
                </div>
                <div className=" border-l-2 p-2 h-auto w-5/6 ">
                    <input value={updatedDefinition} id="definition" disabled={!readable} onChange={(e) => { setDefinition(e.target.value); onDefChange(updatedDefinition) }} className={`w-full bg-white ${selected}`} />
                </div>
                <div className="mr-5 text-xl" onClick={() => { if (readable == false) { setReadable(true); setDisplayRemoveButton("block"); setSelected("border-b-2 pb-1 border-blue-800") } else { setReadable(false); setDisplayRemoveButton("hidden"); setSelected("") } }}>
                    <HiOutlinePencil />
                </div>
            </div>
            <div className={`flex justify-center items-center ${displayRemoveButton}`} onClick={onDelete} >
                <AiFillDelete className="text-2xl text-slate-800" />
            </div>
        </div >

    )
}