import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LikeImage from "../../assets/forum-svg/like-blue.svg";
import SeenImage from "../../assets/forum-svg/seen-blue.svg";
import MessageImage from "../../assets/forum-svg/message-blue.svg";
import ForumImg from "../../assets/images/forum-img.png";
import LikeBlackImage from "../../assets/forum-svg/like-black.svg";
import MessageBlackImage from "../../assets/forum-svg/message-black.svg";
import LikeGradImage from "../../assets/forum-svg/like-gradiant.svg";
import MessageGradImage from "../../assets/forum-svg/message-gradiant.svg";
import ShareBlackImage from "../../assets/forum-svg/share-black.svg";
import ForumImage from "../../assets/forum-svg/forum.png";
import CommentImage from "../../assets/forum-svg/comment-forum.png";
import "../../assets/css/forumDetails.css";
import "../../assets/css/forumTable.css";
import UpcomingEvents from "../../components/UpcomingEvents";
import { useGetByIdThreadsMutation } from "../../features/forum/api";
export default function ForumDetail() {
    const { id } = useParams();
    const [thread, setThread] = useState([]);
    const [GetThreadById, { isLoading }] = useGetByIdThreadsMutation();
    const GetThreadData = async () => {
        try {
            const response = await GetThreadById(id);
            console.log(response);
            setThread(response?.data?.data || []);
        } catch (error) {
            console.error("Fetch Error:", error);
        }
    };
    useEffect(() => {
        GetThreadData();
    }, [id, GetThreadById]);

    return (
        <>
            <div className="container layout-space">
                <div className="main-forum-detail">
                    <div className="forum-detail-head d-flex flex-column flex-lg-row justify-content-between">
                        <div className="detail-head d-flex align-items-center">
                            <p>What an amazing catch today in the South Pacific!</p>
                        </div>
                        <div className="d-flex flex-column flex-lg-row flex-md-row flex-sm-row  gap-lg-5  gap-md-5 gap-sm-5 gap-2">
                            {/* <div className="detail-head d-flex align-items-center">
                                <img src={LikeImage} alt="like" />
                                <p>910</p>
                            </div>
                            <div className="detail-head d-flex align-items-center">
                                <img src={MessageImage} alt="message" />
                                <p>63,758</p>
                            </div> */}
                            <div className="detail-head d-flex align-items-center">
                                <img src={SeenImage} alt="Seen" />
                                <p>{thread?.views}</p>
                            </div>
                        </div>
                    </div>
                    <div className="forum-post d-flex flex-column justify-content-between  flex-lg-row">
                        <div className="post-left">
                            <div className="post-section-0  d-flex flex-column flex-lg-row">
                                <div className="d-flex justify-content-center post-section-img">
                                    <img src={ForumImg} alt="forum" />
                                </div>
                                <div className="post-sub-section-0 d-flex flex-column align-self-center">
                                    <h1>{thread?.name}</h1>
                                    <p>{thread?.created_at}</p>
                                </div>
                            </div>
                            <div className="post-section-01">
                                <p id="post-section-para">
                                    {thread?.description}
                                </p>
                            </div>
                            <div className="post-social-media d-flex flex-column flex-sm-row flex-md-row flex-lg-row">
                                <button>
                                    <img src={LikeBlackImage} />
                                    Like
                                </button>
                                <button>
                                    <img src={MessageBlackImage} />
                                    Reply
                                </button>
                                <button>
                                    <img src={ShareBlackImage} />
                                    Share
                                </button>
                            </div>
                        </div>
                        <div className="post-right">
                            <img src={ForumImage} width='400' />
                        </div>
                    </div>
                    <div className="forum-post d-flex flex-column flex-lg-row first-post-detail">
                        <div className="post-left">
                            <div className="post-section-0  d-flex flex-column flex-lg-row">
                                <div className="d-flex justify-content-center post-section-img">
                                    <img src={ForumImg} alt="forum" />
                                </div>
                                <div className="post-sub-section-0 d-flex flex-column align-self-center">
                                    <h1>Jack Daniels</h1>
                                    <p>02-12-2025 03:07 PM</p>
                                </div>
                            </div>
                            <div className="post-section-01">
                                <p id="post-section-para">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                            <div className="post-social-media d-flex flex-column   flex-sm-row flex-md-row flex-lg-row">
                                <button>
                                    <img src={LikeBlackImage} />
                                    Like
                                </button>
                                <button>
                                    <img src={MessageBlackImage} />
                                    Reply
                                </button>
                            </div>
                        </div>
                        <div className="post-right">
                            <div className="d-flex post-first-social d-flex  flex-column flex-lg-row justify-content-lg-end justify-content-center end mb-2 align-items-center">
                                <div className="d-flex align-items-center justify-content-center post-first-social-btn">
                                    <img src={LikeGradImage} width={15} />
                                    <p>29 likes</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-center post-first-social-btn">
                                    <img src={MessageGradImage} width={15} />
                                    <p>14 replies</p>
                                </div>
                            </div>
                            <img src={CommentImage} className="commentImage" />
                        </div>
                    </div>
                    <div className="forum-post first-post-detail-1 mt-3">
                        <div className="post-right">
                            <div className="d-flex post-first-social d-flex  flex-column flex-lg-row justify-content-lg-end justify-content-center end mb-2 align-items-center">
                                <div className="d-flex align-items-center justify-content-center post-first-social-btn">
                                    <img src={LikeGradImage} width={15} />
                                    <p>29 likes</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-center post-first-social-btn">
                                    <img src={MessageGradImage} width={15} />
                                    <p>14 replies</p>
                                </div>
                            </div>
                        </div>
                        {/* When we reply then after this show */}
                        <div className="post-message card" data-label="Quote">
                            <div className="post-section-0  d-flex flex-column flex-lg-row">
                                <div className="post-message-img">
                                    <img src={ForumImg} alt="forum" />
                                </div>
                                <div className="post-sub-section-0 d-flex flex-column align-self-center">
                                    <h1>Jack Daniels</h1>
                                    <p>02-12-2025 03:07 PM</p>
                                    <p id="post-message-para">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="post-left">
                            <div className="post-section-0  d-flex flex-column flex-lg-row">
                                <div className="d-flex justify-content-center post-section-img">
                                    <img src={ForumImg} alt="forum" />
                                </div>
                                <div className="post-sub-section-0 d-flex flex-column align-self-center">
                                    <h1>Jack Daniels</h1>
                                    <p>02-12-2025 03:07 PM</p>
                                </div>
                            </div>
                            <div className="post-section-01">
                                <p id="post-section-para">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                            <div className="post-social-media d-flex flex-column  flex-sm-row flex-md-row flex-lg-row">
                                <button>
                                    <img src={LikeBlackImage} />
                                    Like
                                </button>
                                <button>
                                    <img src={MessageBlackImage} />
                                    Reply
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="forum-post first-post-detail-1 mt-3">
                        <div className="post-right">
                            <div className="d-flex post-first-social d-flex  flex-column flex-lg-row justify-content-lg-end justify-content-center end mb-2 align-items-center">
                                <div className="d-flex align-items-center justify-content-center post-first-social-btn">
                                    <img src={LikeGradImage} width={15} />
                                    <p>29 likes</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-center post-first-social-btn">
                                    <img src={MessageGradImage} width={15} />
                                    <p>14 replies</p>
                                </div>
                            </div>
                        </div>

                        <div className="post-left">
                            <div className="post-section-0  d-flex flex-column flex-lg-row">
                                <div className="d-flex justify-content-center post-section-img">
                                    <img src={ForumImg} alt="forum" />
                                </div>
                                <div className="post-sub-section-0 d-flex flex-column align-self-center">
                                    <h1>Jack Daniels</h1>
                                    <p>02-12-2025 03:07 PM</p>
                                </div>
                            </div>
                            <div className="post-section-01">
                                <p id="post-section-para">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                            <div className="post-social-media d-flex flex-column  flex-sm-row flex-md-row flex-lg-row">
                                <button>
                                    <img src={LikeBlackImage} />
                                    Like
                                </button>
                                <button>
                                    <img src={MessageBlackImage} />
                                    Reply
                                </button>
                            </div>
                        </div>
                        {/* When I Click on the reply then this display  */}
                        <div className="post-reply p-3 mt-4" data-label="Quote">
                            <input type="text" className="mt-2" />
                            <div className="post-social-media  m-0 mt-2 p-0 d-flex flex-column text-center justify-content-end  flex-sm-row flex-md-row flex-lg-row">
                                <button>Upload Media</button>
                                <button>Reply</button>
                            </div>
                        </div>
                    </div>
                </div>
                <UpcomingEvents />
            </div>
        </>
    );
}
