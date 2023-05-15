
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FaBrain } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';
import { MdPendingActions } from 'react-icons/md';
export default function Root() {

    return (
        <div className="" >
            <NavBar />
            <div className="w-auto h-screen ">
                <img className=" hidden md:block z-0" src="../pictures/homepic2.jpg" />
                <div className="md:w-1/3 md:h-1/2  md:absolute md:z-10 md:top-1/4 md:left-20 flex flex-col md:items-start items-center">
                    <h1 className="text-5xl md:text-5xl font-bold md:text-slate-100 text-center mt-10 ml-2 mr-2 md:mt-0 md:ml-0 md:mr-0 text-slate-800">Discover the best way to study</h1>
                    <h3 className="md:text-md font-bold md:text-slate-300 md:mt-8 mt-10 md:w-5/6 text-center text-slate-400 w-5/6">Join one of the fastest growing digital study tools used by millions across the globe Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</h3>

                    <button className=" rounded-md bg-blue-700 p-3 mt-10 text-sm font-bold text-slate-100">Sign up now</button>
                </div>
            </div>

            <div className="md:m-40  ">
                <h1 className=" text-center md:text-3xl font-bold text-slate-700 text-xl">Over 90% of our students report feeling more prepared for their exams.</h1>
            </div>

            <div className=" mt-32 w-auto h-auto grid grid-cols-1 md:grid-cols-3 justify-items-center gap-10">
                <div className="  pt-5 flex flex-col items-center ">
                    <BsPencilSquare className="text-4xl mb-8 text-red-500" />
                    <h1 className="text-xl md:text-3xl font-bold text-slate-700">Create your own quizzes</h1>
                    <h3 className=" text-sm mt-4 w-2/3 leading-6">
                        Choose from a variety of quiz types for learning such as multiple choice, true/false,fill-in-the-blank, and flashcards </h3>
                </div>
                <div className="  pt-5 flex flex-col items-center">
                    <MdPendingActions className="text-4xl mb-8 text-purple-500" />
                    <h1 className="text-xl md:text-3xl font-bold text-slate-700">Test yourself</h1>
                    <h3 className=" text-sm mt-4 w-2/3 leading-6">
                        Morbi quis tellus magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque suscipit tellus ac dictum suscipit. Sed ac velit sed diam elementum mollis </h3>                </div>
                <div className="  pt-5 flex flex-col items-center">
                    <FaBrain className="text-4xl mb-8 text-emerald-500" />
                    <h1 className="text-xl md:text-3xl font-bold text-slate-700">Learn and improve</h1>
                    <h3 className=" text-sm mt-4 w-2/3 leading-6">
                        Nulla quis aliquet turpis. Fusce tristique egestas arcu ut tincidunt. Donec vel cursus nisi. Nam pellentesque dui et mauris varius, eget consequat est volutpat</h3>
                </div>
            </div>
            <div className="m-40 flex flex-col items-center">
                <h1 className="text-2xl md:text-3xl font-bold text-slate-700  w-96 text-center">Our Plans</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center md:gap-52">

                    <div className="flex flex-col border-2 rounded-lg w-80 mt-20 shadow-lg ">
                        <h1 className="text-center flex-1 border-b-2 p-2 text-lg font-medium ">base plan - free</h1>
                        <ul className="text-sm space-y-3 mb-12 m-4 ">
                            <li> - Have up to five subjects</li>
                            <li> - Create up to six quizzes per subject</li>
                        </ul>
                        <div className="flex justify-center">
                            <button className="bg-blue-600 text-white font-medium p-2 rounded-lg mt-5 w-1/2 m-6 shadow-md">Sign up</button>
                        </div>
                    </div>
                    <div className="flex flex-col border-2 rounded-lg w-80 mt-20 shadow-lg ">
                        <h1 className="text-center flex-1 border-b-2 p-2 text-lg font-medium ">student plan - $5.00/mo</h1>
                        <ul className="text-sm space-y-3 m-4">
                            <li> - Have unlimited number of subjects</li>
                            <li> - Create unlimited number of quizzes</li>
                            <li> - access to pre-made quiz templates</li>
                        </ul>
                        <div className="flex justify-center">
                            <button className="bg-yellow-500 text-white font-medium p-2 rounded-lg mt-5 w-1/2 m-2 shadow-md">Enroll</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-auto h-auto mt-40 flex flex-col items-center">
                <div>
                    <h1 className=" text-2xl md:text-3xl font-bold text-slate-700 mb-20">what our students say</h1>
                </div>
                <div className="w-3/4 md:w-auto h-auto grid grid-cols-1 md:grid-cols-4 justify-items-center gap-8">
                    <div className=" border-2 rounded-md p-5 flex flex-col items-center shadow-lg">
                        <h1 className="text-bold text-xl md:text-3xl w-5/6 border-b-2 text-center pb-2">Emily</h1>
                        <p className="mt-5 font-medium text-sm md:text-base">"This quizzing software is a user-friendly and effective tool for students to create engaging quizzes. The option to randomize questions ensures fairness and discourages cheating."</p>
                    </div>
                    <div className="border-2 rounded-md p-5 flex flex-col items-center shadow-lg">
                        <h1 className="text-bold text-xl md:text-3xl w-5/6 border-b-2 text-center pb-2">Caleb</h1>
                        <p className="mt-5 font-medium text-sm md:text-base">"This quizzing software is a user-friendly and effective tool for students to create engaging quizzes. The option to randomize questions ensures fairness and discourages cheating."</p>
                    </div>
                    <div className="border-2 rounded-md p-5 flex flex-col items-center shadow-lg">
                        <h1 className="text-bold text-xl md:text-3xl w-5/6 border-b-2 text-center pb-2">Hunter</h1>
                        <p className="mt-5 font-medium text-sm md:text-base">"This quizzing software is a user-friendly and effective tool for students to create engaging quizzes. The option to randomize questions ensures fairness and discourages cheating."</p>
                    </div>
                    <div className=" border-2 rounded-md p-5 flex flex-col items-center shadow-lg">
                        <h1 className="text-bold text-xl md:text-3xl w-5/6 border-b-2 text-center pb-2">Daniel</h1>
                        <p className="mt-5 font-medium text-sm md:text-base">"This quizzing software is a user-friendly and effective tool for students to create engaging quizzes. The option to randomize questions ensures fairness and discourages cheating."</p>
                    </div>

                </div>
            </div>
            <Footer />


        </div>
    )

}