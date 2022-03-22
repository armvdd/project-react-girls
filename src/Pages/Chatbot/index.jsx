import React from "react";
import "./chatbot.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ChatbotCard from "../../components/ChatbotCard";

const Chatbot = () => {
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
          >
            start
          </Button>
        </Stack>
      </div>
      <div className="cards">
        <ChatbotCard />
        <ChatbotCard />
      </div>
    </div>
  );
};

export default Chatbot;
