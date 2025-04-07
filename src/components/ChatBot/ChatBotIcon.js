import React, { useState } from "react";
import ChatBox from "./ChatBox";
import "./ChatBot.css";
import ChatBot_Image from "../../assets/images/chatbot-icon.png";
import Close_Chat_Icon from "../../assets/images/chat-close-icon.png";

const ChatBotIcon = ({}) => {
  const [isChatBotVisible, setIsChatBotVisible] = useState(false);
  const toggleChatBot = () => setIsChatBotVisible((prev) => !prev);
  return (
    <>
      <button className="chatbot-toggler" onClick={toggleChatBot}>
        <img
          src={isChatBotVisible ? Close_Chat_Icon : ChatBot_Image}
          alt={isChatBotVisible ? "Close chat" : "Open chat"}
        />
      </button>
      {isChatBotVisible && (
        <ChatBox closeChatBox={() => setIsChatBotVisible(false)} />
      )}
    </>
  );
};

export default ChatBotIcon;
