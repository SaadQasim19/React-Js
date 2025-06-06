import State from "../Components/State";
import Reducer from "../Components/Reducer";
import Effect from "../Components/Effect";
import CounterDisplay from "../Zustand/CounterDisplay";
import CounterButtons from "../Zustand/CounterButtons";
import CounterReset from "../Zustand/CounterReset";
import Form from "../Components/Form";
import DB from "../Api/DB";

export default function Home() {
  return (
    <div>
      <h1>React App Home</h1>
      <State />
      <Reducer />
      <Effect />
      <h2>ZuStand Example</h2>
      <CounterDisplay />
      <CounterButtons />
      <CounterReset />
      <Form />
      <DB />
    </div>
  );
}
