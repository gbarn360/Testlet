import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import axios from "axios";
import FillInQuestion from "../components/FillInQuestion";
import TrueFalseQuestion from "../components/TrueFalseQuestion";
import MultChoiceQuestion from "../components/MultChoiceQuestion";
import { FcCancel, FcCheckmark } from "react-icons/fc";


export default function Quiz() {
    const { subjectName, flashcardSet, flashcardSetId, answerWith, multChoice, true_False, matching } = useParams();
    const [flashcards, setFlashcards] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [results, setResults] = useState([]);
    const [displayResults, setDisplayResults] = useState("hidden");

    useEffect(() => {
        axios.post("http://localhost:8000/getFlashcards.php", {
            item: {
                setId: flashcardSetId,
            },
        })
            .then((response) => {
                setFlashcards(response.data);
            })
            .catch((error) => {
                console.error("Error fetching flashcards:", error);
            });
    }, [flashcardSetId]);

    const storeAnswer = (answer) => {
        setResults(prev => [...prev, answer]);
        results[answer.questionNumber] = answer;

        setResults(results);
    }
    const retakeQuiz = () => {
        window.location.reload();
    }

    const scrollToResults = () => {
        const resultsElement = document.getElementById("results");
        if (resultsElement) {
            const y = resultsElement.getBoundingClientRect().top + window.pageYOffset - 90;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    const calculateScore = () => {
        let correct = 0;
        results.map(question => {
            if (question.answer == "correct") {
                correct++;
            }
        })

        let score = Math.round((correct / results.length) * 100);
        return score;

    }
    const getFeedback = () => {
        return results.map((question, index) => (
            <div className="flex flex-row ml-10 mt-1 overflow-auto">
                <h2 className="mr-2 text-slate-800">Question {index + 1}</h2>
                {question.answer == "correct" ? <h2 className="text-xl mt-1">{<FcCheckmark />}</h2> : <h2 className="text-xl mt-1">{<FcCancel />}</h2>}
            </div>


        ))
    }

    const getCorrectCount = () => {
        let correct = 0;
        let incorrect = 0;
        results.map(question => {
            if (question.answer == "correct") {
                correct++;
            }
            else {
                incorrect++;
            }
        })

        return (
            <div className="m-5 space-y-1">
                <div className="flex flex-row ">
                    <h1 className="text-emerald-600 text-3xl font-bold">Correct</h1>
                    <h1 className="text-slate-800 text-3xl font-bold ml-20">{correct}</h1>
                </div>
                <div className="flex flex-row ">
                    <h1 className="text-red-600 text-3xl font-bold">Incorrect </h1>
                    <h1 className="text-slate-800 text-3xl font-bold ml-14">{incorrect}</h1>
                </div>
            </div>
        )
    }


    useEffect(() => {
        scrollToResults();
    }, [displayResults])

    useEffect(() => {
        const createQuestions = () => {
            const generatedQuestions = [];
            let rand1;
            let rand2;
            let rand3;
            let used1 = false;
            let used2 = false;
            let used3 = false;

            if (flashcards.length > 0 && flashcards[0].term !== undefined) {


                for (let i = 0; i < flashcards.length; i++) {
                    if (multChoice === "on" && used1 == false) {
                        if (flashcards.length >= 4) {
                            do {
                                rand1 = Math.floor(Math.random() * flashcards.length);
                            } while (rand1 == i)
                            do {
                                rand2 = Math.floor(Math.random() * flashcards.length);
                            } while (rand2 == rand1 || rand2 == i)
                            do {
                                rand3 = Math.floor(Math.random() * flashcards.length);
                            } while (rand3 == rand1 || rand3 == rand2 || rand3 == i)

                            let terms = [flashcards[i], flashcards[rand1], flashcards[rand2], flashcards[rand3]];

                            const randomizedTerms = [];
                            const usedIndexes = [];
                            let index = 0;
                            while (index != terms.length) {
                                let randomIndex = Math.floor(Math.random() * terms.length);
                                if (!usedIndexes.includes(randomIndex)) {
                                    usedIndexes.push(randomIndex);
                                    randomizedTerms.push(terms[randomIndex])
                                    index++;
                                }
                            }
                            const question = (
                                <MultChoiceQuestion
                                    terms={[
                                        randomizedTerms[0].term,
                                        randomizedTerms[1].term,
                                        randomizedTerms[2].term,
                                        randomizedTerms[3].term

                                    ]}
                                    definition={flashcards[i].def}
                                    answerResult={answer => storeAnswer(answer)}
                                    answer={flashcards[i].term}
                                    questionNumber={i}
                                />
                            );
                            generatedQuestions.push(question);
                        }

                        if (flashcards.length == 3) {
                            do {
                                rand1 = Math.floor(Math.random() * flashcards.length);
                            } while (rand1 == i)
                            do {
                                rand2 = Math.floor(Math.random() * flashcards.length);
                            } while (rand2 == rand1 || rand2 == i)

                            let terms = [flashcards[i], flashcards[rand1], flashcards[rand2]]
                            const randomizedTerms = [];
                            const usedIndexes = [];
                            let index = 0;
                            while (index != terms.length) {
                                let randomIndex = Math.floor(Math.random() * terms.length);
                                if (!usedIndexes.includes(randomIndex)) {
                                    usedIndexes.push(randomIndex);
                                    randomizedTerms.push(terms[randomIndex])
                                    index++;
                                }
                            }

                            const question = (
                                <MultChoiceQuestion
                                    terms={[
                                        randomizedTerms[0].term,
                                        randomizedTerms[1].term,
                                        randomizedTerms[2].term,

                                    ]}
                                    definition={flashcards[i].def}
                                    answerResult={answer => storeAnswer(answer)}
                                    answer={flashcards[i].term}
                                    questionNumber={i}
                                />
                            );
                            generatedQuestions.push(question);
                        }

                        if (flashcards.length == 2) {
                            do {
                                rand1 = Math.floor(Math.random() * flashcards.length);
                            } while (rand1 == i)

                            let terms = [flashcards[i], flashcards[rand1]]
                            const randomizedTerms = [];
                            const usedIndexes = [];
                            let index = 0;
                            while (index != terms.length) {
                                let randomIndex = Math.floor(Math.random() * terms.length);
                                if (!usedIndexes.includes(randomIndex)) {
                                    usedIndexes.push(randomIndex);
                                    randomizedTerms.push(terms[randomIndex])
                                    index++;
                                }
                            }

                            const question = (
                                <MultChoiceQuestion
                                    terms={[
                                        randomizedTerms[0].term,
                                        randomizedTerms[1].term,
                                    ]}
                                    definition={flashcards[i].def}
                                    answerResult={answer => storeAnswer(answer)}
                                    answer={flashcards[i].term}
                                    questionNumber={i}
                                />
                            );
                            generatedQuestions.push(question);
                        }

                        if (matching === "on" || true_False === "on")
                            used1 = true;
                        continue;
                    }
                    if (matching === "on" && used2 == false) {
                        const question = (
                            <FillInQuestion
                                term={flashcards[i].term}
                                definition={flashcards[i].def}
                                answerResult={answer => storeAnswer(answer)}
                                answer={flashcards[i].term}
                                questionNumber={i}
                            />
                        );
                        generatedQuestions.push(question);
                        if (true_False === "on")
                            used2 = true;
                        continue;

                    }
                    if (true_False === "on" && used3 == false) {

                        rand1 = Math.floor(Math.random() * flashcards.length);
                        rand2 = Math.floor(Math.random() * flashcards.length);
                        rand3 = Math.floor(Math.random() * flashcards.length);

                        let randTermIndex = Math.floor(Math.random() * 3);
                        let randDefinitionIndex = Math.floor(Math.random() * 3);

                        console.log(randTermIndex, randDefinitionIndex)
                        let randTerm;
                        let randDef;
                        switch (randTermIndex) {
                            case 0:
                                randTerm = flashcards[rand1];
                                break;
                            case 1:
                                randTerm = flashcards[rand2];
                                break;
                            case 2:
                                randTerm = flashcards[rand3];
                                break;
                        }
                        switch (randDefinitionIndex) {
                            case 0:
                                randDef = flashcards[rand1];
                                break;
                            case 1:
                                randDef = flashcards[rand2];
                                break;
                            case 2:
                                randDef = flashcards[rand3];
                                break;
                        }
                        let answer = "false";
                        if (randTerm === randDef) {
                            answer = "true";
                        }


                        const question = (
                            <TrueFalseQuestion
                                term={randTerm.term}
                                definition={randDef.def}
                                answerResult={answer => storeAnswer(answer)}
                                answer={answer}
                                questionNumber={i}
                            />
                        );
                        generatedQuestions.push(question);
                        if (multChoice === "on")
                            used3 = true;

                    }
                    used1 = false;
                    used2 = false;
                    used3 = false;
                }
            }

            return generatedQuestions;
        };

        const generatedQuestions = createQuestions();
        const randomizedQuestions = [];
        const usedIndexes = [];
        let index = 0;
        while (index != generatedQuestions.length) {
            let randomIndex = Math.floor(Math.random() * generatedQuestions.length);
            if (!usedIndexes.includes(randomIndex)) {
                usedIndexes.push(randomIndex);
                const updatedQuestion = {
                    ...generatedQuestions[randomIndex],
                    questionNumber: randomIndex,
                };
                randomizedQuestions.push(updatedQuestion)
                index++;
            }
        }

        setQuestions(randomizedQuestions);
    }, [flashcards, multChoice, matching, true_False]);

    return (
        <div>
            <NavBar />
            <div className="flex flex-col justify-center h-auto items-center bg-slate-100 space-y-10 p-10">
                {questions}
                <button className="m-10 rounded-lg bg-blue-800 pt-2 pb-2 p-10 text-white" onClick={() => { setDisplayResults("block") }}>Submit</button>
            </div>
            <div id="results" className={`h-screen bg-slate-100 ${displayResults} flex flex-col items-center `}>
                <div className="bg-white rounded-lg shadow-lg w-2/3 h-4/5 flex flex-row justify-center">
                    <div className="w-1/2 h-full ml-10 ">
                        <div className="mt-10">
                            {getCorrectCount()}
                        </div>
                        <div className="mt-5 ">
                            {getFeedback()}
                        </div>
                        <div>
                            <button onClick={() => retakeQuiz()} className="m-10 rounded-lg bg-blue-800 pt-2 pb-2 p-10 text-white">Retake Quiz</button>
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex justify-center items-center ">
                        {/* <h1 className="text-5xl">td</h1> */}
                        <div className="bg-blue-500 w-60 h-60 rounded-full flex justify-center items-center">
                            <div className="bg-white w-48 h-48 rounded-full flex justify-center items-center">
                                <h1 className="text-5xl font-semibold text-slate-800">{calculateScore()}%</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
