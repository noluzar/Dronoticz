import Navbar from "./Navbar.jsx"
import Articles from "./Articles.jsx"
import About from "./About.jsx"
import Subscribe from "./Subscribe.jsx";
import BottomNav from "./BottomNav.jsx";

function App(){
   return (
      <>
      <Navbar></Navbar>
      <section id="article">
         <Articles></Articles>
      </section>
      <section id="about">
      <About></About>
      </section>
      <section id="subscribe">
      <Subscribe></Subscribe>
      </section>
      <BottomNav></BottomNav>
      </>
   );

}

export default App
