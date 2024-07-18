
function Subscribe(){
    return(
        <div className="subscribe">
            <div>
           <h3>SUBSCRIBE</h3>
           <p>Sign-up to our news letter</p>
           <form>
           <input className="email" type="email" required="" placeholder="Your email" />
           <div className="button">
           <input className="navButton" type="submit" value={"SUBMIT"}></input>
           </div>
           </form>
           </div>
           </div>
    );
}

export default Subscribe