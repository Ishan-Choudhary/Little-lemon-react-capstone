import Header from "./Header";

const Reservation = () => {
  return (
    <div>
      <Header />
      <article>
        <form method="get">
          <label for="date">Date</label>
          <input type="date" required />
          <label for="guestNum">Number of guests</label>
          <input type="number" required />
          <label for="seating">Seating</label>
          <button id="seating" required>
            Choose an option
          </button>
          <label for="occasion">Occasion</label>
          <button id="occasion" required>
            Choose an option
          </button>
        </form>
        <div>
          <h1>Available Times</h1>
          <div
            style={{
              border: "solid 1px black",
              width: "1px",
              height: "1px",
              padding: "150px",
            }}
          ></div>
        </div>
        <br />
      </article>
    </div>
  );
};

export default Reservation;
