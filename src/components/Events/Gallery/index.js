import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import EventsNavbar from "../../EventsNavbar";
import EventInformationBg from "../../../assets/images/event-informat-bg.png";
import Line from "../../../assets/images/line.png";

// Image imports
import Gallery01 from "../../../assets/images/new/gallery-01.png";
import Gallery02 from "../../../assets/images/new/gallery-02.png";
import Gallery03 from "../../../assets/images/new/gallery-03.png";
import Gallery04 from "../../../assets/images/new/gallery-04.png";
import Gallery05 from "../../../assets/images/new/gallery-05.png";
import Gallery06 from "../../../assets/images/new/gallery-06.png";
import Gallery07 from "../../../assets/images/new/gallery-07.png";
import Gallery08 from "../../../assets/images/new/gallery-08.png";
import Image8 from "../../../assets/images/new/image8.png";
import Image9 from "../../../assets/images/new/image9.png";
import Image10 from "../../../assets/images/new/10.png";
import Image12 from "../../../assets/images/new/12.png";
import Image13 from "../../../assets/images/new/13.png";
import Image14 from "../../../assets/images/new/14.png";
import Image16 from "../../../assets/images/new/16.png";
import Image17 from "../../../assets/images/new/17.png";
import Image18 from "../../../assets/images/new/18.png";

// Image data
const leftImages = [
  { src: Gallery01, className: "image-1" },
  { src: Gallery05, className: "image-2" },
  { src: Gallery04, className: "image-3" },
  { src: Gallery06, className: "image-5" },
  { src: Image12, className: "image-5" },
  { src: Image16, className: "image-5" },
  { src: Image17, className: "image-5" },
  { src: Image18, className: "image-5" },
];

const rightImages = [
  { src: Gallery02, className: "image-6" },
  { src: Gallery03, className: "image-2" },
  { src: Image8, className: "image-8" },
  { src: Image9, className: "image-5" },
  { src: Gallery08, className: "image-5" },
  { src: Image10, className: "image-5" },
  { src: Gallery07, className: "image-5" },
  { src: Image13, className: "image-5" },
  { src: Image14, className: "image-5" },
];

// Reusable Image component
const GalleryImage = ({ src, className, onClick }) => (
  <img src={src} alt="gallery" className={className} onClick={onClick} />
);

const GalleryComponent = ({ basePath, links }) => {
  const [modalImage, setModalImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (src) => {
    setModalImage(src);
    setShowModal(true);
  };

  return (
    <div>
      <section className="gallery-section">
        <img className="gallery-bg" src={EventInformationBg} alt="Background" />
        {basePath && links && <EventsNavbar basePath={basePath} links={links} />}
        <div className="container">
          <h1 className="title mt-3">Photo Gallery</h1>
          <div className="d-flex justify-content-center my-3">
            <img className="img-line" src={Line} alt="line" />
          </div>
        </div>
      </section>

      <div className="container d-flex justify-content-center">
        <div className="left-body">
          <div className="gallery-container">
            {leftImages.map((img, i) => (
              <GalleryImage key={i} {...img} onClick={() => openModal(img.src)} />
            ))}
          </div>
        </div>

        <div className="right-body">
          <div className="gallery-container">
            {rightImages.map((img, i) => (
              <GalleryImage key={i} {...img} onClick={() => openModal(img.src)} />
            ))}
          </div>
        </div>
      </div>

      {modalImage && (
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          centered
          style={{ maxWidth: "100%", backgroundColor: "transparent", border: "none" }}
        >
          <Modal.Body className="text-center">
            <img src={modalImage} alt="Modal Content" className="img-fluid" style={{ borderRadius: "4px" }} />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default GalleryComponent;
