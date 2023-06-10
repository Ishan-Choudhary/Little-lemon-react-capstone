import "../assests/styles/BookingFormStyle.css";
import PrimaryBtn from "./Button/PrimaryBtn";

import { useEffect, useState } from "react";

const BookingForm = ({ timeDispatcher, givenTimes, submitFn }) => {
  //limited for restaurant reservation date
  const today = new Date().toISOString().split("T")[0];
  const occasionList = ["Birthday", "Anniversary"];

  // Defining all the input field states
  const [choosenDate, setChoosenDate] = useState(today);
  const [choosenTime, setChoosenTime] = useState(givenTimes.flat()[0]);
  const [guestNum, setGuestNum] = useState(1);
  const [occasion, setOccasion] = useState(occasionList[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //setting field states
  const handleDateChange = (e) => {
    setChoosenDate(e.target.value);
    timeDispatcher({ type: "dateChange", payload: new Date(choosenDate) });
  };

  const handleTimeChange = (e) => {
    setChoosenTime(() => (choosenDate ? e.target.value : ""));
  };

  const handleGuestNumChange = (e) => {
    setGuestNum(parseInt(e.target.value));
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  //Handling submition of form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (guestNum === 0 || guestNum > 10) {
      alert("The number of guests should be between 1 to 10");
    } else if (
      choosenDate !== "" &&
      choosenTime !== "" &&
      guestNum !== 0 &&
      occasion !== ""
    ) {
      submitFn({
        date: choosenDate,
        time: choosenTime,
        numberOfGuests: guestNum,
        occasionName: occasion,
      });
    } else {
      alert("The form has not been filled");
    }
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
            value={choosenDate}
            required
            onChange={handleDateChange}
          />
        </div>
        <div>
          <label htmlFor="time" value={choosenTime}>
            Select a Time
          </label>
          <select id="time" onChange={handleTimeChange} required>
            {givenTimes.flat().map((curr, i) => (
              <option key={i} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="guestNum">Number of guests</label>
          <input
            id="guestNum"
            type="number"
            placeholder="Keep between 1 to 10"
            min="1"
            max="10"
            value={guestNum}
            required
            onChange={handleGuestNumChange}
          />
        </div>
        <div>
          <label value={occasion} htmlFor="occasion">
            Choose an Occasion
          </label>
          <select id="occasion" onChange={handleOccasionChange}>
            {occasionList.map((curr, i) => (
              <option key={i} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>
        <PrimaryBtn content={"Submit Form"} onClick={handleSubmit} />
      </form>
    </article>
  );
};

export default BookingForm;
