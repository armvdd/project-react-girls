import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import "./chatbot.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const getChatbot = async () => {
  const response = await fetch(`/api/chatbot`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const ChatbotPage = () => {
  //const { data, isLoading } = useQuery("chatbot", getChatbot);

  const [data, setData] = useState();

  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [userQuestions, setUserQuestions] = useState(false);
  const [otherQuestions, setOtherQuestions] = useState(false);

  useEffect(() => {
    fetch(`/api/chatbot`)
      .then((response) => response.json())
      .then((data) => setData(data.data.attributes.chatbot));
  }, []);

  //console.log(questions);
  //console.log(answers);
  //console.log(data);

  const startClick = () => {
    if (bubbleVisible) {
      setBubbleVisible(false);
    } else if (bubbleVisible === false) {
      setBubbleVisible(true);
    }
  };
  const yes = () => {
    setUserQuestions(true);
    setOtherQuestions(false);
  };
  const no = () => {
    setOtherQuestions(true);
    setUserQuestions(false);
  };
  return (
    <div className="chatbot-cotainer">
      {/* HTML ver questionBox
      <div className="questionsBox">
        <p className="questionsBox-p">start</p>
      </div>
      */}
      <div className="qBox">
        <Stack direction="row">
          <Button
            variant="contained"
            color="inherit"
            fullWidth={true}
            size="large"
            onClick={startClick}
          >
            start
          </Button>
        </Stack>
      </div>
      <div className="cards">
        <div>
          {bubbleVisible ? (
            <div className="bubble">
              <p className="bubble__question">Užíváte psychotropní látky?</p>
              <p className="bubble__answer bubble__answer1" onClick={yes}>
                ANO
              </p>
              <p className="bubble__answer bubble__answer2" onClick={no}>
                NE
              </p>
            </div>
          ) : null}
        </div>
        <div>
          {data && userQuestions
            ? data.questions.map((question) => (
                <>
                  <div className="bubble">
                    <p className="bubble__question">{question.question}</p>
                  </div>
                  <div className="bubble2">
                    {data &&
                      question.answers.map((answer) => (
                        <p className="bubble__answer">{answer.title}</p>
                      ))}
                  </div>
                </>
              ))
            : null}
        </div>

        <div>
          {otherQuestions ? (
            <div className="bubble2">
              <p className="bubble__question">Otázky pro ostatní</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
