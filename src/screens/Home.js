import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import CreateCard from "../components/CreateCard";
import Subject from "../components/Subject";
import { BsBoxFill } from 'react-icons/bs';
import { RxCardStack } from 'react-icons/rx';


export default function Home() {





    return (
        <div >
            <Navbar />
            <div className="w-screen h-screen flex flex-col " >
                <div className="w-screen h-2/5  flex flex-row items-center justify-start">
                    <CreateCard display={"createSubject"} Icon={BsBoxFill} color={"emerald"} header={"Create Subject"} text={"For organizing your flashcards and quizzes"} />
                    <CreateCard display={"createFlashcard"} Icon={RxCardStack} color={"blue"} header={"Create Flashcard"} text={"For creating key-answer pairs"} />

                </div>
                <div className="w-screen h-screen mt-5">
                    <h1 className="text-lg font-bold text-slate-700 tracking-wide ml-10">Subjects</h1>
                    <div className="grid grid-cols-3 justify-items-center mt-10">
                        <Subject name={"Math and Stats"} />
                        <Subject name={"CMPSC 441"} />
                        <Subject name={"Chemistry 110"} />
                        <Subject />

                    </div>
                </div>



            </div>
        </div>
    )
}