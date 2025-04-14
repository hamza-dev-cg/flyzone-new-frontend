import React, { useState } from "react";
import WestEndMeatfishImage from "../../assets/images/West-End-Meatfish-Mania_large.png";
import Avatar from 'react-avatar';
import { RiShip2Line } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { useSelector } from "react-redux";
import "../../assets/css/profile.css";
import { Modal } from "react-bootstrap";
import Gallery01 from "../../assets/images/new/gallery-01.png";
import Gallery02 from "../../assets/images/new/gallery-02.png";
import Gallery03 from "../../assets/images/new/gallery-03.png";
import Gallery04 from "../../assets/images/new/gallery-04.png";
import Gallery05 from "../../assets/images/new/gallery-05.png";
import Gallery06 from "../../assets/images/new/gallery-06.png";
import Gallery07 from "../../assets/images/new/gallery-07.png";
import Gallery08 from "../../assets/images/new/gallery-08.png";
import Image8 from "../../assets/images/new/image8.png";
import Image9 from "../../assets/images/new/image9.png";
import Image10 from "../../assets/images/new/10.png";
import Image12 from "../../assets/images/new/12.png";
import Image13 from "../../assets/images/new/13.png";
import Image14 from "../../assets/images/new/14.png";
import Image16 from "../../assets/images/new/16.png";
import Image17 from "../../assets/images/new/17.png";
import Image18 from "../../assets/images/new/18.png";
export default function Profile() {
  const userData = useSelector((state) => state?.user?.user);
  const [modalImage, setModalImage] = useState(null);
  const [showModel, setShowModel] = useState(false);

  const openModal = (src) => {
    setModalImage(src);
    setShowModel(true);
  };
  const navLinks = {
    West: [
      // {
      //   path: "/tournaments/west-end-meatfish-madness",
      //   title: "April 24-26, 2025",
      //   image: WestEndMadnessImage,
      //   price: "$110",
      //   mainTitle: "West-end-meatfish-madness",
      //   width: "245",
      // },
      {
        path: "/tournaments/west-end-meatfish-mania",
        title: "May 8-10, 2025",
        image: WestEndMeatfishImage,
        price: "$130",
        mainTitle: "West-end-meatfish-mania",
        width: "215",
      },
    ],
  };

  return (
    <div className="container layout-space">
      <div className="main-forum-detail-1">
        {/* Profile Section */}
        <div className="d-flex flex-column justify-content-center text-center">
          <div className="d-flex justify-content-center w-full">
            <div className="d-flex justify-content-center w-full flex-column align-items-center">
            <Avatar size="120" name={userData?.firstName} src={userData?.imageUrl} round={true} />
            </div>
          </div>
          <h5 className="mt-2">{userData?.firstName || "Guest User"}</h5>
          <p>{userData?.email}</p>
          <hr />
        </div>
        <div className="details">
          <div className="">
            <h5 className="text-left mb-3">Contact Info</h5>
            <div className="d-flex flex-column flex-md-row justify-content-center gap-2 gap-md-5 ps-5 ps-md-5">
              <div className="d-flex flex-grow-1 align-items-center">
                <span class="info-check"><RiShip2Line /> </span>
                <p className="mb-0">{userData?.email}</p>
              </div>
              <div className="d-flex flex-grow-1 flex-row align-items-center">
                <span class="info-check"><MdPhone /> </span>
                <p className="mb-0">{userData?.phoneNo}</p>
              </div>
              <div className="d-flex flex-grow-1 align-items-center">
                <span class="info-check"><IoLocationOutline /> </span>
                <p className="mb-0">{userData?.address}</p>
              </div>
            </div>
          </div>
          <hr />
        </div>

        {/* Events Section */}
        <div className="d-flex flex-column align-items-left justify-content-left">
          <h5 className="">Event</h5>
          {navLinks["West"].length === 0 ? (
            <p className="text-center">You have registered for all events!</p>
          ) : (
            <div className="p-3 event-list">
              {navLinks["West"].map((event, index) => (
                <div key={index} className="event-card">
                  <img
                    src={event.image}
                    width={event.width}
                    alt={event.mainTitle}
                  />
                  <p>{event.title}</p>
                  <button className="btn btn-registerr text-decoration-none text-white">
                    <a
                      href="/tournaments/west-end-meatfish-madness"
                      className="text-decoration-none text-white"
                    >
                      View Event
                    </a>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Registered Events Section */}
        {/* <div className="d-flex flex-column align-items-center justify-content-center">
          <h3 className="event-title">Your Registered Events</h3>
          <p className="text-center">
            You haven't registered for any events yet.
          </p>
        </div> */}
        <hr />
        <h5>Photos</h5>
        <div class="container d-flex justify-content-center">
          <div class="left-body">
            <div class="gallery-container">
              <img
                src={Gallery01}
                alt="Image-1"
                class="image-1"
                onClick={() => openModal(Gallery01)}
              />
              <img
                src={Gallery05}
                alt="Image-2"
                class="image-2"
                onClick={() => openModal(Gallery05)}
              />
              <img
                src={Gallery04}
                alt="Image-3"
                class="image-3"
                onClick={() => openModal(Gallery04)}
              />
              <img
                src={Gallery06}
                alt="Image-5"
                class="image-5"
                onClick={() => openModal(Gallery06)}
              />
              <img
                src={Image12}
                alt="Image-6"
                class="image-5"
                onClick={() => openModal(Image12)}
              />
              <img
                src={Image16}
                alt="Image-7"
                class="image-5"
                onClick={() => openModal(Image16)}
              />
              <img
                src={Image17}
                alt="Image-8"
                class="image-5"
                onClick={() => openModal(Image17)}
              />
              <img
                src={Image18}
                alt="Image-9"
                class="image-5"
                onClick={() => openModal(Image18)}
              />
            </div>
          </div>

          <div class="right-body">
            <div class="gallery-container">
              <img
                src={Gallery02}
                alt="Image-10"
                class="image-6"
                onClick={() => openModal(Gallery02)}
              />
              <img
                src={Gallery03}
                alt="Image-11"
                class="image-2"
                onClick={() => openModal(Gallery03)}
              />
              <img
                src={Image8}
                alt="Image-12"
                class="image-8"
                onClick={() => openModal(Image8)}
              />
              <img
                src={Image9}
                alt="Image-13"
                class="image-5"
                onClick={() => openModal(Image9)}
              />
              <img
                src={Gallery08}
                alt="Image-14"
                class="image-5"
                onClick={() => openModal(Gallery08)}
              />

              <img
                src={Image10}
                alt="Image-15"
                class="image-5"
                onClick={() => openModal(Image10)}
              />
              <img
                src={Gallery07}
                alt="Image-16"
                class="image-5"
                onClick={() => openModal(Gallery07)}
              />
              <img
                src={Image13}
                alt="Image-17"
                class="image-5"
                onClick={() => openModal(Image13)}
              />
              <img
                src={Image14}
                alt="Image-18"
                class="image-5"
                onClick={() => openModal(Image14)}
              />
            </div>
          </div>
        </div>
      </div>
      {modalImage && (
        <Modal
          show={showModel}
          onHide={() => setModalImage(false)}
          centered
          style={{
            maxWidth: "100%",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <Modal.Body className="text-center">
            <img
              src={modalImage}
              alt="Modal Content"
              className="img-fluid"
              style={{ borderRadius: "4px" }}
            />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}
