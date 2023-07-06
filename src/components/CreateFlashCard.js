import React, { useState } from "react";
import NavBar from "./NavBar";
import Flashcard from "./Flashcard";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { useParams } from "react-router-dom";


export default function CreateFlashCard() {
    const { subjectName } = useParams();
    const { id } = useParams();



    const [subject, setSubject] = useState(subjectName);
    const [subjectId, setSubjectId] = useState(id);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [flashcards, setFlashcards] = useState([{ index: 1, id: uuidv4(), term: "", definition: "" },]);
    const [count, setCount] = useState(1);




    const saveFlashCardSet = async () => {
        try {
            await axios.post("http://localhost:8000/createFlashcard.php", {
                item: {
                    subject: subject,
                    title: title,
                    description: description,
                    flashcards: flashcards,
                    token: localStorage.getItem("token")
                }
            }).then(response => { window.location.href = `/home/${subject.replace(/ /g, "_")}/${response.data}` })


        } catch (error) {
            console.log(error);
        }
    }

    const termChange = (index, term) => {
        let updatedList = [...flashcards];
        updatedList[index - 1].term = term;
        setFlashcards(updatedList);
    }
    const definitionChange = (index, definition) => {
        let updatedList = [...flashcards];
        updatedList[index - 1].definition = definition;
        setFlashcards(updatedList);

    }


    function deleteCard(id) {
        setFlashcards((prevFlashcards) => {

            if (prevFlashcards.length == 1) {
                return prevFlashcards;
            }
            const updatedFlashcards = prevFlashcards.filter(
                (flashcard) => flashcard.id !== id
            );

            const updatedFlashcardsWithIndex = updatedFlashcards.map((flashcard, index) => ({
                ...flashcard,
                index: index + 1,
            }));
            setCount(prevFlashcards.length - 1)

            return updatedFlashcardsWithIndex;
        });
    }


    function addFlashcard() {
        const newCount = count + 1;
        setFlashcards((prevFlashcards) => [
            ...prevFlashcards,
            { index: newCount, id: uuidv4(), term: "", definition: "" },
        ]);
        setCount(newCount);
    }

    return (

        <div className="w-screen h-auto bg-slate-100 ">
            <NavBar />
            <div className="w-screen  flex flex-col justify-start items-center">
                <h1 className="text-5xl font-bold text-slate-800 mt-20 m-5 2xl:text-6xl">Let's create a flashcard set</h1>
                <h3 className="text-base text-slate-600 2xl:text-lg">Flashcards allow you to create term-definition pairs to help with studying</h3>
            </div>
            <div className="w-screen flex flex-row justify-center 2xl:mt-10 ">
                <div className="flex flex-col w-1/3 m-10 space-y-5">
                    <div className={subjectName == undefined ? "block" : "hidden"}>
                        <h3 className="text-sm ml-1 text-slate-800 mb-1 font-medium 2xl:text-lg 2xl:ml-40">subject</h3>
                        <input onChange={(e) => { setSubject(e.target.value) }} className=" text-sm w-full shadow-md rounded-lg p-3 2xl:w-2/3 2xl:ml-40 2xl:p-4" type="text" placeholder="add a subject name" />
                    </div>
                    <div className="">
                        <h3 className="text-sm ml-1 text-slate-800 mb-1 font-medium 2xl:text-lg 2xl:ml-40">title</h3>
                        <input onChange={(e) => { setTitle(e.target.value) }} className="text-sm w-full shadow-md rounded-lg p-3 2xl:w-2/3 2xl:ml-40 2xl:p-4" type="text" placeholder="title your flashcard set" />

                    </div>
                </div>
                <div className="w-2/3 m-10 ">
                    <h3 className="text-sm ml-1 text-slate-800 mb-1 font-medium 2xl:text-lg 2xl:ml-40">description</h3>
                    <input onChange={(e) => { setDescription(e.target.value) }} className="text-sm w-full  shadow-md rounded-lg pl-2 pt-2 pb-28 2xl:w-2/3 2xl:ml-40 2xl:pb-36" type="text" placeholder="add a description..." />
                </div>

            </div>
            <div className="w-screen flex flex-col justify-center items-center mt-20 2xl:mt-32">
                {flashcards.map((flashcard) => (

                    <Flashcard
                        key={flashcard.id}
                        index={flashcard.index}
                        deleteItem={deleteCard}
                        id={flashcard.id}
                        term={flashcard.term}
                        definition={flashcard.definition}
                        onTermChange={(index, value) => termChange(index, value)}
                        onDefinitionChange={(index, value) => definitionChange(index, value)}

                    />
                ))}

                <button onClick={addFlashcard} className="border-b-2 border-blue-800 w-1/4 2xl:w-1/6 p-2  text-slate-800 mt-10 font-medium">
                    add another
                </button>
            </div>
            <div className=" flex justify-end mt-10 h-20 items-center">
                <button onClick={() => { saveFlashCardSet() }} className="mr-10 bg-blue-800 w-24  h-1/2 p-2 rounded-xl text-white 2xl:mr-20 2xl:h-2/3 2xl:text-lg">Create</button>
            </div>
        </div>
    )
}