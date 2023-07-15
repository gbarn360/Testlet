
import React from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import FillInQuestion from "../components/FillInQuestion";
import TrueFalseQuestion from "../components/TrueFalseQuestion";
import MultChoiceQuestion from "../components/MultChoiceQuestion";
export default function Quiz() {

    const { subjectName } = useParams();
    const { flashcardSet } = useParams();
    const { flashcardSetId } = useParams();
    const { answerWith } = useParams();
    const { multChoice } = useParams();
    const { true_False } = useParams();
    const { matching } = useParams();


    return (
        <div>
            <NavBar />
            <div className="flex flex-col justify-center h-auto items-center bg-slate-100 space-y-10 p-10">
                <TrueFalseQuestion term="test" definition=" me soon. wow i can't b elieve thsta jsut happened with out me adfasdf asdfa ad ag adas a s sdf asdfa assd asdf fasd asdfdf" />
                <MultChoiceQuestion terms={["test1", "test2", "test3", "test4"]} definition="gadsa asas gaga af fasd asdfdf zsadf ads as fg " />
                <FillInQuestion definition="gadsa asas gaga af fasd asdfdf zsadf ads as fg asdf alas las dksl sdfasd slsl k ri woo asdf as a s la lsl    " />
            </div>
        </div>
    )


}