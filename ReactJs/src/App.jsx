import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar"
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home"; 
// import Parent from "./Components/Parent";
// import Child_1 from "./Components/Child_1";
// import API from "./Api/API";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
