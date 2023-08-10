import React, { useState } from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';



export default function CreateAccount() {
    const [dateVal, setDate] = useState("dob"); //06/10/2001
    const [showCalendar, setShowCalendar] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [passwordFormatMessage, setPasswordFormatMessage] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [personalInfoMessage, setPersonalInfoMessage] = useState("");

    const sendCredentials = () => {

        try {
            axios.post("http://localhost:8000/createAccount.php", {
                item: {
                    email: email,
                    password: password,
                    firstname: firstname,
                    lastname: lastname,
                    dob: dateVal
                },
            })
                .then(response => {
                    if (response.data.status == "success") { localStorage.setItem("token", response.data.token.userId.id); window.location.href = "/home" }
                    else {
                        setPersonalInfoMessage("");
                        setEmailMessage("");
                        setPasswordFormatMessage("");

                        for (let i = 0; i < response.data.issues.length; i++) {
                            let error = response.data.issues[i];
                            if (error.personal) {
                                setPersonalInfoMessage(error.personal);
                            }
                            if (error.email) {
                                setEmailMessage(error.email);
                            }

                            if (error.password) {
                                setPasswordFormatMessage(error.password);
                            }
                        }
                    }
                })



        } catch (error) {
            console.log(error);
        }
    }

    const logUserIn = () => {

        sendCredentials();


    }


    const displayCalendar = () => {
        if (showCalendar === true) {
            return (
                <Calendar
                    className="absolute shadow-lg left-50%"
                    onChange={((value, event) => {
                        setShowCalendar(false);
                        getDate(value);
                    })}
                />
            );
        }
    };



    const getDate = (value) => {
        value = value.toString();
        console.log(value);
        let month = value[4] + value[5] + value[6];
        let day = value[8] + value[9];
        let year = value[11] + value[12] + value[13] + value[14];

        switch (month) {
            case "Jan":
                month = 1;
                break;
            case "Feb":
                month = 2;
                break;
            case "Mar":
                month = 3;
                break;
            case "Apr":
                month = 4;
                break;
            case "May":
                month = 5;
                break;
            case "Jun":
                month = 6;
                break;
            case "Jul":
                month = 7;
                break;
            case "Aug":
                month = 8;
                break;
            case "Sep":
                month = 9;
                break;
            case "Oct":
                month = 10;
                break;
            case "Nov":
                month = 11;
                break;
            case "Dec":
                month = 12;
                break;

        }
        setDate(month + "/" + day + "/" + year);
    }


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-auto h-screen" onClick={() => { if (showCalendar == true) setShowCalendar(false) }}>

            <div className="hidden md:block bg-yellow-500">

            </div>
            <div className="flex flex-col  items-center overflow-y-auto ">
                <div className=" h-screen w-5/6 ">
                    <div className="flex flex-row h-1/6 space-x-10 mt-4 m-10 justify-center md:justify-between">
                        <div className="flex flex-row space-x-10 mt-8">
                            <button className="text-2xl font-bold text-slate-800 border-b-4  h-10 border-yellow-400 pb-2">Sign up</button>
                            <button onClick={() => { window.location.href = "/signIn" }} className="text-2xl h-10 font-bold text-slate-400">Log in</button>
                        </div>
                        <button onClick={() => { window.location.href = "/" }} className="text-4xl font-bold text-slate-800 mt-2 "><AiOutlineClose /></button>
                    </div>
                    <div className="flex flex-row md:flex-col space-x-10  mb-10 justify-start ">
                        <div className="flex flex-col md:flex-row md: space-x-10 md:ml-11">
                            <input onChange={(e) => { setFirstname(e.target.value) }} value={firstname} type="text" name="firstname" placeholder="First name" className="ml-10 md:ml-0  w-24 placeholder-slate-300 border-b-2 border-blue-800 p-2 text-center outline-none" />
                            <input onChange={(e) => { setLastname(e.target.value) }} value={lastname} type="text" name="lastname" placeholder="Last name" className="w-24 placeholder-slate-300 border-b-2 border-blue-800 p-2 text-center outline-none" />
                            <button onClick={() => { setShowCalendar(true); }} className="w-24  border-b-2 border-blue-800 p-2 text-center outline-none text-slate-300">{dateVal}</button>
                        </div>
                        <h3 className="text-red-600 font-medium mt-9 md:mt-2">
                            {personalInfoMessage.split('\n').map((item) => (
                                <div>{item}</div>
                            ))}
                        </h3>

                        {displayCalendar()}
                    </div>
                    <div className="flex flex-col  ml-10 space-y-10">
                        <div>
                            <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="text" name="email" placeholder="Type your email address" className="w-5/6 border-b-2 p-2 border-slate-800 placeholder-slate-300 outline-none" />
                            <div>
                                <h3 className="text-slate-400 font-medium">Email</h3>
                                <h3 className="text-red-600 font-medium">{emailMessage}</h3>
                            </div>
                        </div>

                        <div className="space-y-5">
                            <div>
                                <input onChange={(e) => { setPassword(e.target.value); if (confirmPassword != password) setPasswordMessage(("passwords must match!")); }} type="password" name="password" value={password} placeholder="Create a password" className="w-5/6 border-b-2 p-2 border-slate-800 placeholder-slate-300 outline-none" />
                                <div>
                                    <h3 className="text-slate-400 font-medium">New Password</h3>
                                    <h3 className="text-red-600 font-medium">{passwordFormatMessage}</h3>
                                </div>
                            </div>
                            <div>
                                <input onChange={(e) => { setConfirmPassword(e.target.value); e.target.value != password ? setPasswordMessage("passwords must match!") : setPasswordMessage("") }} value={confirmPassword} type="password" name="password" placeholder="Retype your password" className="w-5/6 border-b-2 p-2 border-slate-800 placeholder-slate-300 outline-none" />
                                <div>
                                    <h3 className="text-slate-400 font-medium">Confirm Password</h3>
                                    <h3 className="text-red-600 font-medium">{passwordMessage}</h3>
                                </div>


                            </div>
                        </div>

                        <div className="flex flex-col w-5/6  ">
                            <button onClick={() => { if (confirmPassword == password) logUserIn() }} className="bg-blue-800 mt-10 h-16 text-xl font-medium text-white rounded-md">Sign up</button>
                            <div className="flex flex-row border-2 border-slate-300 mt-5 p-2 justify-center space-x-2 text-sm rounded-md">
                                <h3 className="font-medium text-slate-700">Already have an account?</h3>
                                <button onClick={() => { window.location.href = "/signIn" }} className="text-blue-800">Sign in</button>
                            </div>
                        </div>
                        <div className="h-10"></div>

                    </div>
                </div>
            </div>
        </div>
    )
}