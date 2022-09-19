import './App.js';
import './App.css';
import img1 from './photo.jpeg';
import img2 from './watch.jpeg';
import {Nav} from './Nav.js'

export function Assignment2()
{
    return(
        <div>
            <Nav/>
            <div className="back">
            
                <h1>Congratulations</h1>
                <div className='bgcolor1'>
                    <div>
                        <img src ={img1} className="img1"/>
                        <h5 className="head2">Kiran V</h5>
                    </div>
                        <h2 className='head3'>Kgisl Micro college</h2>
                        <h4 className='head4'>Coimbatore</h4>
                        <img src = {img2} className="img1"/>
                </div>
            </div>
            </div>
    );
} 
