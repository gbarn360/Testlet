import React, { useState, useEffect } from "react";
import { json, useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";
import FlashcardStack from "../components/FlashcardStack";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import FlashcardTermDef from "../components/FlashcardTermDef";
import CreateCard from "../components/Flashcard"


export default function FlashcardSetPage() {
    const { subjectName, flashcardSet, id } = useParams();
    const [flashcards, setFlashcards] = useState([]);
    const [currentFlashcard, setCurrentFlashcard] = useState();
    const [count, setCount] = useState(0);
    const [copy, setCopy] = useState([]);
    const [clicked, setClicked] = useState();
    const [cardsToDelete, setCardsToDelete] = useState([]);
    const [displayDeleteButton, setDisplayDeleteButton] = useState("hidden");
    const [displayAddCard, setDisplayAddCard] = useState("hidden");
    const [newTerm, setNewTerm] = useState("");
    const [newDefinition, setNewDefinition] = useState();


    useEffect(() => {
        getFlashcards();
    }, []);
    const resetFlashcards = () => {
        getFlashcards();
        setCardsToDelete([]);
        setCount(0);
    };

    function getFlashcards() {
        axios.post("http://localhost:8000/getFlashcards.php", {
            item: {
                setId: id,
            },
        }).then(response => {
            setFlashcards(response.data);
            setCopy(JSON.parse(JSON.stringify(response.data)));
            setCurrentFlashcard(response.data[0]);
        });
    }
    function saveFlashcards() {


        axios.post("http://localhost:8000/updateFlashcards.php", {
            item: {
                flashcards: flashcards,
                setId: id,
                deleteCards: cardsToDelete
            },
        }).then(response => {
            // console.log(response.data);
        });
    }

    const deleteCard = (index) => {

        setCardsToDelete(prev => [...prev, flashcards[index]]);
        let updatedList = flashcards.filter((_, i) => i !== index);
        setFlashcards(updatedList);


        if (count + 1 > updatedList.length) {
            setCount(count - 1);
            setCurrentFlashcard(updatedList[count - 1]);

        }
        else {
            setCurrentFlashcard(updatedList[count]);

        }

    }

    const updateCardTerm = (index, term) => {
        flashcards[index].term = term;

    }
    const updateCardDef = (index, def) => {
        flashcards[index].def = def;

    }


    const shuffleCards = () => {
        let shuffledCards = [];
        let usedIndexes = [];
        let index = 0;

        while (index != flashcards.length) {
            let randIndex = Math.floor(Math.random() * ((flashcards.length - 1) - 0 + 1));
            if (!usedIndexes.includes(randIndex)) {
                shuffledCards.push(flashcards[randIndex]);
                usedIndexes.push(randIndex);
                index++;
            }
        }
        setFlashcards(shuffledCards);
        for (let i = 0; i < flashcards.length; i++) {
            if (flashcards[i] != currentFlashcard) {
                setCurrentFlashcard(flashcards[i])
                break;
            }
        }
    }

    return (
        <div className="w-screen h-auto bg-slate-100 flex flex-col" onClick={(e) => { setClicked(e.target.value) }}>
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
                <div className="bg-blue-800 mt-80 ml-96 p-2 px-4 rounded-lg ">
                    <button onClick={() => shuffleCards()} className="text-white ">shuffle</button>
                </div>
                <div className="w-screen bg-slate-100" >
                    <h1 className="text-xl font-medium ml-20 text-slate-800">Terms ( {flashcards.length} )</h1>
                    <div className="flex flex-col items-center">
                        {flashcards.map((item, index) => <FlashcardTermDef key={item.id} term={item.term} definition={item.def} displayDeleteButton={displayDeleteButton} onDelete={() => deleteCard(index)} onTermChange={(term) => updateCardTerm(index, term)} onDefChange={(def) => updateCardDef(index, def)} />)}
                    </div>
                </div>
            </div>
            <div className="flex flex-row mt-10">
                <div className="flex flex-row justify-start ml-40 space-x-10  w-3/4">
                    <button onClick={() => { saveFlashcards() }} className="bg-blue-800 text-white pt-1 pb-1 pl-3 pr-3 rounded-md text-lg">Save</button>
                    <button onClick={() => { resetFlashcards() }} className="bg-slate-300 text-blue-800 pt-1 pb-1 pl-3 pr-3 rounded-md text-lg">revert</button>
                </div>
                <div className="w-1/4 ">
                    <a href="#newCard"><button onClick={() => { setDisplayAddCard(true) }} className="border-2 border-blue-800 pt-1 pb-1 pl-3 pr-3 rounded-md text-lg">add card</button></a>
                </div>
            </div>
            <div className="mt-10 flex flex-col items-center mb-10" id="newCard">
                {displayAddCard == true ? <CreateCard onTermChange={(index, term) => { setNewTerm(term) }} onDefinitionChange={(index, def) => { setNewDefinition(def) }} deleteItem={() => setDisplayAddCard("hidden")} /> : ""}
                {displayAddCard == true ? <button onClick={() => { setFlashcards((prev) => [...prev, { term: newTerm, def: newDefinition }]); setDisplayAddCard(false) }} className="text-xl bg-blue-800 rounded-md text-white p-2 pl-6 pr-6 mt-4">add to collection</button> : ""}
            </div>


        </div>
    );
}
