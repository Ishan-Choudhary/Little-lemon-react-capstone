import "./App.css";
import Home from "./components/Home";
import Reservation from "./components/Reservation";
import ConfirmationPage from "./components/ConfirmationPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
        <Route path="/confirmation" element={<ConfirmationPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
