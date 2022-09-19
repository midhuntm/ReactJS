import './App.js';
import './App.css';
import './Home.scss';
import React,{useState} from 'react';

export function Router()
{
    var [counter,setCounter]=useState(0);
    return(
        <div>
        <h1>{counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>ADD</button>
        </div>

    );
}