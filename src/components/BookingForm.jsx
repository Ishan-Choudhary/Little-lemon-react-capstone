import "../assests/styles/BookingFormStyle.css";
import PrimaryBtn from "./Button/PrimaryBtn";

import { useEffect, useState } from "react";

const BookingForm = () => {
  const [currData, setCurrData] = useState({
    date: "",
    time: "",
    guestNum: 0,
    occasion: "",
  });

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const updateValues = (e) => {
    setCurrData({ ...currData, [e.target.id]: e.target.value });
  };

  return (
    <article className={"form-bg"}>
      <h1>Book a Table!</h1>
      <form method="get" className={"form-comp"}>
        <div>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            min={today}
            required
            onBlur={updateValues}
          />
        </div>
        <div>
          <label htmlFor="time">Select a Time</label>
          <select id="time" onBlur={updateValues}>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
          </select>
        </div>
        <div>
          <label htmlFor="guestNum">Number of guests</label>
          <input
            id="guestNum"
            type="number"
            placeholder="1"
            min="1"
            max="10"
            required
            onBlur={updateValues}
          />
        </div>
        <div>
          <label htmlFor="occasion">Choose an Occasion</label>
          <select id="occasion" onBlur={updateValues}>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>
        <PrimaryBtn
          content={"Submit Form"}
          onClick={(e) => {
            e.preventDefault();
            console.log(currData);
          }}
        />
      </form>
    </article>
  );
};

export default BookingForm;
