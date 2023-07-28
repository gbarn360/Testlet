import React, { useState, useEffect } from "react";

export default function TrueFalseQuestion({ term, definition, answer }) {


    const displayResults = () => {
        if (answer == "true") {
            return (
                <div className="w-full flex flex-row justify-evenly">
                    <h2 className="border-2 border-slate-300 rounded-lg w-1/4 py-2 text-center bg-emerald-500 text-white">True</h2>
                    <h2 className="border-2 border-slate-300 rounded-lg w-1/4 py-2 text-center bg-red-500 text-white">False</h2>
                </div>

            )
        }
        return (
            <div className="w-full flex flex-row justify-evenly">
                <h2 className="border-2 border-slate-300 rounded-lg w-1/4 py-2 text-center bg-red-500 text-white">True</h2>
                <h2 className="border-2 border-slate-300 rounded-lg w-1/4 py-2 text-center bg-emerald-500 text-white">False</h2>
            </div>

        )
    }
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
                {displayResults()}

            </div>
        </div >
    )
}