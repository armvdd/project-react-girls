import React, { useState } from "react";
import "./questionChatbotCard.css";
const data = {
  title: "Test",
  questions: [
    {
      id: 1,
      title:
        "Následující otázky se vztahují k Vašemu užívání léků. U každé z pěti otázek prosím označte odpověď, která nejlépe vystihuje Vaši situaci při užívání.",
      question:
        "Myslíte si, že Vaše užívání již je (či bylo) mimo Vaši kontrolu?",
      answers: [
        {
          title: "Nikdy/téměř nikdy",
          points: 0,
        },
        {
          title: "Někdy",
          points: 1,
        },
        {
          title: "Často",
          points: 2,
        },
        {
          title: "Vždy/téměř vždy",
          points: 3,
        },
      ],
    },

    {
      id: 2,
      title:
        "Následující otázky se vztahují k Vašemu užívání léků. U každé z pěti otázek prosím označte odpověď, která nejlépe vystihuje Vaši situaci při užívání.",
      question:
        "Cítil/a jste úzkost nebo si dělal/a starosti, při představě, že Vám bude chybět vaše běžná dávka?",
      answers: [
        {
          title: "Nikdy/téměř nikdy",
          points: 0,
        },
        {
          title: "Někdy",
          points: 1,
        },
        {
          title: "Často",
          points: 2,
        },
        {
          title: "Vždy/téměř vždy",
          points: 3,
        },
      ],
    },
  ],
};

const Chatbot = ({ questions, answers }) => {
  const [state, setState] = useState({});
  console.log(state);

  const handleAnswerClick = (questionId, answerIdx) => () => {
    console.log(questionId, answerIdx);
    setState((state) => ({ ...state, ...{ [questionId]: answerIdx } }));
  };

  return (
    <div>
      Chatbot
      {data.questions
        .filter((q) => true)
        .map((q) => (
          <div key={q.id}>
            <bold>{q.question}</bold>

            {q.answers.map((a, idx) => (
              <div onClick={handleAnswerClick(q.id, idx)} key={a.id}>
                {idx} | {a.title}
              </div>
            ))}
            <hr></hr>
          </div>
        ))}
      {/* {questions.map((q) => {
        const answerSet = answers.find((a) => a.id === q.id);

        return (
          <div key={q.id}>
            {q.question}

            {answerSet.answers.map((a) => (
              <div>{a}</div>
            ))}
          </div>
        );
      })} */}
    </div>
  );
};

export default Chatbot;
