
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FaBrain } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';
import { MdPendingActions } from 'react-icons/md';
import Plans from "../components/Plans";
import Reviews from "../components/Reviews";
import Description from "../components/Description";
export default function Root() {

    useEffect(() => {
        if (localStorage.getItem("token") != null) {
            window.location.href = "http://localhost:3000/home";
        }
    }, [])
    return (
        <div className="" >
            <NavBar />
            <div className="w-auto mb-40 ">
                <img className=" hidden lg:block z-0" src="../pictures/homepic2.jpg" />
                <div className="lg:w-1/3 xl:w-1/3 lg:h-1/2  lg:absolute lg:z-10 lg:top-1/4 lg:left-20 flex flex-col lg:items-start 2xl:w-1/3 2xl:items-center items-center">
                    <h1 className="text-5xl md:text-5xl font-bold lg:text-white text-center mt-10 ml-2 mr-2 lg:mt-0 lg:ml-0 lg:mr-0  2xl:text-7xl text-white drop-shadow-md">Discover the best way to study</h1>
                    <h3 className="lg:text-md font-bold lg:text-slate-300 lg:mt-8 mt-10 md:w-2/3 lg:w-5/6 text-center 2xl:text-lg  text-slate-400 w-5/6">Join one of the fastest growing digital study tools used by millions across the globe for self-study and self-quizzing.</h3>

                    <button onClick={() => { window.location.href = "/createAccount" }} className=" rounded-md bg-blue-700 p-3 mt-10 text-sm font-bold text-slate-100">Sign up now</button>
                </div>
            </div>

            <div className=" lg:m-40 md:flex md:justify-center ">
                <h1 className=" text-center md:text-3xl font-bold text-slate-700 text-xl md:w-2/3">Over 90% of our students report feeling more prepared for their exams.</h1>
            </div>

            <div className=" mt-32 w-auto h-auto grid grid-cols-1 md:grid-cols-3 justify-items-center gap-10">
                <Description header={"Create your flashcards"} description={"Create flashcard sets that have term/definition pairs for easy-to-learn studying with the ability to create, modify, or remove cards"} Icon={MdPendingActions} iconColor={"text-purple-500"} />
                <Description header={"Tailor your quizzes"} description={"Choose from a variety of quiz types for learning such as multiple choice, true/false,and fill-in-the-blank "} Icon={BsPencilSquare} iconColor={"text-red-500"} />
                <Description header={"Learn and improve"} description={"Receive feedback on quizzes to better retain information about your subjects"} Icon={FaBrain} iconColor={"text-emerald-500"} />
            </div>
            <div className="m-40 flex flex-col items-center">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-700  w-96 text-center">Our Plans</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center md:gap-52">

                    <Plans title={"base plan - free"} features={["- Have up to five subjects", "- Create up to six quizzes per subject"]} btnColor={"blue"} />
                    <Plans title={"student plan - $5.00/mo"} features={["- Have unlimited number of subjects", "- Create unlimited number of quizzes", "- access to pre-made quiz templates"]} btnColor={"yellow"} />

                </div>
            </div>


            <div className="w-auto h-auto mt-40 flex flex-col items-center">
                <div>
                    <h1 className=" text-2xl md:text-3xl font-bold text-slate-700 mb-20">what our students say</h1>
                </div>
                <div className="w-3/4 md:w-auto h-auto grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 justify-items-center gap-16  m-20">
                    <Reviews name={"Emily"} review={"It's very user-friendly and an effective tool for students to create engaging quizzes. The option to randomize questions ensures fairness and discourages cheating."} />
                    <Reviews name={"Caleb"} review={"It is very easy to use and you're able to quickly start learning."} />
                    <Reviews name={"Hunter"} review={"My grades have improved a lot since I started using this ."} />
                    <Reviews name={"Adam"} review={"I really enjoy the ability to customize my flashcards as well as quizzes."} />
                </div>
            </div>
            <Footer />


        </div>
    )

}