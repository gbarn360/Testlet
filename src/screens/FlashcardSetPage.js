import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";
import FlashcardStack from "../components/FlashcardStack";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';


export default function FlashcardSetPage() {
    const { subjectName, flashcardSet, id } = useParams();
    const [flashcards, setFlashcards] = useState([]);
    const [currentFlashcard, setCurrentFlashcard] = useState();
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.post("http://localhost:8000/getFlashcards.php", {
            item: {
                setId: id,
            },
        }).then(response => {
            console.log(response.data);
            setFlashcards(response.data);
            setCurrentFlashcard(response.data[0]);
        });
    }, []);

    return (
        <div className="w-screen h-screen bg-slate-100 flex flex-col">
            <NavBar />
            <h1 className="text-center text-5xl text-slate-800 font-bold mt-5">
                {flashcardSet}
            </h1>
            <div className="flex flex-col items-center">
                <div className="flex flex-row justify-between w-1/2 mt-6">
                    <AiOutlineArrowLeft className="text-2xl" onClick={() => { if (count != 0) { setCount(count - 1); setCurrentFlashcard(flashcards[count - 1]) } else setCount(count) }} />
                    <h2 className="text-center text-xl  font-medium">{count + 1} / {flashcards.length}</h2>
                    <AiOutlineArrowRight className="text-2xl" onClick={() => { if (count != flashcards.length - 1) { setCount(count + 1); setCurrentFlashcard(flashcards[count + 1]) } else setCount(count) }} />
                </div>
                {currentFlashcard && (
                    <FlashcardStack
                        term={currentFlashcard.term}
                        definition={currentFlashcard.def}
                        onChange={count}
                    />
                )}
            </div>
        </div>
    );
}
