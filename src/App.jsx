import { Route, Routes } from "react-router-dom";
import "./App.css";
// import FetchingData from "./Componets/FetchingData/FetchingData";
import Navbar from "./Componets/Navbar/Navbar";
// import State from "./Componets/State/State";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* <State />
      <FetchingData /> */}
    </>
  );
}

export default App;
