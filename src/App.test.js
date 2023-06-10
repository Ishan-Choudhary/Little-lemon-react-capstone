import { fireEvent, render, screen } from "@testing-library/react";
// import App from "./App";
//
// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import Reservation from "./components/Reservation";
import BookingForm from "./components/BookingForm";

describe("Reservation Page", () => {
  test("Renders the Reservation Page Heading", () => {
    const dispatch = jest.fn();

    render(<BookingForm timeDispatcher={dispatch} givenTimes={["12", "13"]} />);
    const headingElement = screen.getByText("Book a Table!");
    expect(headingElement).toBeInTheDocument();
  });

  test("Date Initial Value is empty", () => {
    const dispatch = jest.fn();

    render(<BookingForm timeDispatcher={dispatch} givenTimes={[]} />);

    const timeInput = screen.getByLabelText(/Select a Time/);
    expect(timeInput.value).toBe("");

    // const dateInput = screen.getByLabelText(/Date/);
    // fireEvent.change(dateInput, { target: { value: "2023-06-10" } });
    //
    // expect(timeInput.value).not.toBe("");
  });

  test("Times value changes after date change", () => {
    const dispatch = jest.fn();

    render(<BookingForm timeDispatcher={dispatch} givenTimes={[]} />);

    const dateInput = screen.getByLabelText(/Date/);
    fireEvent.change(dateInput, { target: { value: "2023-06-10" } });

    const guestNum = screen.getByLabelText(/Number of guests/);
    fireEvent.change(guestNum, { target: { value: 4 } });

    const timeInput = screen.getByLabelText(/Select a Time/);
    expect(timeInput.value).not.toBe("");
  });
});
