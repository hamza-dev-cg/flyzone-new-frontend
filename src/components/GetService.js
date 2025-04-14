import Line from "../assets/images/service-line.png";

function GetService() {
  return (
    <div className="container">
      <div className="get-service flex-column">
        <h1>
          Achieve Your Goals Through{" "}
          <span>
            Intelligent IT<br></br> Solutions with Flyzone
          </span>
        </h1>
        <img src={Line} alt="" className="mb-4 mt-2 service-line" />
        <a className="service-btn" href="/contact-us">
          Book a meeting now
        </a>
      </div>
    </div>
  );
}

export default GetService;
