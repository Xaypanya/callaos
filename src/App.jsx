import { Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import HotlineContact from "./pages/HotlineContact";

function App() {

  return (
    <div className="App font-sans">
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotline-contact" element={<HotlineContact />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
    </div>
  )
}

export default App
