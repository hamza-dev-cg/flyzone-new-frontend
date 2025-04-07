import React from "react";
import BlueMarineCoweLogo from "../assets/images/blue-marine-cowe-logo.png";
import OldBahamaBayLogo from "../assets/images/old-bahama-bay-logo.png";
const Dockage = () => {
    return (
        <>
            <section className="event-hotel-section">
                <div className="container">
                    <h2>Dockage And Hotel</h2>
                    <div className="d-flex flex-lg-row flex-column">
                        <div className="d-flex flex-column w-lg-50 w-100">
                            <div className="hetel-detail">
                                <p>
                                    Once you sign up for the <span className="fw-bold">Blue Marlin Cove</span> Wahoo
                                    Open you will be provided with a promo code to book your
                                    room and slip. To check availability, go to
                                </p>
                                <a
                                    href="https://bluemarlincove.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="z-3"
                                >
                                    Check Availability
                                </a>
                            </div>
                            <div className="hetel-detail mt-4 justify-content-start">
                                <p>
                                    If you feel that your vessel will not fit in Blue Marlin
                                    Cove you are welcome to stay at <span className="fw-bold">Old Bahama Bay </span>
                                </p>
                                <a
                                    href="https://www.oldbahamabayresorts.com/"
                                    target="_blank"
                                >
                                    Check Availability
                                </a>
                            </div>
                        </div>
                        <div className="d-flex flex-column text-center align-content-center  w-lg-50 w-100 gap-5 mt-lg-0 mt-4">
                            <div className="c-img-container">
                                <img src={BlueMarineCoweLogo} alt="blue logo" />
                            </div>
                            <div className="c-img-container">
                                <img src={OldBahamaBayLogo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Dockage;
