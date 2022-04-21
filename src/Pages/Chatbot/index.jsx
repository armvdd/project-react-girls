import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import "./chatbot.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ChatbotCard from "../../components/ChatbotCard";
import WelResCard from "../../components/WelResCard";
import QuestionChatbotCard from "../../components/QuestionChatbotCard";

const getChatbot = async () => {
  const response = await fetch(`/api/chatbot`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Chatbot = () => {
  //const { data, isLoading } = useQuery("chatbot", getChatbot);

  const [welResCardVisible, setWelResCardVisible] = useState(true);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const sort = (questions, answers) => {
    setQuestions(questions);
    setAnswers(answers);
  };

  useEffect(() => {
    fetch(`/api/chatbot`)
      .then((response) => response.json())
      .then((data) =>
        sort(
          data.data.attributes.chatbot.questions,
          data.data.attributes.chatbot.answers
        )
      );
  }, []);

  console.log(questions);
  console.log(answers);

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
            onClick={() => setWelResCardVisible(false)}
          >
            start
          </Button>
        </Stack>
      </div>
      <div className="cards">
        {welResCardVisible ? (
          <div className="welresSection">
            <WelResCard />
          </div>
        ) : (
          <>
            <div className="questionCard">
              <QuestionChatbotCard questions={questions} />
            </div>
            <div className="answerCards">
              <ChatbotCard />
              <ChatbotCard />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
