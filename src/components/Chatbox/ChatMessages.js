import React from "react";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";
import EmptyChat from "../../assets/images/ChatEmpty.svg";

const ChatMessages = ({ user, commentnew }) => {
  const navigate = useNavigate();

  return (
    <div className="chat-body">
      {user ? (
        <>
          {commentnew?.length > 0 ? (
            commentnew.map((chat, index) => {
              const isCurrentUser = chat?.user?.id === user?.id;
              return (
                <div
                  key={index}
                  className={`d-flex flex-column ${
                    isCurrentUser ? "align-items-end" : "align-items-start"
                  }`}
                >
                  <div
                    className={`d-flex gap-2 align-items-center ${
                      isCurrentUser
                        ? "justify-content-end"
                        : "justify-content-start"
                    }`}
                  >
                    {!isCurrentUser && (
                      <>
                        <Avatar
                          size="30"
                          name={chat?.user?.name}
                          src={chat?.user?.profile_image}
                          round={true}
                        />
                        <h4 className="m-0 chat-message">{chat?.user?.name}</h4>
                      </>
                    )}

                    <span className="time">
                      {new Date(chat?.created_at).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>

                    {isCurrentUser && (
                      <>
                        <h4 className="m-0 chat-message">{chat?.user?.name}</h4>
                        <Avatar
                          size="30"
                          name={chat?.user?.name}
                          src={chat?.user?.profile_image}
                          round={true}
                        />
                      </>
                    )}
                  </div>
                  <p
                    className={`chat-message p-2 rounded w-auto mt-2 bg-light text-dark ${
                      isCurrentUser ? "text-end" : "text-start"
                    }`}
                  >
                    {chat?.message}
                  </p>
                </div>
              );
            })
          ) : (
            <div className="empty-chat-box d-flex flex-column align-items-center justify-content-end">
              <img
                src={EmptyChat}
                alt="Empty Chat"
                className="mb-3 chat-empty"
              />
              <p className="chat-title">Start A Conversation</p>
              <p className="text-center chat-text text-black">
                There are no messages here yet. Start a conversation by sending
                a message.
              </p>
            </div>
          )}
        </>
      ) : (
        <div className=" text-center mt-4 ">
          <p className="text-black">You need to log in to view messages.</p>
          <button
            className="btn btn-primary login-button"
            onClick={() => navigate("/login")}
          >
            Login Now
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatMessages;
