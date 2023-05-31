import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function FlashcardSetPage() {

    const { subjectName } = useParams();
    const { flashcardSet } = useParams();
    const { id } = useParams();
    const [flashcards, setFlashcardSets] = useState([]);

    useEffect(() => {
        axios.post("http://localhost:8000/getFlashcards.php", {
            item: {
                setId: id,
            }
        }).then(response => console.log(response.data))
    }, [])

    return (
        <div className="w-screen h-auto bg-slate-100 flex flex-col ">
            <NavBar />
            <div className="flex flex-col ">

            </div>
        </div >
    )
}