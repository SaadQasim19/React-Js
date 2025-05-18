import Child_2 from "./Child_2";
export default function Child_1({ name, age }) {
  // export default function Child(props){
  return (
    <div>
      <h3>Child Component</h3>
      {/* <p>Description: {props.name}</p> */}
      <p>Description: {name}</p>

      <p>Age:{age}</p>
      <Child_2 name="CHild 2 Name" age={5} />
    </div>
  );
}
