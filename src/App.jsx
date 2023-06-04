import "./App.css";
import Home from "./components/Home";
import Reservation from "./components/Reservation";
import { Routes, Route } from "react-router-dom";

// <li></li>
// <div>
// <li>Home</li>
// <li>About</li>
// <li>Menu</li>
// <li>Reservations</li>
// <li>Order online</li>
// <li>Login</li>
// </div>

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
      </Routes>
    </>
  );
}

export default App;
