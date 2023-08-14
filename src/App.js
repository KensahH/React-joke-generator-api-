import React from "react";
import "./style.css";
import {useState, useEffect} from "react";const url ="https://api.quotable.io/random";

export default function App() {
  const [joke, setJokes] = useState("");


  const getJoke= async()=>{
    const res = await fetch(url);
    const data =  await res.json();
    setJokes(data);

  }
  

  
useEffect(()=>{
getJoke();
},[])
  return (

    < div>
    <div className="wrapper">
      <h1>joke generator</h1>
      <h5> wanna hear a corny dad joke?</h5>
      <p>{joke.content}  </p>
            </div>
      <button onClick={getJoke} className="btn">get joke</button>
    
      </div>
  )
  

}
