import Footer from "./Footer";
import Header from "./Header";
import BookingForm from "./BookingForm";

const Reservation = () => {
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
      <BookingForm />
      <Footer />
    </main>
  );
};

export default Reservation;
