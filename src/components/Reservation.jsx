import Footer from "./Footer";
import Header from "./Header";
import BookingForm from "./BookingForm";

import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

import { fetchAPI, submitAPI } from "../assests/data/api.js";

const timesReducer = (prevAvailableTimes, action) => {
  let currAvailableTimes = [];

  switch (action.type) {
    case "dateChange":
      currAvailableTimes = fetchAPI(action.payload);
      return currAvailableTimes;
    default:
      break;
  }
};

// 17:00 17:30 18:00, 19:00, 19:30, 20:00, 21:30, 22:30, 23:00

const Reservation = () => {
  const initializeTimes = () => fetchAPI(new Date());
  const navigate = useNavigate();

  const submitForm = (formData) =>
    submitAPI(formData)
      ? navigate("/confirmation")
      : alert("Your Booking has failed");

  // useEffect(initializeTimes);

  const [availableTimes, dispatcher] = useReducer(
    timesReducer,
    initializeTimes()
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        margin: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#495e57",
      }}
    >
      <Header />
      <BookingForm
        timeDispatcher={dispatcher}
        givenTimes={availableTimes}
        submitFn={submitForm}
      />
      <Footer />
    </main>
  );
};

export default Reservation;
