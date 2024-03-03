import Course from "./Course";
import "./Courses.css";
import Sidebar from "./Sidebar";

function Courses() {
  return (
    <div className=" page">
      <Sidebar />
      <div className="content">
        <h1 className="p-relative">Courses</h1>
        <div className="courses grid-page">
          <Course />
          <Course />
          <Course />
          <Course />
        </div>
      </div>
    </div>
  );
}

export default Courses;
