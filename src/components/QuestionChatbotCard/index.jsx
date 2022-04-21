import React, { useState } from "react";
import "./questionChatbotCard.css";

const QuestionChatbotCard = ({ questions }) => {
  return (
    <div className="questionchatbotcard--container">
      <div className="questionchatbotcard--content">
        <p className="questionchatbotcard--content__p questionchatbotcard--content__p1">
          Otázka
        </p>
        <p>{questions[0].title}</p>
        <p>{questions[0].question}</p>
      </div>
    </div>
  );
};

export default QuestionChatbotCard;
