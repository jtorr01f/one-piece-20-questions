'use client';
import React, { FC, useState } from "react";
import Link from "next/link";
import { IconExclamationCircle, IconEye } from "@tabler/icons-react";

import Tooltip from "../../components/ToolTip/tooltip.component";
import { RadioGroupComponent } from "../../components/RadioGroup/radioGroup.component";


import './onePieceTwentyQuestions.styles.css';
import { Character, QuestionOptions } from "@/types/views/onePiece";
import { answerOptions, opCharacters, tooltipText } from "@/constants/onePieceCharacters.constants";
import { Button } from "@/components/Button/button.component";

const OnePieceTwentyQuestions: FC = () => {
  const [characterInfo, setCharacterInfo] = useState<Character | null>(null);
  const [questionText, setQuestionText] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [questionsList, setQuestionsList] = useState<QuestionOptions[]>([]);
  const [linkHidden, setLinkHidden] = useState<boolean>(false);

  const onCharacterGenerated = () => {
    const randomIndex = Math.floor(Math.random() * opCharacters.length);
    setCharacterInfo(opCharacters[randomIndex]);
  }

  const resetInfo = () => setCharacterInfo(null);
  const resetQuestions = () => setQuestionsList([]);
  const updateQuestionText = (e: { target: { value: React.SetStateAction<string>; }; }) => setQuestionText(e.target.value);
  const updateQuestionList = () => {
    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto 
        ? crypto.randomUUID()
        : String(Date.now());

    const currentSet = { id: id, question: questionText, answer: selectedValue }
    const newArray = [...questionsList, currentSet];
    if (questionText.length > 0 && selectedValue.length > 0) {
      setQuestionText("");
      setSelectedValue("");
      setQuestionsList(newArray);
    }
  }

  return (
    <div className="op-wrapper">
      <div className="op-header">
        <p className="op-header-text" style={{ marginRight: '10px' }}>OP 20 Questions</p>
        <Tooltip text={tooltipText}>
          <IconExclamationCircle className="info-icon" />
        </Tooltip>
      </div>
      <p className="op-header-subtext">Currently there are {opCharacters.length} characters in the List</p>
      <button className="op-button" onClick={onCharacterGenerated} />
      <Button className="op-clear-character" buttonType="secondary" onClick={resetInfo} label="Clear Character" />
      <p className="op-link-header">
        Click the Jolly Roger to get your character!
      </p>
      <div className="op-character-link-wrapper">
        {characterInfo ? (
          <div className="link-container">
            <IconEye className="hide-icon" size={36} onClick={() => setLinkHidden(!linkHidden)} />
            <Link
              className={`op-link ${linkHidden ? 'link-hidden' : ''}`}
              href={characterInfo.additionalInformation || ''} 
              target="_blank" 
              rel="noopener noreferrer">
              {characterInfo.name}
            </Link>
          </div>
        ) : "Your Character is..."}
      </div>
      <div className="op-question-wrapper">
        <p>Notes</p>
        <div className="op-question-btn-group">
          <input className="op-question" placeholder="Question Asked" value={questionText} onChange={updateQuestionText} />
          <Button className="op-save-button" onClick={updateQuestionList} label="Save" />
        </div>
        <RadioGroupComponent options={answerOptions} selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
        <div className="op-question-counter">
          {questionsList.length} question{questionsList.length > 1 && "'s"} asked
        </div>
        <div className="op-list">
          <div className="op-list-header">
            <p className="op-list-header-question">Question</p>
            <p className="op-list-header-answer">Answer</p>
          </div>
          <div className="op-list-items">
            {questionsList.map((item) => (
              <div className="op-list-item-row" key={item.id}>
                <p className="op-list-item-question">{item.question}</p>
                <p className={`op-list-item-answer ${item.answer}`}>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button onClick={resetQuestions} buttonType="secondary" label="Clear Questions" />
    </div>
  );
}

export default OnePieceTwentyQuestions;