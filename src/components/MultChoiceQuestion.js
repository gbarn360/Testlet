import React, { useState, useEffect } from "react";
import MultChoiceButton from "./MultChoiceButton";
export default function MultChoiceQuestion({ terms, definition, answerResult, answer, questionNumber }) {

    const [selectedAnswer, setSelectedAnswer] = useState();

    const [selectedTerms, setSelectedTerms] = useState([false, false, false, false])

    useEffect(() => {
        if (answer == selectedAnswer)
            answerResult({ questionNumber: questionNumber, answer: "correct", correctAnswer: answer })
        else
            answerResult({ questionNumber: questionNumber, answer: "incorrect", correctAnswer: answer })

    }, [selectedAnswer])



    const selectSelected = (index) => {
        if (index == 0) {

            setSelectedTerms([true, false, false, false]);
        }
        if (index == 1) {

            setSelectedTerms([false, true, false, false]);
        }
        if (index == 2) {

            setSelectedTerms([false, false, true, false]);
        }
        if (index == 3) {

            setSelectedTerms([false, false, false, true]);
        }
    }

    return (
        <div className="bg-white rounded-lg shadow-lg w-2/3 h-72">
            <div className="flex flex-row justify-center h-1/2 px-10">
                <h1 className="text-xl text-center mt-10 text-slate-800 overflow-auto" >{definition}</h1>
            </div>
            <div className="h-1/2 grid grid-cols-2 place-items-center">

                {terms.map((term, index) => <MultChoiceButton term={term} index={index} setAnswer={(term, index) => setSelectedAnswer(term)} selected={(index) => selectSelected(index)} selectedTerms={selectedTerms} />)}

            </div>
        </div>
    )
}