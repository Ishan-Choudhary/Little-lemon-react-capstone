import Header from "./Header";
import Footer from "./Footer";

import "../assests/styles/ConfirmationPageStyle.css";

const ConfirmationPage = () => {
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="confirm-head">Your Booking is Confirmed 🎉</h1>
        <br />
        <h2 className="confirm-sub">
          Thank you for choosing to dine at Little Lemon
        </h2>
      </div>
      <Footer />
    </main>
  );
};

export default ConfirmationPage;
