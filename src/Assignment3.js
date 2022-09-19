import React from "react";
import './App.js';
import './App.css';
import img1 from './Mumbai.jpeg';
import img2 from './RCB.jpeg';
import {Nav} from './Nav.js';

export function Assignment3()
{
    return(
        <div>
            <Nav/>
        <div className="bgcolor">
       
            <h2 className="head6">Super Over League</h2>
            <div>
            <img src = {img1} className="img5"/>
            <img src = {img2} className="img6"/>
            </div>
        </div>
        </div>
    );
}