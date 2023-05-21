import React, { useState } from "react";
import NavBar from "./NavBar";
export default function CreateSubject() {

    const [subjectName, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const createSubject = () => {
        if (subjectName.length > 0) {
            //make api call

            window.location.href = "/home";
        }
        else {
            setErrorMessage("Must include a name");
        }
    }
    return (

        <div className="w-screen h-screenbg-white ">
            <NavBar />
            <div className="w-screen h-screen flex flex-col justify-start items-center">
                <h1 className="text-5xl font-bold text-slate-800 mt-20 m-5">Let's create a subject</h1>
                <h3 className="text-base text-slate-600">Subjects allow you to organize your flashcards and quizzes</h3>
                <input onChange={(e) => { if (subjectName.length > 0) { setErrorMessage("") } setName(e.target.value) }} type="text" name="subjectName" placeholder="enter a subject name" className="w-1/4 border-2 rounded-xl p-2 mt-14 border-blue-800 placeholder-slate-300 text-center outline-none" />
                <h4 className="text-red-500">{errorMessage}</h4>
                <button className="m-10 rounded-lg bg-blue-800 pt-2 pb-2 p-10 text-white" onClick={() => { alert("subject created: " + subjectName); createSubject() }}>Create Subject</button>
            </div>
        </div>
    )
}