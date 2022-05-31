import React from "react";
import "./bubblequestion.css";

const BubbleQuestion = ({ question, qId, sum }) => {
  return (
    <div className="bubble pulse">
      <span className="bubble__question__number">{qId}</span> {sum}
      <p className="bubble__question">{question}</p>
      {/*<p className="bubble__answer bubble__answer1" onClick={yes}>
                ANO
              </p>
              <p className="bubble__answer bubble__answer2" onClick={no}>
                NE
    </p> */}
    </div>
  );
};

export default BubbleQuestion;
