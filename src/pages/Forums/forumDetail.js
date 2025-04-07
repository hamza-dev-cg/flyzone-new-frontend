import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import Pusher from "pusher-js";
import {
  getTokenFromLocalStorage,
  convertToFormData,
} from "../../utils/helpers";
import ReactPaginate from "react-paginate";
import {
  useGetByIdThreadsMutation,
  useCreateCommentMutation,
  useGetOneThreadCommentsMutation,
} from "../../features/forum/api";
import "../../assets/css/forumDetails.css";
import "../../assets/css/forumTable.css";
import Avatar from "react-avatar";

export default function ForumDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [thread, setThread] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [reply, setReply] = useState("");
  const [GetThreadById] = useGetByIdThreadsMutation();
  const [GetComments] = useGetOneThreadCommentsMutation();
  const [createComment] = useCreateCommentMutation();
  const [activeReplyIndex, setActiveReplyIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const commentsPerPage = 5;
  const [showInput, setShowInput] = useState(false);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * commentsPerPage;
  const paginatedComments = comments
    .slice()
    .reverse()
    .slice(startIndex, startIndex + commentsPerPage);
  const handleReplyClick = (index) => {
    setActiveReplyIndex(activeReplyIndex === index ? null : index);
  };

  const handleCommentSubmit = async () => {
    if (comment.trim()) {
      const newComment = { message: comment, thread_id: id };
      setComment("");
      setShowReplyInput(false);
      const formData = convertToFormData(newComment);
      try {
        const response = await createComment(formData);
        if (response?.data) {
          await handleGetAllComments();
        }
      } catch (error) {
        console.error("Error adding comment:", error);
      }

    }
  };

  const handleGetAllComments = async () => {
    try {
      const response = await GetComments(id);
      if (response?.data?.messages) {
        setComments(response?.data?.messages);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };
  useEffect(() => {
    handleGetAllComments();

    const pusher = new Pusher("e043156dd8c59ea21bfe", {
      cluster: "us2",
      encrypted: true,
    });

    const channel = pusher.subscribe(`thread-chat-${id}`);

    channel.bind("App\\Events\\MessageSent", (data) => {
      console.log("Received Pusher event:", data);

      const reply = parseInt(data?.reply_of);

      // Override created_at with the current local time
      const newData = {
        ...data,
        created_at: new Date().toISOString().slice(0, 19).replace("T", " "),
      };

      if (reply) {
        setComments((prevComments) =>
          prevComments.map((comment) =>
            comment.id === reply
              ? { ...comment, replies: [...(comment.replies || []), newData] }
              : comment
          )
        );
      } else {
        setComments((prevComments) => [newData, ...prevComments]);
      }
    });

    return () => {
      channel.unbind_all();
      pusher.unsubscribe(`thread-chat-${id}`);
    };
  }, [id]);

  const handleReplySubmit = async () => {
    if (reply.trim()) {
      const newReply = {
        message: reply,
        thread_id: id,
        message_id: activeReplyIndex,
      };
      setReply("");
      setShowReplyInput(false);
      const formData = convertToFormData(newReply);

      try {
        const response = await createComment(formData);
        if (response?.data) {
          await handleGetAllComments();
        }
      } catch (error) {
        console.error("Error adding reply:", error);
      }

    }
  };

  const GetThreadData = async () => {
    try {
      const response = await GetThreadById(id);
      setThread(response?.data?.data || []);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };
  useEffect(() => {
    GetThreadData();
  }, [id, GetThreadById]);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const tokenValidation = await getTokenFromLocalStorage();
      setIsUserLoggedIn(!!tokenValidation.token);
    };
    checkLoginStatus();
  }, []);


  return (
    <>
      <div className="container layout-space ">
        <div className="main-forum-detail ">
          <div className="forum-detail-head d-flex flex-column flex-lg-row justify-content-between">
            <div className="detail-head d-flex align-items-center">
              <p>{thread?.name}</p>
            </div>
            <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row  gap-lg-5  gap-md-5 gap-sm-5 gap-2">
              <div className="detail-head d-flex align-items-center">
                {/* <button className="btn btn-white text-capitalize">
                                    <MdEdit size={20}/>
                                    Add Comment
                                </button> */}
              </div>
            </div>
          </div>
          <div className="forum-post d-flex flex-column  justify-content-lg-between   flex-lg-row gap-lg-5">
            <div>
              <div className="post-section-0  d-flex flex-column flex-lg-row gap-2 mt-2">
                {/* <div className="post-section-img ">
                                    <img src={ForumImg} alt="forum" />
                                </div> */}
                <div className="post-sub-section-0 d-flex flex-column align-self-start">
                  <div className="d-flex gap-2">
                    <Avatar size="30" name={thread?.user?.name} src={thread?.user?.profile_image} round={true} />
                    <div>
                      <h3>{thread?.user?.name}</h3>
                      <p>
                        {thread?.created_at
                          ? new Date(thread.created_at).toLocaleString([], {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                          : "Loading..."}
                      </p>
                      <p>{thread?.description}</p>
                    </div>
                  </div>

                  {/* <div className="post-social-media d-flex flex-column flex-sm-row flex-md-row flex-lg-row gap-2">
                                        <button className="d-flex align-items-center justify-content-center">
                                            <img src={LikeBlackImage} />
                                            <p className="m-0 text-white">29</p>
                                        </button>
                                        <button className="d-flex align-items-center justify-content-center">
                                            <img src={MessageBlackImage} />
                                            <p className="m-0 text-white">29</p>
                                        </button>
                                        <button className="d-flex align-items-center justify-content-center">R
                                            <img src={ShareBlackImage} />
                                        </button>
                                    </div> */}
                </div>
              </div>
            </div>
            <div className="">
              <img src={thread?.image} width="250" alt="thread image" />
            </div>
          </div>
          <div>
            <div className="px-5">
              <button
                className="btn  mb-3 text-capitalize cus-btn"
                onClick={() => setShowInput(!showInput)}
              >
                <MdEdit size={20} />
                Add Comment
              </button>
            </div>

            {/* Input field and send button */}
            {showInput && (
              <div className="mt-lg-0 mt-2 px-3" data-label="Quote">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        if (comment.trim()) {
                          handleCommentSubmit();
                        }
                      }
                    }}
                    placeholder="Write a reply..."
                  />
                  <button
                    className="btn btn-black"
                    onClick={handleCommentSubmit}
                    disabled={!isUserLoggedIn || !comment.trim()}
                  >

                    <IoSend />
                  </button>
                </div>
              </div>

            )}
          </div>

          {/* When we reply then after this show */}
        </div>
        <div className="forum-post post-section-0 main-forum-detail">
          <h2>Comments</h2>
          <hr></hr>
          <div>
            {/* Display Comments */}
            {paginatedComments.length > 0 &&
              paginatedComments.map((cmt, index) => (
                <div key={index}>
                  <div className="forum-post d-flex gap-2">
                    <div className="post-sub-section-0 d-flex flex-column align-self-center">
                      <div className="d-flex gap-2">
                        <Avatar size="30" name={cmt?.user?.name} src={cmt?.user?.profile_image} round={true} />

                        <div>
                          <h1>{cmt?.user?.name}</h1>
                          <p className="m-0">{cmt?.message}</p>
                          <div className="d-flex justify-content-start gap-2">
                            <div
                              className={`d-flex align-items-center justify-content-center ${activeReplyIndex === cmt?.id
                                ? "active-reply"
                                : ""
                                }`}
                              onClick={() => handleReplyClick(cmt?.id)}
                            >
                              <p
                                className="mt-2 m-0"
                                style={{
                                  color:
                                    activeReplyIndex === cmt?.id
                                      ? "#0e8ff6"
                                      : "black",
                                  cursor: "pointer",
                                }}
                              >
                                Reply
                              </p>
                            </div>
                          </div>
                        </div>

                        <p className="m-0">
                          {new Date(cmt?.created_at).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>

                      {/* Show reply input only for the active comment */}
                      {activeReplyIndex === cmt?.id && (
                        <div className="mt-2 d-flex align-items-center justify-content-between reply-box mx-5">
                          {isUserLoggedIn ? (
                            <>
                              <input
                                type="text"
                                className="reply-input flex-grow-1 p-1"
                                value={reply}
                                onChange={(e) => setReply(e.target.value)}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    if (reply.trim()) {
                                      handleReplySubmit();
                                    }
                                  }
                                }}
                                placeholder="Write a reply..."
                              />
                              <button
                                className="btn btn-black ms-2 w-25 p-1"
                                onClick={handleReplySubmit}
                                disabled={!isUserLoggedIn || !reply.trim()}
                              >
                                <IoSend />
                              </button>
                            </>
                          ) : (
                            <div className="text-center w-100 p-2 bg-light text-danger">
                              <p>You need to log in to reply.</p>
                              <button
                                className="btn btn-primary w-100"
                                onClick={() => navigate("/login")}
                              >
                                Login Now
                              </button>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Display Replies */}
                      {cmt?.replies && cmt?.replies.length > 0 && (
                        <div className="mt-3">
                          {cmt.replies.map((reply, replyIndex) => (
                            <div
                              key={replyIndex}
                              className="d-flex gap-2 mt-2 reply-comment p-3 pt-0 pb-0"
                            >
                              <div className="post-sub-section-0 d-flex flex-column align-self-center">
                                <div className="d-flex gap-2">

                                  <Avatar size="30" name={reply?.user?.name} src={reply?.user?.profile_image} round={true} />

                                  <div>
                                    <h1>{reply.user?.name}</h1>
                                    <p>{reply.message}</p>
                                  </div>
                                  <p className="m-0">
                                    {new Date(
                                      cmt?.created_at
                                    ).toLocaleTimeString([], {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    })}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

            {/* Pagination */}
            {comments.length > commentsPerPage && (
              <ReactPaginate
                previousLabel={<FaAngleLeft />}
                nextLabel={<FaAngleRight />}
                breakLabel={"..."}
                pageCount={Math.ceil(comments.length / commentsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
              />
            )}
          </div>
        </div>
        {/* <UpcomingEvents /> */}
      </div>
    </>
  );
}
