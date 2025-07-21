import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAccessibleIcon, faAccusoft, faAdn, faAdversal, faAlgolia, faAmilia, faAndroid, faBandcamp, faWhatsapp, } from '@fortawesome/free-brands-svg-icons';

export default function HomeP(){
    return <>
    <div id="home" className="homePage w-100 vh-100 position-relative d-flex justify-content-around align-items-center">
        <div className="d-flex flex-row align-items-center justify-content-center">
            <div className=" d-flex flex-column align-items-center me-3 w-25 ">
                <img src="/profile.jpeg" alt="Arun Singh" className="rounded-circle profileImg"></img>
                <img src="/Homename.png" alt="myname" className="profilename"></img>
                <h3 className="text-light homeskills">DESIGN, DEVELOP & DEFEND</h3>
            </div>
            <div className=" d-flex w-50 flex-column align-items-center ms-3">
                <p className="fs-5 text-light ">Passionate about crafting seamless digital experiences through design, development, and data, with a strong focus on usability, performance, & security. Constantly exploring new technologies driven by a curiosity to build impactful, user-centered solutions.</p>
                <div className="d-flex mt-4 w-75 flex-row justify-content-around align-items-center">
                    <a className=" btn btn-custom-logo fs-5 " href="Resume_Arun_Singh_Java_Developer.pdf" download="Resume_Arun_Singh.pdf"><FontAwesomeIcon icon={faBandcamp} /> Download CV</a>
                    <a className=" btn btn-custom-transparent fs-5 text-custom-logo fs-5 " href='#contact_me'><FontAwesomeIcon icon={faWhatsapp} /> Hire ME</a>
                </div>
            </div>
        </div>
    </div>
    </>
}