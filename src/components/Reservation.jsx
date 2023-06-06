import Footer from "./Footer";
import Header from "./Header";

const Reservation = () => {
  return (
    <main style={{ height: "100vh" }}>
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
      <Footer />
    </main>
  );
};

export default Reservation;
