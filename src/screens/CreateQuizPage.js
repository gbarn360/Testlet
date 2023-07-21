import React, { useState, useEffect } from "react"
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CreateQuizPage() {

    const { subjectName } = useParams();
    const { id } = useParams();
    const [flashcardSets, setFlashcardSets] = useState([]);
    const [selectedFlashcardSet, setSelectedFlashcardSet] = useState();
    const [selectedAnswerWith, setSelectedAnswerWith] = useState("Term");
    const [multipleChoice, setMultipleChoice] = useState("on");
    const [trueFalse, setTrueFalse] = useState("off");
    const [matching, setMatching] = useState("off");
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        axios.post("http://localhost:8000/getFlashcardSets.php", {
            item: {
                subjectId: id,
            }
        }).then(response => { setFlashcardSets(response.data); setSelectedFlashcardSet(response.data[0].flashcardTitle) });
    }, []);

    const beginQuiz = () => {
        let flashcardSet = flashcardSets.filter(set => set.flashcardTitle == selectedFlashcardSet)
        window.location.href = `http://localhost:3000/home/${subjectName}/Quiz/${flashcardSet[0].flashcardTitle}/${flashcardSet[0].id}/${selectedAnswerWith}/${multipleChoice}/${trueFalse}/${matching}`;

    }

    return (
        <div className="bg-slate-100">
            <NavBar />
            <div className="w-screen mb-10  flex flex-col justify-start items-center">
                <h1 className="text-5xl font-bold text-slate-800 mt-20 m-5 2xl:text-6xl">Let's quiz your knowledge</h1>
                <h3 className="text-base text-slate-600 2xl:text-lg">Better prepare yourself by taking a quiz</h3>
            </div>
            <div className="w-screen h-40 border-t-2 border-slate-300 flex flex-col space-y-1 pt-5 ">
                <h1 className="ml-20 text-2xl text-slate-700">{subjectName}</h1>
                <h2 className="ml-20 text-2xl font-bold">Customize your quiz</h2>
            </div>
            <div className="flex flex-row ml-20">
                <div className="w-1/2 ">
                    <div className="flex flex-row justify-between">
                        <h2 className="font-medium text-lg">Select your flashcardSet</h2>
                        <select onChange={(e) => { setSelectedFlashcardSet(e.target.value) }} name="flashcardSets" className="w-auto mr-4 rounded-md shadow-sm p-2">
                            {flashcardSets.map((set, index) => <option  >{set.flashcardTitle}</option>)}
                        </select>

                    </div>

                    {/* <div className="flex flex-row mt-10 justify-between">
                        <h2 className="font-medium text-lg ">Answer with </h2>
                        <select onChange={(e) => setSelectedAnswerWith(e.target.value)} name="flashcardSets" className=" rounded-md shadow-sm mr-4 w-1/6 p-2">
                            <option>Term</option>
                            <option>Definition</option>
                            <option>Both</option>
                        </select>
                    </div> */}

                </div>
                <div className="w-1/2 space-y-5 border-l-2 border-slate-300 mb-20">

                    <div className="flex flex-row justify-between  mr-10 items-center">
                        <h2 className="ml-10 ">Multiple Choice</h2>
                        <input className="w-4 h-4" type="checkbox" checked={!checked} onClick={() => { checked == true ? setChecked(false) : setChecked(true); multipleChoice == "off" ? setMultipleChoice("on") : setMultipleChoice("off") }} />
                    </div>
                    <div className="flex flex-row justify-between  mr-10 items-center">
                        <h2 className="ml-10 ">Fill In</h2>
                        <input className="w-4 h-4" type="checkbox" onClick={() => { matching == "off" ? setMatching("on") : setMatching("off") }} />
                    </div>
                    <div className="flex flex-row justify-between  mr-10 items-center">
                        <h2 className="ml-10 ">True/False</h2>
                        <input className="w-4 h-4 " type="checkbox" onClick={() => { trueFalse == "off" ? setTrueFalse("on") : setTrueFalse("off") }} />
                    </div>

                </div>


            </div>

            <div className="w-screen flex justify-center pb-10">
                <button onClick={() => { beginQuiz() }} className="bg-blue-500 p-2 w-40 rounded text-white">Begin Quiz</button>
            </div>
        </div>
    )
}
