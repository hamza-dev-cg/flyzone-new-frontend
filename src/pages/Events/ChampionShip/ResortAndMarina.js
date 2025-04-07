import React from "react";
import EventsNavbar from "../../../components/EventsNavbar";
import Footer from "../../../components/Footer";
import Line from "../../../assets/images/line.png";
import EventInformationBg from "../../../assets/images/event-informat-bg.png";

const ResortAndMarina = () => {
  return (
    <div>
      <section className="rules-section app-min-height ">
        <img className="rules-bg" src={EventInformationBg} alt="fish" />
        <EventsNavbar basePath="/events" links="championship" />
        <div className="container mt-3 events-para">
          <h1 className="title mb-2">Blue Marlin Cove Resort And Marina</h1>
          <div className="d-flex justify-content-center mt-3">
            <img src={Line} alt="line" className="responsive-line" />
          </div>
          <p className="text-center resort-para mt-3">
            <span>Discover Blue Marlin Cove:</span> Your Host Marina for the
            Wahoo Championship
          </p>
          <div className="rules-s-container">
            <div className="rule-description">
              <p>
                Nestled in the breathtaking West End of the Bahamas, Blue Marlin
                Cove offers the perfect blend of luxury, comfort, and island
                charm as the host marina for the Wahoo Championship. This
                family-friendly, eco-conscious resort features 30 well-appointed
                residences, each offering stunning ocean views and a generous
                layout ranging from 1,100 to 2,600 square feet. With suites of 2
                to 4 bedrooms, guests will enjoy all the comforts of home in a
                tropical paradise that redefines the island experience.
                <br></br>
                <br></br>
                Blue Marlin Cove isn’t just a place to stay; it's a destination
                where life feels a little different. Surrounded by lush greenery
                and the deep blue hues of the Caribbean, it’s easy to lose
                yourself in the vibrant colors, warm breezes, and natural beauty
                that set the Bahamas apart. Whether you’re here to compete or
                simply unwind, this is a true home-away-from-home, crafted to
                help you effortlessly step away from everyday life and into the
                pure bliss of paradise.
                <br></br>
                <br></br>
                Once you sign up for one or both of the tournaments you will be
                provided a code to book your room. (Limited to 2 rooms per
                team.)
              </p>
              <div className="link-row mt-4 z-3">
                <a href="https://www.oldbahamabayresorts.com/">
                  Check Availability
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ResortAndMarina;
