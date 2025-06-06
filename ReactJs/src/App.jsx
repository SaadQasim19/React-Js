import {  Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
// import Parent from "./Components/Parent";
// import Child_1 from "./Components/Child_1";
import State from "./Components/State";
import Reducer from "./Components/Reducer";
import Effect from "./Components/Effect";
import CounterDisplay from "./Zustand/CounterDisplay";
import CounterButtons from "./Zustand/CounterButtons";
import CounterReset from "./Zustand/CounterReset";
import Form from "./Components/Form";
// import API from "./Api/API";
import DB from "./Api/DB";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      {/* <Parent /> */}
      {/* <Child_1 name="Childs Description" age={10} /> */}
      <State />
      <Reducer />
      <Effect />
      <br />
      <h2>ZuStand Example</h2>
      <CounterDisplay />
      <CounterButtons />
      <CounterReset />
      <br />

      <Form />
      <br />
      <br />
      {/* <API /> */}
      <br />
      <br />
      <DB />

      <Routes>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        
      </Routes>
    </div>
  );
}

export default App;
