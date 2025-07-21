import SkillSvg from "@/styles/SkillSvg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Projects from "./Projects";
import { faJava,faReact,faJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faGears, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

export default function Skill(){
    const skills = ["Java","React","ExpressJS","Data Analysis","Cyber Security","Mechanical"];
        const skilllogo=[faJava,faReact,faJs,faDatabase,faLaptopCode,faGears];
        const logocolor = ["#f89820","#61DBFB","#F0DB4F","#F29111","#00FF00"];
    const [currSkillindex,setCurrSkillindex] = useState(0);

    const skill = [{
        // Java
        "Skills":["Spring Boot","Micro Services","JSON_Web Token","OAuth   ","Hibernate  ","Resful API"],
    },{
        // React
        "Skills":["State Management","Prop Management","Axios  ","HTML ","SCSS "],
    },{
        // ExpressJS
        "Skills":["Rest API","Schema ","logger ","JWT  ","Role Management ","API Integration"],
    },{
        // Data-Analysis
        "Skills":["MySQL ","PowerBI ","Excel ","Numpy","Panda "],
    },{
        // Cyber-Security
        "Skills":["Port Scanning","Networking ","Social Engineering","MetaSploit "],
    },{
        // Mechanical
        "Skills":["IBR PIPING","Non-IBR PIPING","DP Testing","Radiography Testing","Project Planning","Isometric Designs"],
    }];
    return <div id="skills" className="bg-light text-light w-100 vh-100 p-5 position-relative">
        <h1 className="text-custom-logo pt-5">My Skills</h1>
        <nav className="nav position-absolute end-0 top-50 project-nav me-3 d-flex align-items-center flex-column">
            {skills.map((skill,index)=>(<div className="mb-3 shadow bg-white skill-nav-items nav-item rounded-5 cursor-pointer text-center" key={index} onClick={()=>{setCurrSkillindex(index);}}>
                <a className={`${index==currSkillindex ? "text-custom-logo" : "text-dark"} nav-link`}><FontAwesomeIcon icon={skilllogo[index]} style={{"color":logocolor[index]}}/>&nbsp;&nbsp;{skill}</a>
            </div>))}
        </nav>
        <div className="w-100 mt-3 d-flex flex-row flex-wrap justify-content-evenly align-items-center">
            {skill[currSkillindex].Skills.map((skill,index)=>{return (<Skilltiles key={index} skill={skill}/>);})}
        </div>
    </div>
}
export function Skilltiles({skill}){
    return <div className="me-5 pe-5 mt-5">
        <SkillSvg text={skill} />
    </div>
}