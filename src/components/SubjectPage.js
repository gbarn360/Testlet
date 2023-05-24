import React from "react"
import NavBar from "./NavBar"
import CreateCard from "./CreateCard"
import { BsBoxFill } from 'react-icons/bs';
import { RxCardStack } from 'react-icons/rx';
import { useParams } from "react-router-dom";

export default function SubjectPage() {
    const { subjectId } = useParams();

    return (
        <div>
            <NavBar />
            <div className="w-screen h-screen flex flex-col">
                <div className="w-screen flex flex-row">
                    <div className="w-1/3 flex justify-start items-start ">
                        <h1 className="text-5xl font-bold  h-full pt-10 pl-10 text-slate-800">{subjectId.replace(/_/g, " ")}</h1>
                    </div>
                    <div className="w-2/3 flex flex-row justify-end items-start ">
                        <CreateCard Icon={BsBoxFill} color={"yellow"} header={"Create Quiz"} text={"For testing your knowledge"} />
                        <CreateCard display={"createFlashcard"} Icon={RxCardStack} color={"blue"} header={"Create Flashcard"} text={"For creating key-answer pairs"} />
                    </div>
                </div>
                <div className="w-screen h-screen grid grid-cols-2 mt-20">
                    <div className="">
                        <h1 className="text-lg font-bold text-slate-700 tracking-wide ml-10">Flashcards</h1>

                    </div>
                    <div className="">
                        <h1 className="text-lg font-bold text-slate-700 tracking-wide ml-10">Quizzes</h1>

                    </div>
                </div>

            </div>
        </div>

    )
}