import React, { useState, useEffect } from "react"
import NavBar from "./NavBar"
import CreateCard from "./CreateCard"
import FlashcardSet from "./FlashcardSet";
import { BsBoxFill } from 'react-icons/bs';
import { RxCardStack } from 'react-icons/rx';
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SubjectPage() {
    const { subjectName } = useParams();
    const { id } = useParams();
    const [flashcardSets, setFlashcardSets] = useState([]);

    useEffect(() => {
        axios.post("http://localhost:8000/getFlashcardSets.php", {
            item: {
                subjectId: id,
            }
        }).then(response => { console.log(response.data); setFlashcardSets(response.data) });
    }, [])


    return (
        <div>
            <NavBar />
            <div className="w-screen h-auto flex flex-col bg-slate-100">
                <div className="w-screen flex flex-row">
                    <div className="w-1/3 flex justify-start items-start ">
                        <h1 className="text-7xl font-bold  h-full pt-10 pl-10 text-slate-800  xl:m-5">{subjectName.replace(/_/g, " ")}</h1>
                    </div>
                    <div className="w-2/3 flex flex-row justify-end items-start xl:justify-center">
                        <CreateCard subjectId={id} subjectName={subjectName} Icon={BsBoxFill} color={"yellow"} header={"Create Quiz"} text={"For testing your knowledge"} />
                        <CreateCard subjectId={id} subjectName={subjectName} display={"createFlashcard"} Icon={RxCardStack} color={"blue"} header={"Create Flashcard"} text={"For creating key-answer pairs"} />
                    </div>
                </div>
                <div className="w-screen h-screen grid grid-cols-2 mt-20">
                    <div className="">
                        <h1 className="text-lg font-bold text-slate-700 tracking-wide ml-10 xl:text-2xl">Flashcards</h1>
                        {flashcardSets.map((set) =>
                            <FlashcardSet subjectName={subjectName} setId={set.id} title={set.flashcardTitle} description={set.flashcardDescription} />
                        )}
                    </div>
                    <div className="">
                        <h1 className="text-lg font-bold text-slate-700 tracking-wide ml-10 xl:text-2xl">Quizzes</h1>

                    </div>
                </div>

            </div>
        </div>

    )
}