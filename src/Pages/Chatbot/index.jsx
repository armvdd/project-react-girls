import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import "./chatbot.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { render } from "@testing-library/react";
import { getChatbot, getChatbot2 } from "../../queries/chatbot";
import { Link } from "react-router-dom";
import hand from "./hand.svg";
import chatbotIMG from "./chatbot.svg";

const ChatbotPage = () => {
  //data
  const queryChatbot1 = useQuery("chatbot1", getChatbot);
  const data = queryChatbot1.data;
  const queryChatbot2 = useQuery("chatbot2", getChatbot2);
  const data2 = queryChatbot2.data;

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
  const [otherResults, setOtherResults] = useState(false);
  const [resultId, setResultId] = useState();

  //console.log(data2);

  // funkce
  // start/reset
  const startClick = () => {
    if (bubbleVisible || userQuestions || otherQuestions) {
      setBubbleVisible(false);
      setUserQuestions(false);
      setId(1);
      setAnswered(0);
      setCounter(0);
      setResults(false);
      setOtherQuestions(false);
      setId2(1);
      setOtherResults(false);
      setResultId();
    } else if (bubbleVisible === false) {
      setBubbleVisible(true);
    }
  };

  // ANO-user
  const yes = () => {
    setUserQuestions(true);
    setOtherQuestions(false);
  };

  // NE-others
  const no = () => {
    setOtherQuestions(true);
    setUserQuestions(false);
  };

  // funkce render výsledků testu SDS
  const renderResults = () => {
    if (counter < 4) {
      return <p>Celkem na cajk</p>;
    } else if (counter > 4 && counter < 7) {
      return <p>Se to blíží k průseru</p>;
    } else if (counter >= 7) {
      return <p>Kámo, dělej s tím něco!</p>;
    }
  };

  // teď neužívaná funkce
  /*
  const renderOtherAnswers2 = () => {
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
                    onClick={(value) => {
                      setOtherAnswer(value.target.attributes.value.value);
                      setId2(question.id);
                      console.log(id2);
                    }}
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
    } else if (otherAnswer === "Ne." && id2 === 2) {
      return (
        <div className="bubble pulse">
          <p>prošlo to</p>
        </div>
      );
    }
  }; */

  // funkce render otázek sekce "pro ostatní"
  const renderOtherAnswers = () => {
    return data2.questions
      .filter((question) => question.id === id2)
      .map((question) => (
        <>
          <div className="bubble pulse" key={question.question}>
            <p className="bubble__question">{question.question}</p>
          </div>
          <div className="bubble2">
            {data2 &&
              question.answers.map((answer) => (
                <p
                  className="bubble2__answer"
                  value={answer}
                  onClick={(value) => {
                    if (
                      value.target.attributes.value.value ===
                        "Ano/Myslím, že ano." ||
                      value.target.attributes.value.value ===
                        "Nejsem si jistý/jistá."
                    ) {
                      setId2(2);
                    } else if (
                      value.target.attributes.value.value === "Ne." &&
                      id2 === 1
                    ) {
                      setId2(4);
                    } else if (
                      value.target.attributes.value.value === "Ano." &&
                      id2 === 2
                    ) {
                      setId2(3);
                    } else if (
                      value.target.attributes.value.value ===
                      "Odmítá, že má nějaký problém."
                    ) {
                      setResultId(2);
                      setOtherResults(true);
                    } else if (
                      value.target.attributes.value.value ===
                      "Připouští problém, ale tvrdí, že situaci zvládně řešit sám/sama."
                    ) {
                      setResultId(3);
                      setOtherResults(true);
                    } else if (
                      value.target.attributes.value.value ===
                      "Připouští problém a chce vyhledat pomoc."
                    ) {
                      setResultId(4);
                      setOtherResults(true);
                    } else if (
                      value.target.attributes.value.value === "Ne." &&
                      id2 === 2
                    ) {
                      setResultId(1);
                      setOtherResults(true);
                    } else if (
                      value.target.attributes.value.value === "Ano." &&
                      id2 === 4
                    ) {
                      setResultId(5);
                      setOtherResults(true);
                    } else if (
                      value.target.attributes.value.value === "Ne." &&
                      id2 === 4
                    ) {
                      setResultId(6);
                      setOtherResults(true);
                    }
                  }}
                >
                  {answer}
                </p>
              ))}
          </div>
        </>
      ));
  };

  // funkce pro uložení odpovědi do stavu
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

      {/* START button */}
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

      {/* bubbles */}
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
                        <span className="bubble__question__number">
                          {question.id}
                        </span>{" "}
                        /5
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
          {data2 && otherQuestions ? renderOtherAnswers() : null}

          {otherResults
            ? data2.results
                .filter((result) => result.id === resultId)
                .map((result) => (
                  <div
                    className="bubble bubble-results pulse"
                    key={result.result}
                  >
                    <p className="bubble__result">{result.result}</p>
                  </div>
                ))
            : null}

          {otherResults ? (
            <div className="bubble bubble-results pulse">
              <p className="bubble__result bubble__result--flex">
                <img src={hand} className="handImg" />
                <Link to="/kontakty">kontakty link</Link>
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
