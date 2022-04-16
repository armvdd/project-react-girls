import React, { useState } from "react";
import "./chatbot.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ChatbotCard from "../../components/ChatbotCard";
import WelResCard from "../../components/WelResCard";

const Chatbot = () => {
  const [welResCardVisible, setWelResCardVisible] = useState(true);
  const [cardsVisible, setCardsVisible] = useState(false);
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
          <WelResCard />
        ) : (
          <>
            <ChatbotCard />
            <ChatbotCard />
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
