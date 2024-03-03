import "./Home.css";
import landingImage from "../images/landing_image.png";

function Home() {
  return (
    <div className="landing" id="landing">
      <div className="container">
        <div className="text">
          <h1 className="mb-15 fw-bold">Chatbot Assistant</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            beatae ratione natus excepturi veritatis repellendus esse.
          </p>
          <button>Get Started</button>
        </div>
        <img src={landingImage} alt="home" loading="lazy" />
      </div>
    </div>
  );
}

export default Home;
