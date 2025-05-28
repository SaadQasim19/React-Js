import { useEffect, useState } from "react";

export default function Effect() {
  const [count, setCount] = useState(0);
  const [users , setUser] = useState([]);
  console.log(users);

  const handleClick = () => {
    setCount(count + 1);
  };

//* -------------------------  useEffect-Showing simple mounting with time --------------------------
  useEffect(() => {
    const timeOut = setTimeout(() => {
        console.log("Component mounted");
        console.log("Count : ", count);
    }, 1000);

    //& CLEANUP FUNCTION  RUNS AFTER THE COMPONENT UNMOUNTS

    return () => {
        clearTimeout(timeOut);
      console.log("Component unmounted");
    };
  },[count]);

  //* --------------------------------  Api Calling -----------------------------------

useEffect(()=>{
  async function fetchData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUser(data);
  }
  fetchData();
  return () => {
    console.log("Component unmounted");
  };
},[]);

  return (
    <div>
      <h1>Effect</h1>
      <p>Count : {count}</p>
      <button onClick={handleClick}>Click</button>
      {/* <h2>Users</h2>
      <ul>
  {users.map((user) => (
    <li key={user.id}>
      <h3>User #{user.id}</h3>
      <p> <strong>Name:</strong>  {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address.city}, {user.address.street}</p>
      <p>Company: {user.company.name}</p>
      <hr />
    </li>
  ))}
</ul> */}
<h1>User Table</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address.city}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
