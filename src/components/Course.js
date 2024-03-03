import React from "react";

function Course() {
  return (
    <div className="course rounded-4 position-relative">
      <img
        src="https://gemy2050.github.io/Dashboard/imgs/course-05.jpg"
        alt="lecturer"
        className="w-100 img-fluid"
        loading="lazy"
      />
      <img
        src="https://gemy2050.github.io/Dashboard/imgs/team-01.png"
        alt="course"
        className="team"
        loading="lazy"
      />
      <div className="content p-3">
        <h4 className="m-0">Mastering Web Design</h4>
        <p className="c-grey mt-2">
          Master The Art Of Web Designing And Mocking, Prototyping And Creating
          Web Design Architecture
        </p>
        <a href="/course" className="btn btn-sm d-block">
          Course Info
        </a>
      </div>
      {/* <div className="icons p-3 px-4 c-grey d-flex justify-content-between">
        <div>
          <i className="fa-regular fa-user"></i>
          <span>500</span>
        </div>
        <span>$ 100</span>
      </div> */}
    </div>
  );
}

export default Course;
