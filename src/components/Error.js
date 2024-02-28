import "./Error.css";
import { Link } from "react-router-dom";

import errorImage from "../images/sad.gif";

function Error() {
  return (
    <>
      <div className="error bg-white py-5 text-center">
        <div className="container py-5">
          <h1 className="head">
            4
            <span className="image mx-3">
              <img src={errorImage} className="img-fluid" alt="not found" />
            </span>
            4
          </h1>
          <p className="fs-2 fw-bold">
            The Page you were looking for, couldn't be found.
          </p>
          <p className="text-muted fs-5 mb-4">
            The page you are looking for might have been removed, had its name
            changed, or is unavailable.
          </p>
          <Link to="/" className="btn btn-bg text-white fw-bold">
            Back To Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default Error;
