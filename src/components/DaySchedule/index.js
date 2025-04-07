import React from "react";
import CheckIcon from "../../assets/icons/check-icon.svg";

const ScheduleItem = ({ time, text }) => (
  <li className="d-flex align-items-start mb-3">
    <img src={CheckIcon} width="26px" className="me-2" alt="Check" />
    <span className="fw-semibold">{time} - {text}</span>
  </li>
);

const DaySchedule = ({ title, date, events }) => (
  <div className="col-lg-4 col-md-6 col-sm-12">
    <div className={`p-3 ${title === "Schedule Of Events" ? "" : "section-card"}`}>
      <h4 className="fw-bold">{title}</h4>
      <p className="text-muted">{date}</p>
      <ul className="list-unstyled text-start p-2 section-card-inner">
        {events?.map((event, index) => (
          <ScheduleItem key={index} time={event.time} text={event.text} />
        ))}
      </ul>
    </div>
  </div>
);

export default DaySchedule;
