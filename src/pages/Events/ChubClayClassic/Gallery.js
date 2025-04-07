import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { images } from "./image";
import Line from "../../../assets/images/line.png";
import EventsNavbar from "../../../components/EventsNavbar";
import EventInformationBg from "../../../assets/images/event-informat-bg.png";

export default function GalleryPage() {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index] || {};
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div>
      <section className="gallery-section">
        <img className="gallery-bg" src={EventInformationBg} alt="Background" />
        <EventsNavbar basePath="/events" links="chubClayClassic" />

        <div className="container">
          <h1 className="title mt-3">Photo Gallery</h1>
          <div className="d-flex justify-content-center my-3">
            <img className="img-line" src={Line} alt="line" />
          </div>
        </div>
      </section>
      <div className="container ">
        <Gallery
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
        />
        {index !== -1 && (
          <Lightbox
            mainSrc={currentImage.original}
            imageTitle={currentImage.caption}
            nextSrc={nextImage.original}
            prevSrc={prevImage.original}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
            reactModalProps={{
              shouldReturnFocusAfterClose: false, // Improves performance
            }}
            animationDisabled={true} // Disables transitions for faster loading
          />
        )}
      </div>
    </div>
  );
}
