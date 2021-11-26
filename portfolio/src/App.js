import hiker from "./pictures/hikerpic.PNG"
import melp from "./pictures/melppic.png"
import note from "./pictures/notetakerpic.PNG"

function App() {
  return (
    <div className="App">
    

    

  <div className="container">
    <header className="row">
      <h1>Adedotun O. Albert-Ojeikere</h1>
      <nav>
        <a href="#aboutMe">About Me</a>
        <a href="#work">Work</a>
        <a href="#contactMe">Contact Me</a>
        <a href="#resume">Resume</a>
      </nav>
    </header>
    <section className="aboutMe row">
      <h2 className>About me</h2>
      <p>
      My name is Adedotun O. Albert-Ojeikere. I am a recent graduate from the Georgia Institute of Technology coding boot-camp and confident in my newfound skills as software developer.
      The acquisition of these skills has already proven useful in my everyday experience. I recently updated my own website that I use to sell music. It made the user experience smoother and even improved sales. I am sure that my value would elevate any team project I am assigned to. I love working with others and can dial in to assignments privately when the situation requires it.
      </p>
      
    </section>
    <section className="projectContent row" id="projects">
      <h2 className="work row">Work</h2>
      <div className="col-3">
        <h3>
          <a href="https://drtun25.github.io/u-hiker-project-1/" className="project1">
            <h3>U-hiker</h3>
          </a>
        </h3>
        <img src={hiker} alt="" />
        <h3>
          <a href="https://ghastly-fangs-36933.herokuapp.com/" className="project2">
            <h3>Melp</h3>
          </a>
        </h3>
        <img src={melp} alt="" />
      </div>
      <div className="col-3">
        <h3>
          <a href="https://notetakertune.herokuapp.com/" className="project3">
            <h3>Note Taker</h3>
          </a>
        </h3>
        <img src={note} alt="" />
      </div>  
    </section>
  </div>
  <footer className="contactSection" id="contact">
    <h1 className="contactMe resume">Contact Me!</h1>
    <p>
      <a href={6785493293}>6785493293</a>
      <a href="dotun1m@gmail.com">dotun1m@gmail.com</a>
      <a href="github.com/drtun25">github.com/drtun25</a>
      <a href="https://www.linkedin.com/in/adedotun-albert-ojeikere-655283b8/">Linkedln</a>
    </p>
  </footer>
</div>





  );
}

export default App;
