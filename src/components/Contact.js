import { faLinkedin, faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "./contactForm";

export default function Contact(){
    return <div id="contact_me" className="bg-dark d-flex flex-column text-light position-relative w-100 vh-100 p-5">
        <h1 className="mt-5 p-2 text-custom-logo"> Contact ME !</h1>
        <div className=" flex-fill w-100 d-flex flex-row justify-content-around align-items-center">
            <div className="w-40 h-100 d-flex flex-column">
                <h3 className="text-center w-50">Hire ME</h3>
                <div className="text-light flex-fill mb-5 d-flex flex-column justify-content-center align-items-center">
                    <h5 className="text-light fs-2 py-2"><a className="nav-link hover-text-custom-logo" rel="noopener noreferrer" href="https://wa.me/918112337820" target="_blank" ><FontAwesomeIcon icon={faWhatsapp} style={{"color":"#25d366"}}/> &nbsp; &nbsp;8112337820</a></h5>
                    <h5 className="text-light fs-2 py-2"><a className="nav-link hover-text-custom-logo" rel="noopener noreferrer" href="mailto:arun0211.singh@gmail.com" target="_blank" ><FontAwesomeIcon icon={faEnvelope} style={{"color":"#f1d592"}}/> &nbsp; &nbsp;arun0211.singh@gmail.com</a></h5>
                    <h5 className="text-light fs-2 py-2"><a className="nav-link hover-text-custom-logo" rel="noopener noreferrer" href="https://www.linkedin.com/in/arun-singh-92844436b" target="_blank" ><FontAwesomeIcon icon={faLinkedin} style={{"color":"#0077B5"}}/> &nbsp; &nbsp;LinkedIn</a></h5>
                </div>
            </div>
            <div className="w-40 h-100 d-flex flex-column">
                <h3 className="text-center w-50">Send a Query </h3>
                <ContactForm />
            </div>
        </div>
    </div>
}