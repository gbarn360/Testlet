import axios from "axios";
import React, { useState } from "react";
import { AiFillDelete } from 'react-icons/ai';


export default function FlashcardSet({ subjectName, setId, title, description, deleteSet }) {

    const [isHovered, setIsHovered] = useState(false);



    return (
        <div onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => { window.location.href = `/home/${subjectName}/${title}/${setId}` }}
            className="w-auto bg-white shadow-md rounded-lg m-5 flex flex-row p-5 justify-between hover:bg-slate-800 transition-colors duration-200 xl:w-3/4 2xl:w-2/3 xl:ml-10">

            <div className="flex flex-col p-5">
                <h1 className={isHovered == true ? "text-white text-2xl font-medium mb-2" : "text-slate-800 text-2xl font-medium mb-2 xl:text-3xl"}>{title}</h1>
                <h3 className={isHovered == true ? "text-white" : "text-slate-800 xl:text-base"}>{description}</h3>
            </div>
            <div className="" onClick={(e) => { e.stopPropagation(); deleteSet(setId) }}>
                <AiFillDelete className={isHovered == true ? "text-red-500 text-2xl " : "hidden"} />
            </div>



        </div>
    )
}