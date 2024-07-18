
 function Navbar(){
    return(
        <div className="homeWrapper"> 
        <div className="hero">
            <header>
        <nav>
            <h2 className="logo">D<span>Z</span></h2>
            <ul>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#article">ARTICLES</a></li>
            </ul>
            <a href="#subscribe">
            <input className="navButton" type="submit" value={"SUBSCRIBE"}></input>
            </a>
        </nav>
        </header>
        <p1>DRONOTICZ</p1>
        <p2>THE ERA OF DRONES</p2>
            <hr className="line1"/>
        </div>
        </div>
    );
 }

export default Navbar