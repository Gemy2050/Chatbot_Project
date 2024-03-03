import "./About.css";
import AboutBox from "./AboutBox";
export default function About() {
  return (
    <div className="page">
      <div className="content px-lg-5">
        <h1 className="p-relative">About Us</h1>
        <div className="grid-page about-page">
          <AboutBox name={"Mohamed Adel"} job={"Frontend Developer"} />
          <AboutBox name={"Mohamed Gamal"} job={"Frontend Developer"} />
          <AboutBox name={"Mohamed Omar"} job={"Full Stack"} />
          <AboutBox name={"Ahmed Ali"} job={"Full Stack"} />
        </div>
      </div>
    </div>
  );
}
