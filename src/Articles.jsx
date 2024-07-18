import picture from "./assets/image2.jpeg"
import picture1 from "./assets/image3.jpeg"
import picture2 from "./assets/image4.jpeg"
import picture3 from "./assets/image5.jpeg"

function Articles() {
    return (
      <div className="card-container">
        <h1>LATEST ARTICLES</h1>
        <div className="rectangle2"></div>
        
        <div className="articles-container">
        <div className="article">
        <img src={picture}></img>
        <div className="card-content">
        <p>How to automate survellance drones</p>
        </div>
        </div>

        <div className="article">
        <img src={picture1}></img>
        <div className="card-content">
        <p>Robotics and Artificial Intelligence</p>
        </div>
        </div>

        <div className="article">
        <img src={picture2}></img>
        <div className="card-content">
        <p>Improving Lives through Robotics Prosthetics</p>
        </div>
        </div>

        <div className="article">
        <img src={picture3}></img>
        <div className="card-content">
         <p>Power of Robotics in Agriculture</p>
        </div>
        </div>
        </div>

      </div>
    );
}


export default Articles