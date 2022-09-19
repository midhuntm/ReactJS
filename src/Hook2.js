import './App.js';
import React,{useState} from 'react';
export function Hook2()
{
   var [count,setCount]=useState(0);
   return(
   <div>
   <h1>{count}</h1>
   <button onClick={()=>setCount(count+1)}>ADD</button>
   <button onClick={()=>setCount(count-1)}>SUB</button>
   </div>
   );
}