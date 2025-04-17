import React from "react";
import ChatBoxWrpper from "./style.js";
import Emoji from "../../assets/icons/emoji.svg";
import Send from "../../assets/icons/send.svg";
import ChatMessages from "./ChatMessages.js";

const ChatBox = ({
  user,
  commentnew,
  message,
  setMessage,
  handleReplySubmit,
  isSending,
}) => {
  return (
    <ChatBoxWrpper>
      <div className=" chat-box-container">
        <div className="chat-box">
          <ul
            class=" nav nav-pills mb-3 d-flex justify-content-between chat-header-tabs"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Chat
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link tab"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Photos
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link tab"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Live
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <ChatMessages user={user} commentnew={commentnew} />
            </div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              ...
            </div>
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              ...
            </div>
          </div>

          <div className="message d-flex align-items-center mt-2 p-1">
            <textarea
              placeholder="Send a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleReplySubmit();
                }
              }}
              className=" 
              form-control  me-2"
              disabled={isSending}
              rows="3"
              style={{ height: "40px", resize: "none" }}
            ></textarea>

            <button>
              <img src={Emoji} alt="Emoji" className="message-icons"></img>
            </button>

            <button onClick={handleReplySubmit} disabled={!user || isSending}>
              {isSending ? (
                <span className="spinner-border spinner-border-sm"></span>
              ) : (
                <img src={Send} alt="Send" className="message-icons"></img>
              )}
            </button>
          </div>
        </div>
      </div>
    </ChatBoxWrpper>
  );
};

export default ChatBox;
