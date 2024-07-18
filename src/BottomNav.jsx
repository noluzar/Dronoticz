import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';

function BottomNav() {
    return (
        <div className="bottom-nav"> 
            <header className="btm-navigator">
        <nav>
        <div className="icons">
            <FaFacebook className="icon1" />
                <FaLinkedin className="icon2" />
                <FaPinterest className="icon3" />
            </div>
            <ul>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">ARTICLES</a></li>
            </ul>
            <input className="navButton" type="submit" value={"SUBSCRIBE"}></input>
        </nav>
        </header>
        </div>
    );
}

export default BottomNav