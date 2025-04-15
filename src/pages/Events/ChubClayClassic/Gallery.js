import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import EventsNavbar from "../../../components/EventsNavbar";
import EventInformationBg from "../../../assets/images/event-informat-bg.png";
import Line from "../../../assets/images/line.png";
import "../../../assets/css/gallery.css";

import Gallery01 from "../../../assets/images/new/g-1.JPG";
import Gallery02 from "../../../assets/images/new/g-2.JPG";
import Gallery03 from "../../../assets/images/new/g-3.JPG";
import Gallery04 from "../../../assets/images/new/g-5.JPG";
import Gallery05 from "../../../assets/images/new/g-4.JPG";
import Gallery06 from "../../../assets/images/new/g-6.JPG";
import Gallery07 from "../../../assets/images/new/g-7.jpg";
import Gallery08 from "../../../assets/images/new/g-8.jpg";
import Image8 from "../../../assets/images/new/g-9.JPG";
import Image9 from "../../../assets/images/new/g-10.JPG";
import Image10 from "../../../assets/images/new/g-11.JPG";
import Image12 from "../../../assets/images/new/g-12.JPG";
import Image13 from "../../../assets/images/new/g-13.JPG";
import Image14 from "../../../assets/images/new/g-14.JPG";
import Image16 from "../../../assets/images/new/g-16.JPG";
import Image17 from "../../../assets/images/new/g-17.JPG";
import Image18 from "../../../assets/images/new/g-18.JPG";
import Image19 from "../../../assets/images/new/19im.JPG";
import Image20 from "../../../assets/images/new/20im.JPG";

const allImages = [
  { src: Image18, className: "image-tall" },
  { src: Gallery01, className: "" },
  { src: Gallery02, className: "" },
  { src: Gallery03, className: "image-wide" },
  { src: Gallery04, className: "" },
  { src: Gallery06, className: "" },
  { src: Gallery07 },
  { src: Gallery05, className: "image-tall" },

  { src: Gallery08, className: "" },
  { src: Image14, className: "" },
  { src: Image9, className: "" },
  { src: Image10, className: "" },
  { src: Image8, className: "" },

  { src: Image12 },
  { src: Image13, className: "image-wide" },
  { src: Image19, className: "image-tall" },
  { src: Image17, className: "image-wide" },
  { src: Image20, className: "" },
  { src: Image16, className: "" },
];

const GalleryComponent = ({ basePath, links }) => {
  const [modalImage, setModalImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (src) => {
    setModalImage(src);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalImage(null);
    setShowModal(false);
  };

  return (
    <div>
      <section className="gallery-section">
        <img className="gallery-bg" src={EventInformationBg} alt="Background" />
        {basePath && links && (
          <EventsNavbar basePath={basePath} links={links} />
        )}
        <div className="container">
          <h1 className="title mt-3">Photo Gallery</h1>
          <div className="d-flex justify-content-center my-3">
            <img className="img-line" src={Line} alt="line" />
          </div>
        </div>
      </section>

      <div className="container">
        <div className="gallery-grid">
          {allImages.map(({ src, className }, index) => (
            <div
              key={index}
              className={`grid-item ${className}`}
              onClick={() => openModal(src)}
            >
              <img src={src} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {modalImage && (
        <Modal
          show={showModal}
          onHide={closeModal}
          centered
          style={{ backgroundColor: "transparent", border: "none" }}
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
};

export default GalleryComponent;