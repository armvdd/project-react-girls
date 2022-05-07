import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import "./chatbot.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { render } from "@testing-library/react";

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

  const [id, setId] = useState(1);
  const [answered, setAnswered] = useState(0);
  const [counter, setCounter] = useState(0);
  const [results, setResults] = useState(false);

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
  const renderResults = () => {
    if (counter < 4) {
      return <p>Celkem na cajk</p>;
    } else if (counter > 4 && counter < 7) {
      return <p>Se to blíží k průseru</p>;
    } else if (counter >= 7) {
      return <p>Kámo, dělej s tím něco!</p>;
    }
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
            <div className="bubble pulse">
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
            ? data.questions
                .filter((question) => question.id === id)
                .map((question) => (
                  <>
                    <div className="bubble">
                      <p className="bubble__question">{question.title}</p>
                    </div>
                    <div className="bubble pulse" key={question.question}>
                      <p className="bubble__question">
                        otázka č. {question.id}/5
                      </p>
                      <p className="bubble__question">{question.question}</p>
                    </div>
                    <div className="bubble2">
                      {data &&
                        question.answers.map((answer) => (
                          <>
                            <p
                              className="bubble__answer bubble__answer--test"
                              onClick={() => {
                                if (question.id < 5) {
                                  setId(question.id + 1);
                                  setCounter(counter + answer.points);
                                } else if (question.id === 5) {
                                  setCounter(counter + answer.points);
                                  setResults(true);
                                }
                                setAnswered(answered + 1);
                                if (answered >= 5) {
                                  setCounter(counter + 0);
                                }
                                console.log(results);
                              }}
                            >
                              {answer.title}
                            </p>
                          </>
                        ))}
                    </div>
                    <div className="bubble">
                      <p className="bubble__question">points: {counter}</p>
                      <p className="bubble__question">answered: {answered}</p>
                    </div>
                    {results ? (
                      <div className="bubble pulse">
                        <p>{renderResults()}</p>
                      </div>
                    ) : null}
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
