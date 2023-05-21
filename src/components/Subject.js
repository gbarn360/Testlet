import React, { useState, useEffect } from "react";

export default function Subject({ name }) {
    const [isHovered, setIsHovered] = useState(false);


    return (
        <div onClick={() => { window.location.href = `/home/${name.replace(/ /g, "_")}` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-3/4 h-56 bg-slate-100 mb-10 rounded-lg shadow-lg flex justify-center items-center hover:bg-slate-800 transition-colors duration-200"
        >
            <h1 className={`text-3xl font-medium ${isHovered ? "text-slate-200" : "text-slate-700"
                } mb-5`}>{name}</h1>
        </div>
    );
}
