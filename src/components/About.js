import Roundedsvg from "@/styles/svg";
import { useEffect, useState } from "react";

export default function About({scroll,windowheight}){
    const birthDate = new Date("1998-11-02");
    const today = new Date();
    const age =
      today.getFullYear() -
      birthDate.getFullYear() -
      (today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
        ? 1
        : 0);

    return <div id="about" className="bg-dark d-flex flex-column justify-content-around align-items-center text-light position-relative w-100 vh-100 p-5">
        <div className="w-100">
            <h1 className="mt-5 p-2 text-custom-logo"> About ME !</h1>
        </div> 
        <p>I'm <span className="text fs-5 fw-semibold">ARUN SINGH </span>— a backend-focused developer skilled in <span className="text-custom-logo fw-semibold">Java, Spring Boot, and Microservices</span> architecture, with a strong emphasis on secure API development using JWT. I also work with <span className="text-custom-logo fw-semibold">React</span> for dynamic frontends and explore  <span className="text-custom-logo fw-semibold">Linux-based cybersecurity</span> techniques to strengthen system integrity. I love blending performance, security, and usability to create reliable, full-stack solutions.
        I'm constantly learning and adapting to new technologies that push the boundaries of modern development. I'm quick learner and always ready to adopt new technologies and implement them. I have hands-on experience as <span className="text-custom-logo fw-semibold">Data-Analyst</span> too.</p>
        <div className="w-100 d-flex justify-content-around align-items">
            <div className="d-flex w-25 justify-content-between align-items-center">
                <div>
                    <p className="fw-bold">Birthdate</p>
                    <p className="fw-bold">Degree</p>
                    <p className="fw-bold">Mobile No.</p>
                    <p className="fw-bold">Language</p>
                </div>
                <div>
                    <p className="fw-bold">: -</p>
                    <p className="fw-bold">: -</p>
                    <p className="fw-bold">: -</p>
                    <p className="fw-bold">: -</p>
                </div>
                <div>
                    <p className="fw-normal">Nov 02, 1998</p>
                    <p className="fw-normal">B. Tech</p>
                    <p className="fw-normal "><a className="nav-link text-custom-logo" href="tel:+918112337820" target="_blank" rel="noopener noreferrer">+91-8112337820</a></p>
                    <p className="fw-normal">English, Hindi</p>
                </div>
            </div>
            <div className="d-flex w-25 justify-content-between align-items-center">
                <div>
                    <p className="fw-bold">Age</p>
                    <p className="fw-bold">Total Exp.</p>
                    <p className="fw-bold">E-mail</p>
                    <p className="fw-bold">Location</p>
                </div>
                <div>
                    <p className="fw-bold">: -</p>
                    <p className="fw-bold">: -</p>
                    <p className="fw-bold">: -</p>
                    <p className="fw-bold">: -</p>
                </div>
                <div>
                    <p className="fw-normal">{age}</p>
                    <p className="fw-normal">4 years </p>
                    <p className="fw-normal "><a className="text-custom-logo nav-link" href="mailto:arunsin0211@gmail.com" target="_blank" rel="noopener noreferrer">arun0211.singh@gmail.com</a></p>
                    <p className="fw-normal">Noida, Uttar Pradesh</p>
                </div>
            </div>
        </div>
        <div className="w-100">
            <h3 className="mt-4 text-custom-logo">Passport Details !!</h3>
            <div className="w-100 d-flex justify-content-around align-items">
            <p>
                <span className="fw-bold">Paasport No.</span>
                <span className="fw-bold">&nbsp;:-</span>
                <span className="fw-normal">&nbsp;C7235096</span>
            </p>
            <p>
                <span className="fw-bold">Issue Date</span>
                <span className="fw-bold">&nbsp;:-</span>
                <span className="fw-normal">&nbsp;Feb 18, 2025</span>
            </p>
            <p>
                <span className="fw-bold">Expiry Date</span>
                <span className="fw-bold">&nbsp;:-</span>
                <span className="fw-normal">&nbsp;Feb 17, 2035</span>
            </p>
            </div>
        </div>
        <p>&nbsp;</p>
        {scroll > 1.15*windowheight && scroll< 2.5*windowheight ? <div style={{"transition":"0s"}} className="z-1 w-100 fs-3 position-absolute svg-custom-position fw-semibold text-custom-logo d-flex flex-row justify-content-around align-items-center">
            <Roundedsvg text1={"Nationality"} text2={"INDIAN"} color1={"#fff"} color2={"#000"}/>
            <Roundedsvg text1={"Resides In"} text2={"Noida, UP"} color1={"#fff"} color2={"#000"}/>
            <Roundedsvg text1={"SSC"} text2={"9.6 CGPA"} color1={"#fff"} color2={"#000"}/>
            <Roundedsvg text1={"HSC"} text2={"73.2%"} color1={"#fff"} color2={"#000"}/>
        </div> : ""}
    </div>
}