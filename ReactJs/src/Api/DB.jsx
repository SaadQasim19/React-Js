import { useState , useEffect } from "react"
import "../App.css";

export default function DB(){
    const [data , setData] = useState([]);

useEffect(()=>{
    const fetchData = async ()=>{
        const res = await fetch("http://localhost:3000/students");
        if(res.ok){
            const json = await res.json();
            setData(json);
        }else{
            console.error({message:"Failed to fetch data"});
        }
    }
    fetchData();
},[])


    return(
        
    //    Card
        // <div className="container">
        //     <div className="row">
        //         {data.map((student) => (
        //             <div className="col-md-4" key={student.id}>
        //                 <div className="card mb-4">
        //                     <div className="card-body">
        //                         <h5 className="card-title">{student.name}</h5>
        //                         <p className="card-text">Age: {student.age}</p>
        //                         <p className="card-text">Email: {student.email}</p>
        //                         <p className="card-text">Address: {student.address}</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        // </div>
     
<div className="container">
  <h2 className="title">Students List</h2>
  <div className="row">
    {data.map((student) => (
      <div className="card" key={student.id}>
        <h3 className="name">{student.name}</h3>
        <p><strong>Age:</strong> {student.age}</p>
        <p><strong>School:</strong> {student.school}</p>
        <p><strong>Grade:</strong> {student.grade}</p>
      </div>
    ))}
  </div>
</div>


        
    )
}