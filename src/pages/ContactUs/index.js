import GetService from "../../components/GetService";
import Phone from "../../assets/images/phone.png";
import IconMessage from "../../assets/icons/icon-message.svg";
import Map from "../../assets/images/map.png";
import Location from "../../assets/images/location.png";
import Bag from "../../assets/images/bag.png";
import Earth from "../../assets/images/earth.png";
import Earth01 from "../../assets/images/earth01.png";

export default function ContactUs() {
  const contactDetails = [
    { imgSrc: Phone, text: "+1-800-561-2713" },
    {
      imgSrc: Location,
      text: "Florida Office 2875 S Ocean Blvd, Ste. 200 Palm Beach, FL 33480",
    },
    { imgSrc: IconMessage, text: "info@cybergen.com" },
  ];
  const experienceDetails = [
    { imgSrc: Bag, text: "Over a Decade of Experience", imgWidth: 70 },
    { imgSrc: Earth, text: "Spanning Across 5 Continents", imgWidth: 60 },
    { imgSrc: Earth01, text: "Global Footprint in 9+ Countries", imgWidth: 60 },
  ];
  return (
    <div>
      {/* Our Contact */}
      <div className="container layout-space">
        <div className="text-center">
          <div className="main-h1">Lets Start a Conversation</div>
          <div className="w-10 d-flex justify-content-center">
            <p className="main-p w-75">
              You will find yourself working in a true partnership that results
              in an incredibleexperience and deliver the best possible end
              product.
            </p>
          </div>
          <div>
            <h1 className="main-h1 contact-h1">Connect With Us </h1>
            {/* Form */}
            <form className="form-container">
              <div className="row">
                <div className="col-12 col-lg-6 col-md-6 text-start">
                  <label className="mb-2">Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-lg-6 col-md-6 text-start">
                  <label className="mb-2">Email</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="col-12 mt-4">
                  <input type="text" className="form-control text-check" />
                </div>
                {/* <div className="text-start d-flex gap-2  mt-4">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label>I agree to our friendly privacy policy</label>
                </div> */}
              </div>
              <button className="contact-button">Send Request</button>
            </form>
          </div>
          <div className="row mb-5">
            {contactDetails.map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="d-flex align-items-center justify-content-center gap-3 flex-column">
                  <img src={item.imgSrc} width="60" alt="Contact Icon" />
                  <p className="max-width-para">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            {experienceDetails.map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="d-flex align-items-center justify-content-center gap-3 flex-column">
                  <img
                    src={item.imgSrc}
                    width={item.imgWidth}
                    alt="Experience Icon"
                  />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.text.replace(" ", "<br>"),
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <h1 id="footprint-h1">
            Global&nbsp;<span>Footprints</span>{" "}
          </h1>
          <div>
            <img src={Map} className="map-image" width="1200" alt="no-map" />
          </div>
        </div>
        <GetService />
      </div>
    </div>
  );
}
