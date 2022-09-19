import './App.js';
import './App.css';
import React,{useState} from 'react';
import my1 from './orange.jpeg';
import my2 from './Mango.jpeg';
export function Hooks1()
{
    var [count,setCount]=useState(0);
    var [counter,setCounter]=useState(0);
    return(
        <div>     
   
          <div className='bgcolor'><br/><br/>
        
                <div  className='div2'>
                    <h1 className='head1'>Bob ate <span className='span'>{count}</span> Mangoes <span className="span">{counter}</span> Bananas</h1><br/><br/>
                 <img src={my1} className="img1"/>
                <img src={my2} className="img2"/><br/><br/>
                <button onClick={()=>setCount(count+1)} className="btn1">Add Orange</button>
                <button onClick={()=>setCounter(counter+1)} className="btn2">Add Mango</button>
                </div>  


          </div>
        </div>
    );

}