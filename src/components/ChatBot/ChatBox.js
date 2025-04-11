import React, { useState, useEffect, useRef } from "react";
import "./ChatBot.css";
import ChatBot_Image from "../../assets/images/chatbot-icon.png";
import Send_Text_Image from "../../assets/icons/send-icon.svg";
import Chat_Suggestion_1 from "../../assets/images/chat-suggetion-1.png";
import Chat_Suggestion_2 from "../../assets/images/chat-suggetion-2.png";
import Chat_Suggestion_3 from "../../assets/images/chat-suggetion-3.png";
import axios from "axios";

const ChatBox = ({ closeChatBox }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (message = "") => {
    const safeMessage = typeof message === "string" ? message.trim() : "";
    const safeInputText = typeof inputText === "string" ? inputText.trim() : "";
    if (safeMessage === "" && safeInputText === "") return;

    const outgoingMessage = safeMessage || safeInputText;
    setIsLoading(true);

    const userMessage = { type: "outgoing", text: outgoingMessage };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputText("");

    try {
      const formData = new FormData();
      formData.append("query", outgoingMessage);

      const response = await axios.post(
        "https://flyzone.ai/flyzone_laravel/api/chat_form",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        const botMessage = {
          type: "incoming",
          text: response.data
            .replace(/\s*\n\s*/g, " ")
            .replace(/>\s+</g, "><")
            .replace(/\*\*(.*?)\*\*/g, "<br><b>$1</b><br>"),
        };

        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } else {
        const errorMessage = {
          type: "incoming",
          error: true,
          text: "Sorry, something went wrong. Please try again later.",
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    } catch (error) {
      const errorMessage = {
        type: "incoming",
        error: true,
        text: "Sorry, something went wrong. Please try again later.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
    setIsLoading(false);
  };

  return (
    <div className="chatbot">
      <header>
        <div className="header-container">
          <div className="header_icon">
            <img src={ChatBot_Image} alt="Chatbot Icon" />
          </div>
          <div className="header-detail">
            <div className="heading">Ask Fly Anything</div>
            <div className="sub-heading">24/7 support bot</div>
          </div>
        </div>
      </header>
      <ul className="chatbox" ref={chatBoxRef}>
        {messages.length === 0 && 
        <div className="custom-messages">
          <div
            className="suggstion-chat"
            onClick={(e) => {
              if (isLoading) return;
              e.preventDefault();
              handleSendMessage("Details about upcoming tournaments");
            }}
          >
            <div>
              <img src={Chat_Suggestion_1} alt="no-suggestion" />
            </div>
            <div>
              <p>Details about upcoming tournaments</p>
            </div>
          </div>
          <div
            className="suggstion-chat"
            onClick={(e) => {
              if (isLoading) return;
              e.preventDefault();
              handleSendMessage("Starting a thread in forums");
            }}
          >
            <div>
              <img src={Chat_Suggestion_2} alt="no-suggestion" />
            </div>
            <div>
              <p>Starting a thread in forums</p>
            </div>
          </div>
          <div
            className="suggstion-chat"
            onClick={(e) => {
              if (isLoading) return;
              e.preventDefault();
              handleSendMessage("What FlyZone is offering?");
            }}
          >
            <div>
              <img src={Chat_Suggestion_3} alt="no-suggestion" />
            </div>
            <div>
              <p>What FlyZone is offering?</p>
            </div>
          </div>
        </div> }
        {messages.map((message, index) => (
          <li key={index} className={`chat ${message.type}`}>
            {message.type === "incoming" && (
              <span className="chat-box-icon">
                <img src={ChatBot_Image} alt="Chatbot Icon" />
              </span>
            )}
            {message.type === "incoming" && !message.error && (
              <div
                className="message"
                dangerouslySetInnerHTML={{ __html: message.text }}
              />
            )}
            {message.type === "incoming" && message.error && (
              <div
                className="message error"
                dangerouslySetInnerHTML={{ __html: message.text }}
              />
            )}
            {message.type === "outgoing" && (
              <div className="message">
                <p className="margin-zero">{message.text}</p>
              </div>
            )}
          </li>
        ))}
        {isLoading && (
          <span className="d-flex align-items-center gap-1">
          <span className="chat-box-icon">
            <img src={ChatBot_Image} alt="Chatbot Icon" />
          </span>
          <div className="loading">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          </span>
        )}
      </ul>

      <div className="chat-input">
        <textarea
          placeholder="Type a Message..."
          spellCheck="false"
          required
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              if (isLoading) return;
              e.preventDefault();
              if (!isLoading) handleSendMessage();
            }
          }}
        ></textarea>
        <span className={isLoading ? "disabled-btn" : ""} id="send-btn" onClick={handleSendMessage} disabled={isLoading}>
          <img src={Send_Text_Image} alt="Send Icon" />
        </span>
      </div>
    </div>
  );
};

export default ChatBox;
