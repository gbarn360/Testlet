import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import CreateCard from "../components/CreateCard";
import axios from "axios";
import { BsBoxFill } from 'react-icons/bs';
import { RxCardStack } from 'react-icons/rx';
import Subject from "../components/Subject";


export default function Home() {

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        try {
            axios.post("http://localhost:8000/getSubjects.php", {
                item: {
                    token: localStorage.getItem("token")
                }
            }).then(response => { setSubjects(response.data) });

        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <div >
            <Navbar />
            <div className="w-screen h-auto flex flex-col bg-slate-100 " >
                <div className="w-screen h-2/5  flex flex-row items-center justify-start">
                    <CreateCard display={"createSubject"} Icon={BsBoxFill} color={"emerald"} header={"Create Subject"} text={"For organizing your flashcards and quizzes"} />
                    <CreateCard display={"createFlashcard"} Icon={RxCardStack} color={"blue"} header={"Create Flashcard"} text={"For creating key-answer pairs"} />

                </div>
                <div className="w-screen h-screen mt-5">
                    <h1 className="text-lg font-bold text-slate-700 tracking-wide ml-10">Subjects</h1>
                    <div className="grid grid-cols-3 justify-items-center mt-10">
                        {subjects.map((subject) =>
                            <Subject key={subject.id} name={subject.subjectName} subjectId={subject.id} />
                        )}

                    </div>
                </div>



            </div>
        </div>
    )
}