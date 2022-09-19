import React from "react";
import './App.js';
import './App.css';
import img5 from './HTML.jpeg';
import img6 from './CSS.jpeg';
import img7 from './JavaScipt.jpeg';
import img8 from './React.jpeg';
import {Nav} from './Nav.js';

export function Assignment4()
{
    return(
        
        <div>
        <Nav/>  
        <div className="bgcolor20 ">
          
            <h1 className="head10">FULLSTACK WEB DEVELOPMENT</h1>
            <p className="p1">A full stack web developer is a person who can develop both client and server software. In addition 
                to mastering HTML and CSS
                he/she also knows<br/> how to: Program a browser 
                (like using JavaScript, jQuery, Angular, or Vue) Program a server (like using PHP, ASP, Python, or Node)</p><br/><br/>
                <div className="d">
                <div className="bgcolor5">
                <h4>HTML</h4>
                <p>The HyperText Markup Language or HTML is the standard markup language for documents <br/>
                    designed to be displayed in a web browser. </p>
                    <img src = {img5} className="i2"/>
                </div>

                
                <div className="bgcolor6">
                <h4>CSS</h4>
                <p>Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation
                     of a 
                    document written in HTML or XML...</p>
                    <img src = {img6} className="i2"/>
                </div>
                </div>  


                <div className="d">
                <div className="bgcolor7">
                    <h4>JavaScript</h4>
                    <p>JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with 
                        first-class functions, and is best known as 
                        the scripting language for Web pages.</p>
                    <img src = {img7} className="i2"/>

                </div>
                
                <div className="bgcolor8">
                <h4>React</h4>
                <p>React (also known as React.js or ReactJS) is a free and open-source front-end 
                    JavaScript library for building user interfaces based on UI components.</p>
                    <img src = {img8} className="i2"/>
                </div>
                </div>  

        </div> 
        </div>
        
    );
}