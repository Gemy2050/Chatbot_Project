import "./Home.css";

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
          <button className="btn-bg">Get Started</button>
        </div>
        <img src="./images/landing_image.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
