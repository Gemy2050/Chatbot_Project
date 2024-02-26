import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faGear ,faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import "./profile.css"
export default function Profile(){
    return(
        <>
        <div className="profile">
            <div className="slider">
                <h1>user profile</h1>
                <ul>
                    <li><FontAwesomeIcon className="usericon" icon={faUser} /> <button className="user-info"> user info</button></li>
                    <li><FontAwesomeIcon className="settingicon" icon={faGear} /> <button className="setting">setting</button></li>
                </ul>

                <button className="log-out"> log out <FontAwesomeIcon className="logout-icon" icon={faRightFromBracket} /></button>
            </div>
            <div className="profile-info">
                <div className="info">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0LFhRvv9VG_gWlAS2HYkGe4Enn2V-BvHBg&usqp=CAU"></img>
                    <h3>luka adel</h3>
                </div>
                <div className="proifle-form">

                    <form>

                    <input type="text" placeholder="first name" ></input>
                    <input type="text" placeholder="last name" ></input>

                    <input type="text" placeholder="phone" ></input>
                    <input type="email" placeholder="email" ></input>

                    <input className="submit" type="submit"></input>
                    
                    </form>


                </div>
            </div>
        </div>
        </>
    );
}