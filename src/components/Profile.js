import Sidebar from "./Sidebar";

import "./profile.css";
import { useAuth } from "../context/GlobalState";
import Loader from "./Loader";
// import { Navigate } from "react-router-dom";

function Profile() {
  const { user, handleAuth } = useAuth();

  if (handleAuth(user)) {
    return <Loader />;
  }
  return (
    <>
      <div className="page">
        <Sidebar />
        <div className="content">
          <h1 className="p-relative">Profile</h1>
          <div className="grid-page profile-page">
            <div className="overview d-flex align-items-center py-md-5">
              <div className="avatar-box text-center p-3">
                <img src={user?.profileIcon} alt="profile" loading="lazy" />
                <h4 className="my-2 text-capitalize">{user?.fullName}</h4>
                <span className="d-block">Level {user?.level}</span>
                <div className="level rounded-4 position-relative">
                  <span style={{ width: `${(user?.level / 4) * 100}%` }}></span>
                </div>
              </div>
              <div className="info-box w-100 px-md-3">
                <div className="box p-3 text-center text-md-start">
                  <h4 className="m-0 mb-2 w-100">Personal Information: </h4>
                  <div>
                    <span className="c-grey">Full Name: </span>
                    <span className="text-capitalize">{user?.fullName}</span>
                  </div>
                  <div>
                    <span className="c-grey">Email: </span>
                    <span>{user?.email}</span>
                  </div>
                  <div>
                    <span className="c-grey">Phone: </span>
                    <span>{user?.phone}</span>
                  </div>
                  <div>
                    <span className="c-grey">Gender: </span>
                    <span>{user?.gender}</span>
                  </div>
                  <div>
                    <span className="c-grey">Department: </span>
                    <span>{user?.department}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
