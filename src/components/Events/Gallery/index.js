import React, { useState } from "react";
import { Modal } from "react-bootstrap";
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
import EventsNavbar from "../../EventsNavbar";
import EventInformationBg from "../../../assets/images/event-informat-bg.png";
import Line from "../../../assets/images/line.png";

const GalleryComponent = ({ basePath, links }) => {
  const [modalImage, setModalImage] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const openModal = (src) => {
    setModalImage(src);
    setShowModel(true);
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
      <div class="container d-flex justify-content-center ">
        <div class="left-body">
          <div class="gallery-container">
            <img
              src={Gallery01}
              alt="Image 1"
              class="image-1"
              onClick={() => openModal(Gallery01)}
            />
            <img
              src={Gallery05}
              alt="Image 2"
              class="image-2"
              onClick={() => openModal(Gallery05)}
            />
            <img
              src={Gallery04}
              alt="Image 3"
              class="image-3"
              onClick={() => openModal(Gallery04)}
            />
            <img
              src={Gallery06}
              alt="Image 5"
              class="image-5"
              onClick={() => openModal(Gallery06)}
            />
            <img
              src={Image12}
              alt="Image 5"
              class="image-5"
              onClick={() => openModal(Image12)}
            />
            <img
              src={Image16}
              alt="Image 5"
              class="image-5"
              onClick={() => openModal(Image16)}
            />
            <img
              src={Image17}
              alt="Image 5"
              class="image-5"
              onClick={() => openModal(Image17)}
            />
            <img
              src={Image18}
              alt="Image 5"
              class="image-5"
              onClick={() => openModal(Image18)}
            />
          </div>
        </div>

        <div class="right-body">
          <div class="gallery-container">
            <img
              src={Gallery02}
              alt="Image 1"
              class="image-6"
              onClick={() => openModal(Gallery02)}
            />
            <img
              src={Gallery03}
              alt="Image 2"
              class="image-2"
              onClick={() => openModal(Gallery03)}
            />
            <img
              src={Image8}
              alt="Image 3"
              class="image-8"
              onClick={() => openModal(Image8)}
            />
            <img
              src={Image9}
              alt="Image 5"
              class="image-5"
              onClick={() => openModal(Image9)}
            />
            <img
              src={Gallery08}
              alt="Image 5"
              class="image-5"
              onClick={() => openModal(Gallery08)}
            />

            <img
              src={Image10}
              alt="Image 5"
              class="image-5"
              onClick={() => openModal(Image10)}
            />
            <img
              src={Gallery07}
              alt="Image 5"
              class="image-5"
              onClick={() => openModal(Gallery07)}
            />
            <img
              src={Image13}
              alt="Image 5"
              class="image-5"
              onClick={() => openModal(Image13)}
            />
            <img
              src={Image14}
              alt="Image 5"
              class="image-5"
              onClick={() => openModal(Image14)}
            />
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
};

export default GalleryComponent;
