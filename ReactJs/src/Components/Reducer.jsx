import { useReducer } from "react";

const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error();
  }
}

const initialStateForm = { name: "", email: "" };
function reducerForm(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value
      };
    case "RESET":
      return initialStateForm;
    default:
      throw new Error();
  }
}

function reducerTheme(state, action) {
  switch (action.type) {
    case "toggle":
      return !state;
    default:
      throw new Error();
  }
}

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, dispatchForm] = useReducer(reducerForm, initialStateForm);
  const [toggle, dispatchToggle] = useReducer(reducerTheme, false);

  const handleChange = (e) => {
    dispatchForm({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value
    });
  };

  return (
    <div
      style={{
        backgroundColor: toggle ? "black" : "#265556 ",
        color: toggle ? "white" : "black",
        padding: "20px"
      }}
    >
      <h1>Reducer</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Click: +</button>
      <br />
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <br />
      <br />
      <h2>Form</h2>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <br />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <br />
      <button onClick={() => dispatchForm({ type: "RESET" })}>Reset Form</button>

      <br />
      <br />
      <button onClick={() => dispatchToggle({ type: "toggle" })}>
        Toggle Theme
      </button>
    </div>
  );
}
