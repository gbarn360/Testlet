import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Root from "./screens/Root";
import SignIn from "./components/SignIn";
import CreateAccount from "./components/CreateAccount";
import PagenotFound from "./screens/PagenotFound";
import Home from "./screens/Home";
import SubjectPage from "./components/SubjectPage";
import "./App.css";

export default function App() {

  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/subject" element={<SubjectPage />} />
          <Route path="*" element={<PagenotFound />} />

        </Routes>

      </Router>
    </div >

  );
}


