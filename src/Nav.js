import React from "react";
import './App.js';
import './App.css';
import {Link} from 'react-router-dom';

export function Nav()
{
    return(
        <div>
            <ul>
                <Link to ='/Assignment1'><li>Assign1</li></Link>
                <Link to ='/Assignment2'><li>Assign2</li></Link>
                <Link to='/Assignment3'><li>Assign3</li></Link>
                <Link to='/Assignment4'><li>Assign4</li></Link>
                
            </ul>
        </div>
    );
}