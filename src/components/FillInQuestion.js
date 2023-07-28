import React, { useState, useEffect } from "react";

export default function FillInQuestion({ term, definition, answerResult, answer, questionNumber }) {

    const [selectedAnswer, setSelectedAnswer] = useState("");

    useEffect(() => {

        if (answer.replace(/ /g, '') == selectedAnswer.replace(/ /g, ''))
            answerResult({ questionNumber: questionNumber, answer: "correct", correctAnswer: answer })
        else
            answerResult({ questionNumber: questionNumber, answer: "incorrect", correctAnswer: answer })

    }, [selectedAnswer])
    return (

        <div className="bg-white rounded-lg shadow-lg w-2/3 h-72 ">
            <div className="flex flex-row justify-center h-2/3 px-10">
                <h1 className="text-xl text-center mt-10 text-slate-800 overflow-auto" >___________ : {definition}</h1>
            </div>
            <div className="flex flex-row justify-center h-1/3 ">
                <input onChange={(e) => { setSelectedAnswer(e.target.value) }} className="outline-none h-1/3 w-1/2 py-5 pl-2 border-2 border-slate-300 rounded-lg text-slate-800" type="text" placeholder="term" />
            </div>

        </div>
    )
}