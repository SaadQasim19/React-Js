import Parent from './Components/Parent';
import Child_1 from './Components/Child_1';
import State from './Components/State';
import Reducer from './Components/Reducer';
import Effect from './Components/Effect';
import './App.css';
function App() {
  

  return (
    <div className="App">
      <h1>React App</h1>
      <Parent  />
      <Child_1 name="Childs Description" age={10} />
      <State />
      <Reducer />
      <Effect />
    </div>
  )
}

export default App;
