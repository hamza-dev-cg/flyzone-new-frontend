import React, { useState, useEffect } from "react";
import WestEndMeatfishImage from "../../assets/images/West-End-Meatfish-Mania_large.png";
import Avatar from "react-avatar";
import { RiShip2Line } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { useSelector } from "react-redux";
import "../../assets/css/profile.css";
import { useGetOneUserMutation } from "../../features/user/api";
// import { Modal } from "react-bootstrap";
// import Gallery01 from "../../assets/images/new/gallery-01.png";
// import Gallery02 from "../../assets/images/new/gallery-02.png";
// import Gallery03 from "../../assets/images/new/gallery-03.png";
// import Gallery04 from "../../assets/images/new/gallery-04.png";
// import Gallery05 from "../../assets/images/new/gallery-05.png";
// import Gallery06 from "../../assets/images/new/gallery-06.png";
// import Gallery07 from "../../assets/images/new/gallery-07.png";
// import Gallery08 from "../../assets/images/new/gallery-08.png";
// import Image8 from "../../assets/images/new/image8.png";
// import Image9 from "../../assets/images/new/image9.png";
// import Image10 from "../../assets/images/new/10.png";
// import Image12 from "../../assets/images/new/12.png";
// import Image13 from "../../assets/images/new/13.png";
// import Image14 from "../../assets/images/new/14.png";
// import Image16 from "../../assets/images/new/16.png";
// import Image17 from "../../assets/images/new/17.png";
// import Image18 from "../../assets/images/new/18.png";
import { Link } from "react-router-dom";
export default function Profile() {
  const userId = useSelector((state) => state?.user?.user.id);
  const token = useSelector((state) => state?.user?.token);
  const [GetUserProfile, { isLoading: isFetching }] = useGetOneUserMutation();
  const [userProfile, setUserProfile] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [showModel, setShowModel] = useState(false);

  const openModal = (src) => {
    setModalImage(src);
    setShowModel(true);
  };
  const navLinks = {
    West: [
      {
        path: "/tournaments/west-end-meatfish-mania",
        title: "May 8-10, 2025",
        image: WestEndMeatfishImage,
        price: "$130",
        mainTitle: "West-end-meatfish-mania",
        width: "215",
        description:
          "West-end-meatfish-mania West-end-meatfish-mania West-end-meatfish-mania ",
      },
    ],
  };

  const getUserProfile = async () => {
    try {
      const response = await GetUserProfile({ token, id: userId });
      if (response) {
        setUserProfile(response.data.user);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div className="container layout-space">
      <div className="main-forum-detail-1">
        {/* Profile Section */}
        <div className="d-flex flex-column justify-content-center text-center">
          <div className="d-flex justify-content-center w-full">
            <div className="d-flex justify-content-center w-full flex-column align-items-center">
              <Avatar
                size="120"
                name={userProfile?.firstName}
                src={userProfile?.imageUrl}
                round={true}
              />
            </div>
          </div>
          <h5 className="mt-2">{userProfile?.firstName || "Guest User"}</h5>
          <p>{userProfile?.email}</p>
          <hr />
        </div>
        <div className="details">
          <div className="">
            <h5 className="text-left mb-3">Contact Info</h5>
            <div className="d-flex flex-column flex-md-row justify-content-center gap-2 gap-md-5 ps-5 ps-md-5">
              <div className="d-flex flex-grow-1 align-items-center">
                <span class="info-check">
                  <RiShip2Line />{" "}
                </span>
                <p className="mb-0">{userProfile?.email}</p>
              </div>
              <div className="d-flex flex-grow-1 flex-row align-items-center">
                <span class="info-check">
                  <MdPhone />{" "}
                </span>
                <p className="mb-0">{userProfile?.phoneNo}</p>
              </div>
              <div className="d-flex flex-grow-1 align-items-center">
                <span class="info-check">
                  <IoLocationOutline />{" "}
                </span>
                <p className="mb-0">{userProfile?.address}</p>
              </div>
            </div>
          </div>
          <hr />
        </div>

        {/* Events Section */}
        <div className="d-flex flex-column align-items-left justify-content-left">
          <h5 className="">Event</h5>
          {userProfile?.registeredEventsAsCaptain.length === 0 ? (
            <p className="text-center">You have registered for all events!</p>
          ) : (
            <div className="p-3 event-list">
              {userProfile?.registeredEventsAsCaptain?.map((event, index) => (
                <div key={index} className="event-card">
                  <img
                    // src={event.image}
                    width={100}
                    alt={event.eventName}
                  />
                  <p>{event.eventName}</p>
                  <button className="btn btn-registerr text-decoration-none text-white">
                    <Link
                      to={`/profile/detail/event`}
                      state={{ profileEvent: event }}
                      className="text-decoration-none text-white"
                    >
                      View Event
                    </Link>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <hr />
      </div>
    </div>
  );
}
