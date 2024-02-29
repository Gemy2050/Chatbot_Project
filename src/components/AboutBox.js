import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";


export default function AboutBox({name,job}){

    return(
        <>
            <div className="about-box">
                <div class="contact">
                <FontAwesomeIcon className="faphone" icon={faPhone} />
                <FontAwesomeIcon className="faEnvelope" icon={faEnvelope} />
                </div>
                <div class="info txt-c mt-10">
                    <img src="https://gemy2050.github.io/Dashboard/imgs/friend-02.jpg" alt="friend-img"></img>
                    <h4 class="m-0 mt-10 mb-10">{name}</h4>
                    <span class="c-grey">{job}</span>
                </div>
            </div>
        </>
    )
}