import React from "react";
import OurPodcastWrpper from "./style";
//images
import PodcastVideo from "../../assets/images/video-img.png";
import CommmentProfile from "../../assets/images/comment-profile.png";
import PodcastImg1 from "../../assets/images/podcast-1.png";
import PodcastImg2 from "../../assets/images/podcast-2.png";
import PodcastImg3 from "../../assets/images/podcast-3.png";

//icons
import UpArrow from "../../assets/icons/up-arrow.svg";
import BoldIcons from "../../assets/icons/bold-icon.svg";
import ItalicIcon from "../../assets/icons/italic-icon.svg";
import CutIcon from "../../assets/icons/cut-icon.svg";
import AttachFilesIcon from "../../assets/icons/attach-file.svg";
import LinkIcon from "../../assets/icons/link-icon.svg";
import SmileIcon from "../../assets/icons/smile-icon.svg";

const OurPodcast = () => {
  return (
    <OurPodcastWrpper>
      <div className="our-podcast-main  text-center d-flex flex-column justify-content-center align-items-center">
        <div className="container">
        <h1 className="leaderboard-h1   mb-4">
          Tune Into <span>Our Podcast</span>
        </h1>
        <p>
          Every great performance starts with the right foundation. At Flyzone,
          we provide the technology that powers excellence in sports and
          entertainment. With a clear understanding of the industry’s fast-paced
          nature, we design IT solutions that simplify operation..
        </p>
        </div>
   
        <div className="podcast-container container-lg d-flex flex-column flex-xl-row  ">
          <div className="podcast-video ">
            <img src={PodcastVideo} alt="Podcast Video"></img>
          </div>
          <div className="comment-main d-flex flex-column ">
            <div className="comment-header d-flex flex-row ">
              <div className=" comment-title-main">
                <div className="comment-title">Comments</div>
                <div className="comment-paragraph">24 Comments</div>
              </div>
              <div className="  comment-icon d-flex justify-content-center align-items-center">
                <img src={UpArrow} alt="Up Arrow "></img>
              </div>
            </div>
            <div className="all-comments">
              <div className="single-comment d-flex flex-column">
                <div className="d-flex flex-row justify-content-start align-items-center gap-3">
                  <img src={CommmentProfile} alt="Comment Profile"></img>
                  <div className="profile-name">Maude Hall</div>
                  <div className="comment-time">14 min</div>
                </div>
                <div className="comment-text">
                  That's a fantastic new app feature. You and your team did an
                  excellent job of incorporating user testing feedback.
                </div>
              </div>
              <div className="single-comment d-flex flex-column">
                <div className="d-flex flex-row justify-content-start align-items-center gap-3">
                  <img src={CommmentProfile} alt="Comment Profile"></img>
                  <div className="profile-name">Maude Hall</div>
                  <div className="comment-time">14 min</div>
                </div>
                <div className="comment-text">
                  That's a fantastic new app feature. You and your team did an
                  excellent job of incorporating user testing feedback.
                </div>
              </div>
              <div className="single-comment d-flex flex-column">
                <div className="d-flex flex-row justify-content-start align-items-center gap-3">
                  <img src={CommmentProfile} alt="Comment Profile"></img>
                  <div className="profile-name">Maude Hall</div>
                  <div className="comment-time">14 min</div>
                </div>
                <div className="comment-text">
                  That's a fantastic new app feature. You and your team did an
                  excellent job of incorporating user testing feedback.
                </div>
              </div>
              <div className="single-comment d-flex flex-column">
                <div className="d-flex flex-row justify-content-start align-items-center gap-3">
                  <img src={CommmentProfile} alt="Comment Profile"></img>
                  <div className="profile-name">Maude Hall</div>
                  <div className="comment-time">14 min</div>
                </div>
                <div className="comment-text">
                  That's a fantastic new app feature. You and your team did an
                  excellent job of incorporating user testing feedback.
                </div>
              </div>
            </div>

            <div className="comment-text-field d-flex flex-column justify-content-center">
              <textarea
                className="add-comment"
                placeholder="Type your comment here"
                rows={2}
              />
              <div className="comment-banner d-flex flex-row justify-content-between">
                <div className="d-flex flex-row align-items-center gap-2 gap-lg-4">
                  <img
                    src={BoldIcons}
                    alt="Bold"
                    className="comment-text-icon"
                  ></img>
                  <img
                    src={ItalicIcon}
                    alt="Italics"
                    className="comment-text-icon"
                  ></img>
                  <img
                    src={CutIcon}
                    alt="Cut"
                    className="comment-text-icon"
                  ></img>
                  <img
                    src={AttachFilesIcon}
                    alt="Attach"
                    className="comment-text-icon"
                  ></img>
                </div>
                <div className="d-flex flex-row align-items-center gap-2">
                  <img
                    src={LinkIcon}
                    alt="Link"
                    className="comment-text-icon"
                  ></img>
                  <img
                    src={SmileIcon}
                    alt="Smile"
                    className="comment-text-icon"
                  ></img>
                  <button className="">
                    <span className="mx-auto">Send </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" podcast-tiles  d-flex container-lg flex-column flex-md-row justify-content-around align-items-center">
          <div className="tile ">
            <img src={PodcastImg1} alt="Podcast 1"></img>
          </div>
          <div className="tile  ">
            <img src={PodcastImg2} alt="Podcast 2"></img>
          </div>
          <div className="tile ">
            <img src={PodcastImg3} alt="Podcast 3"></img>
          </div>
        </div>
      </div>
    </OurPodcastWrpper>
  );
};

export default OurPodcast;
