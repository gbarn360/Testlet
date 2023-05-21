import React, { useState } from "react";
import NavBar from "./NavBar";
import Flashcard from "./Flashcard";

export default function CreateFlashCard() {
    const [subject, setSubject] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    return (

        <div className="w-screen h-auto bg-slate-100 ">
            <NavBar />
            <div className="w-screen  flex flex-col justify-start items-center">
                <h1 className="text-5xl font-bold text-slate-800 mt-20 m-5">Let's create a flashcard set</h1>
                <h3 className="text-base text-slate-600">Flashcards allow you to create term-definition pairs to help with studying</h3>
            </div>
            <div className="w-screen flex flex-row justify-center ">
                <div className="flex flex-col w-1/3 m-10 space-y-5">
                    <div className=" ">
                        <h3 className="text-sm ml-1 text-slate-800 mb-1 font-medium">subject</h3>
                        <input onChange={(e) => { setSubject(e.target.value) }} className=" text-sm w-full shadow-md rounded-lg p-3" type="text" placeholder="add a subject name" />
                    </div>
                    <div className="">
                        <h3 className="text-sm ml-1 text-slate-800 mb-1 font-medium">title</h3>
                        <input onChange={(e) => { setTitle(e.target.value) }} className="text-sm w-full shadow-md rounded-lg p-3" type="text" placeholder="title your flashcard set" />

                    </div>
                </div>
                <div className="w-2/3 m-10 ">
                    <h3 className="text-sm ml-1 text-slate-800 mb-1 font-medium">description</h3>
                    <input onChange={(e) => { setDescription(e.target.value) }} className="text-sm w-full  shadow-md rounded-lg pl-2 pt-2 pb-28" type="text" placeholder="add a description..." />
                </div>

            </div>
            <div className="w-screen flex flex-col justify-center items-center mt-20">
                <Flashcard index={1} />
                <Flashcard index={2} />
                <Flashcard index={3} />

                <button className="bg-blue-800 w-1/4 p-2 rounded-xl text-white mt-10">add another</button>
            </div>
        </div>
    )
}