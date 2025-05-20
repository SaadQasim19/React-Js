import {useState} from 'react';

export default function State(){
    const[count , setCount] = useState(0);
    const[heading , setHeading] = useState('useState in React');
    const[formData , setFormData] = useState({
        username: '',
        password: ''
    })
const increment = ()=>{setCount(count + 1);}
const decrement= ()=>{setCount(count-1);}
const reset = ()=>{setCount(0);}
//^ ye hum toggle ki state se bhi acheive kar skte hain...
const changeHeading = ()=>{
    if(heading === 'useState in React'){
        setHeading('Updated Heading');
    }
    else{
        setHeading('useState in React');
    }
}

const handleForm = (e)=>{
    e.preventDefault();
    const {name , value} = e.target;
    setFormData({
        ...formData,
        [name]: value
    })
}



    return(
        <div>
            <h1>{heading}</h1>
           <button onClick={changeHeading} >Update Heading</button>
           <h2>useState in React</h2>
            <p>Count:{count}</p>
            <button onClick={increment} >{`Click to Increment: `}</button>
            <br />
            <button onClick={decrement} >{`Click to Decrement: `}</button>
            <br />
            <button onClick={reset}>{'Click to Reset: '}</button>

<br />
<br />
<form action="onSubmit" onSubmit={(e)=>{e.preventDefault();console.log(formData)}}>
    <input type="text" name='name' value={formData.name} onChange={handleForm} placeholder='Enter Name' />
    <br />
    <input type="password" name='password' value={formData.password} onChange={handleForm} placeholder='Enter Password' />
    <br />
    <button type='submit'>Submit</button>
</form>


        </div>
    )
}
