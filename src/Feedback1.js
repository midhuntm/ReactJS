    import './Feedback.css';
    import './Feedback.js';
    import './App.js';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faHeart } from '@fortawesome/free-solid-svg-icons';

    export function Feedback1()
    {
        return(
        <div className='bgcolor1'>
            <div className='div1'>
                <FontAwesomeIcon icon={faHeart} className="heart1"/>
                <h1 className='head10'>Thank you for Your Review!</h1>
            </div>
            
        </div>
        );
    }