import './App.js';
import './Feedback.css';
import { faCab, faFaceGrinStars, faFaceSadTear, faFaceSurprise, faFaceTired, faFaucet, faSmile, faSmileBeam, faSmileWink, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Feedback1} from './Feedback1.js';
import {Link} from 'react-router-dom';
export function Feedback()

{
    return(
        <div className='bgcolor1'>
            <div className='div1'>
                <div>
                    <h1>How Satisified are you with our customer support performance</h1>
                     <Link to='/Feedback1' ><FontAwesomeIcon icon={faSmile} className="symbol1"/></Link>
                    <Link to='/Feedback1'><FontAwesomeIcon icon={faFaceSadTear} className="symbol2"/></Link>
                    <Link to='/Feedback1'><FontAwesomeIcon icon={faFaceSurprise} className="symbol3"/></Link>
                    <span className='span2'>
                        <h3 className='head1'>Happy</h3>
                        <h3 className='head2'>Sad</h3>
                        <h3 className='head3'>None</h3>
                    </span>
                   
                </div>
            </div>
        </div>
    )
}