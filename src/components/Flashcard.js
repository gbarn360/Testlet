import React, { useEffect, useState } from "react";
import { FiTrash } from 'react-icons/fi';

export default function Flashcard({ index, deleteItem, id, onTermChange, onDefinitionChange }) {



    return (
        <div className="w-screen h-60 flex flex-row  space-x-5 border-t-2 border-slate-300 2xl:h-72 ">
            <div className="w-1/6 h-full  flex justify-center items-center">
                <h1 className="text-5xl font-bold text-slate-800">{index}</h1>
            </div>
            <div className="w-1/3 m-5 bg-white rounded-lg shadow-md flex justify-center">
                <div className="w-5/6  flex flex-col justify-center mt-20">
                    <input
                        onChange={(e) => onTermChange(index, e.target.value)}
                        className="w-5/6 border-b-2 border-slate-800 text-sm pb-1 outline-none"
                        type="text"
                        placeholder="enter term"
                    />
                    <h3 className="text-lg font-medium text-slate-600 2xl:text-xl">Term</h3>
                </div>
            </div>
            <div className="w-1/3 m-5 bg-white rounded-lg shadow-md flex justify-center">
                <div className="w-5/6  flex flex-col justify-center mt-20">
                    <input
                        onChange={(e) => onDefinitionChange(index, e.target.value)}
                        className="w-5/6 border-b-2 border-slate-800 text-sm pb-1 outline-none whitespace-pre-wrap"
                        type="text"
                        placeholder="enter definition"
                    />
                    <h3 className="text-lg font-medium text-slate-600 2xl:text-xl">Definition</h3>
                </div>
            </div>
            <div className="w-1/6 h-full flex justify-center items-center">
                <button
                    onClick={() => deleteItem(id)}
                    className="text-3xl font-bold text-slate-800"
                >
                    <FiTrash />
                </button>
            </div>
        </div>
    );
}
