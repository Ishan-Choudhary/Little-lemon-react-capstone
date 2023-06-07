import "../assests/styles/BookingFormStyle.css";
import PrimaryBtn from "./Button/PrimaryBtn";

import { useEffect } from "react";

const BookingForm = () => {
  const today = new Date().toISOString().split("T")[0];

  console.log(today);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <article className={"form-bg"}>
      <h1>Book a Table!</h1>
      <form method="get" className={"form-comp"}>
        <div>
          <label htmlFor="date">Date</label>
          <input id="date" type="date" min={today} required />
        </div>
        <div>
          <label htmlFor="time">Select a Time</label>
          <select id="time">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
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
          />
        </div>
        <div>
          <label htmlFor="occasion">Choose an Occasion</label>
          <select id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
        <PrimaryBtn content={"Submit Form"} />
      </form>
    </article>
  );
};

export default BookingForm;
