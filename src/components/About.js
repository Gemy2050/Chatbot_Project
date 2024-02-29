

import Sidebar from "./Sidebar";
import './About.css'
import AboutBox from "./AboutBox";
export default function About(){
    return(
        <div className="page">
            <Sidebar/>
            <div className="content">
            <h1 className="p-relative">About</h1>
                <div className="grid-page">
                    
                    <AboutBox name={"mohamed adel"} job={"frontend develober"}/>
                    <AboutBox name={"mohamed gamal"} job={"full stack"}/>
                    <AboutBox name={"mohamed gamal"} job={"full stack"}/>
                    <AboutBox name={"mohamed gamal"} job={"full stack"}/>
                    
                    
                </div>
                
            </div>
        </div>
    );
}






// <div class="friend bg-white p-20 rad-10 p-relative">
//           <div class="contact">
//             <i class="fa-solid fa-phone"></i>
//             <i class="fa-regular fa-envelope"></i>
//           </div>
//           <div class="info txt-c mt-10">
//             <img src="imgs/friend-02.jpg" alt=""></img>
//             <h4 class="m-0 mt-10 mb-10">Mohamed Shapka</h4>
//             <span class="c-grey">Cyber Security</span>
//           </div>
//           <div class="icons fs-14 mt-10 mb-15 p-relative b-bottom-eee b-top-eee">
//             <div class="mb-10">
//               <i class="fa-regular fa-face-smile fa-fw"></i>
//               <span class="c-grey">110 Friends</span>
//             </div>
//             <div class="mb-10">
//               <i class="fa-solid fa-code-commit fa-fw"></i>
//               <span class="c-grey">20 Projects</span>
//             </div>
//             <div class="">
//               <i class="fa-regular fa-newspaper fa-fw"></i>
//               <span class="c-grey">35 Articles</span>
//             </div>
//             <span class="vip c-red fw-bold">VIP</span>
//           </div>
//           <div class="between-flex">
//             <span class="c-grey fs-14">Joined 08/06/2019</span>
//             <div class="fs-14">
//               <a href="" class="btn-shape bg-blue c-white">Profile</a>
//               <a href="" class="btn-shape bg-red c-white">Remove</a>
//             </div>
//           </div>
// </div>



