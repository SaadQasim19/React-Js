import { Link } from "react-router-dom"
export default function About(){
    return(
        <div>
            <h1>Developer Data</h1>
            <p>Muhammad Saad Qasim </p>
           <Link to="/contact"> <button>Get Details</button> </Link>
        </div>
    )
}