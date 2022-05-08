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

  //data
  const [data, setData] = useState();
  const [data2, setData2] = useState();

  //stavy pro bubliny
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [userQuestions, setUserQuestions] = useState(false);
  const [otherQuestions, setOtherQuestions] = useState(false);

  //stavy - uživatel
  const [id, setId] = useState(1);
  const [answered, setAnswered] = useState(0);
  const [counter, setCounter] = useState(0);
  const [results, setResults] = useState(false);

  //stavy - ostatní
  const [id2, setId2] = useState(1);
  const [otherAnswer, setOtherAnswer] = useState();

  useEffect(() => {
    fetch(`/api/chatbot`)
      .then((response) => response.json())
      .then((data) => setData(data.data.attributes.chatbot));
  }, []);

  useEffect(() => {
    fetch(`/api/chatbot2`)
      .then((response) => response.json())
      .then((data) => setData2(data.data.attributes.chatbot2));
  }, []);

  //console.log(questions);
  //console.log(answers);
  //console.log(data2);

  // funkce
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

  const renderOtherAnswers = () => {
    if (
      otherAnswer === "Ano/Myslím, že ano." ||
      otherAnswer === "Nejsem si jistý/jistá."
    ) {
      return data2.questions
        .filter((question) => question.id === 2)
        .map((question) => (
          <>
            <div className="bubble pulse">
              <p className="bubble__question">{question.question}</p>
            </div>
            <div className="bubble2">
              {data2 &&
                question.answers.map((answer) => (
                  <p
                    className="bubble2__answer"
                    value={answer}
                    onClick={handleValue}
                  >
                    {answer}
                  </p>
                ))}
            </div>
          </>
        ));
    } else if (otherAnswer === "Ne.") {
      return data2.questions
        .filter((question) => question.id === 3)
        .map((question) => (
          <>
            <div className="bubble pulse">
              <p className="bubble__question">{question.question}</p>
            </div>
          </>
        ));
    } else if (otherAnswer === "Ne") {
      return (
        <div className="bubble pulse">
          <p>prošlo to</p>
        </div>
      );
    }
  };

  const handleValue = (value) => {
    setOtherAnswer(value.target.attributes.value.value);
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
        {/* První bublina */}

        <div className="firstBubble">
          {bubbleVisible ? (
            <div className="bubble pulse">
              <p className="bubble__question">Užíváte psychoaktivní léky?</p>
              <p className="bubble__answer bubble__answer1" onClick={yes}>
                ANO
              </p>
              <p className="bubble__answer bubble__answer2" onClick={no}>
                NE
              </p>
            </div>
          ) : null}
        </div>

        {/* SDS test */}

        <div className="user">
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

        {/* Otázky - ostatní */}

        <div className="others">
          {data2 && otherQuestions
            ? data2.questions
                .filter((question) => question.id === id)
                .map((question) => (
                  <>
                    <div className="bubble pulse">
                      <p className="bubble__question">{question.question}</p>
                    </div>
                    <div className="bubble2">
                      {data2 &&
                        question.answers.map((answer) => (
                          <p
                            className="bubble2__answer"
                            value={answer}
                            onClick={handleValue}
                          >
                            {answer}
                          </p>
                        ))}
                    </div>
                  </>
                ))
            : null}
          {data2 && otherQuestions ? <div>{renderOtherAnswers()}</div> : null}
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
