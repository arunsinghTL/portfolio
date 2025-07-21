import { faHackerNews, faJava, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faComputer, faDatabase, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Skill from "./Skills";

export default function Projects(){
    const skills = ["Java","React","ExpressJS","Data Analysis","Cyber Security"];
    const skilllogo=[faJava,faReact,faJs,faDatabase,faLaptopCode];
    const logocolor = ["#f89820","#61DBFB","#F0DB4F","#F29111","#00FF00"];
    const [currSkillindex,setCurrSkillindex] = useState(0);
    const projects = [{
        /* Java */
        "Projects": [{
            "title": "Credit-Score Analysis",
            "Description": [
                "Developed backend logic to evaluate creditworthiness.",
                "Integrated external APIs for credit data.",
                "Ensured high accuracy through JUnit testing."
            ],
            "Tools": ["Java", "Spring Boot", "Kafka"],
            "url": ""
        }, {
            "title": "HR Management System",
            "Description": [
                "Built core modules onboarding, payroll, tracking.",
                "Designed secure REST APIs and integrated it.",
                "Implemented role-based access control using Spring Security."
            ],
            "Tools": ["OAuth", "Hibernate", "MySQL"],
            "url": ""
        }, {
            "title": "Micro-Blogging Platform",
            "Description": [
                "Engineered a Twitter-like blog system.",
                "Used Java, Spring Boot, and WebSocket for real-time notifications.",
                "Optimized performance with caching and asynchronous request handling."
            ],
            "Tools": ["Spring Boot", "WebSocket", "Redis"],
            "url": ""
        }, {
            "title": "Insurance Claims Management",
            "Description": [
                "Developed claim submission, approval, and policy management modules.",
                "Automated workflow using Spring Boot.",
                "Collaborated with QA for UAT."
            ],
            "Tools": ["Spring Boot", "JUnit", "Kafka"],
            "url": ""
        }]
    }, {
        /* React */
        "Projects": [{
            "title": "Micro-Blogging Platform",
            "Description": [
                "Developed interactive UI for posting and feed display.",
                "Used Redux for state management across components.",
                "Integrated REST APIs for dynamic content updates."
            ],
            "Tools": ["React", "Redux", "Axios"],
            "url": ""
        }, {
            "title": "My Portfolio",
            "Description": [
                "Designed a responsive personal portfolio website.",
                "Showcased skills, projects, and contact form.",
                "Deployed using GitHub Pages with custom domain."
            ],
            "Tools": ["React", "Bootstrap", "EmailJS"],
            "url": "#"
        }, {
            "title": "DevConnect - A Social Network",
            "Description": [
                "Created a LinkedIn-style platform for developers.",
                "Implemented profile, post, and comment features.",
                "Used JWT for secure login and session handling."
            ],
            "Tools": ["React", "React Router", "JWT"],
            "url": ""
        }]
    }, {
        /* ExpressJS */
        "Projects": [{
            "title": "DevConnect - A Social Network",
            "Description": [
                "Built backend APIs for user and post management.",
                "Handled authentication with JWT and bcrypt.",
                "Connected MongoDB for persistent data storage."
            ],
            "Tools": ["ExpressJS", "MongoDB", "JWT"],
            "url": ""
        }, {
            "title": "Task Manager API",
            "Description": [
                "Developed RESTful APIs for task creation and status updates.",
                "Implemented user registration and login with hashed passwords.",
                "Handled CRUD operations and error responses efficiently."
            ],
            "Tools": ["ExpressJS", "MongoDB", "Mongoose"],
            "url": ""
        }, {
            "title": "AuthAPI",
            "Description": [
                "Created authentication system with signup/login endpoints.",
                "Implemented JWT token-based security.",
                "Used validation middleware for input sanitization."
            ],
            "Tools": ["ExpressJS", "JWT", "bcrypt"],
            "url": ""
        }]
    }, {
        /* Data-Analysis */
        "Projects": [{
            "title": "Retail Sales Analysis",
            "Description": [
                "Analyzed monthly sales and seasonal trends from retail dataset.",
                "Used pandas for data manipulation and cleaning.",
                "Visualized trends with matplotlib and seaborn."
            ],
            "Tools": ["Python", "Pandas", "Seaborn"],
            "url": ""
        }, {
            "title": "HR Analytics",
            "Description": [
                "Studied employee attrition using HR dataset.",
                "Performed EDA to identify churn factors.",
                "Built logistic regression model for prediction."
            ],
            "Tools": ["Python", "Scikit-learn", "Matplotlib"],
            "url": ""
        }, {
            "title": "E-Commerce Product Analysis",
            "Description": [
                "Analyzed customer ratings, returns, and product categories.",
                "Performed segmentation and trend analysis.",
                "Generated dashboards using Power BI."
            ],
            "Tools": ["Excel", "Power BI", "Python"],
            "url": ""
        }, {
            "title": "Expense & Budget Tracking",
            "Description": [
                "Built a personal finance tracker using Python.",
                "Visualized income, expenses & savings.",
                "Exported reports to Excel and PDF format."
            ],
            "Tools": ["Python", "Matplotlib", "OpenPyXL"],
            "url": ""
        }]
    }, {
        /* Cyber-Security */
        "Projects": [{
            "title": "Basic Keylogger",
            "Description": [
                "Created a Python-based keylogger for ethical hacking training.",
                "Logged user keystrokes and exported logs.",
                "Tested in isolated VM for security."
            ],
            "Tools": ["Python", "pynput", "SMTP"],
            "url": ""
        }, {
            "title": "Port Scanner",
            "Description": [
                "Scanned open ports across IP ranges using multithreading.",
                "Provided basic banner grabbing for open services.",
                "Built CLI tool for fast and accurate results."
            ],
            "Tools": ["Python", "socket", "threading"],
            "url": ""
        }, {
            "title": "File Encryption/Decryption",
            "Description": [
                "Implemented AES encryption for secure file storage.",
                "Allowed secure decryption with passphrase.",
                "Used PyCryptoDome for cryptographic operations."
            ],
            "Tools": ["Python", "AES", "PyCryptoDome"],
            "url": ""
        }, {
            "title": "Startup Restart-loop Malware",
            "Description": [
                "Simulated malware that creates a startup script for rebooting.",
                "Used Python to create registry entries on Windows.",
                "Studied behavior in sandboxed VM."
            ],
            "Tools": ["Python", "Windows Registry", "PyInstaller"],
            "url": ""
        }]
    }];

    return <div id="projects" className=" d-flex flex-column bg-dark text-light w-100 vh-100 p-5 position-relative">
        <h1 className="pt-5 text-custom-logo"> My Projects !</h1>
        <div className="w-100 mt-3 flex-fill d-flex flex-row flex-wrap justify-content-evenly align-items-start align-content-evenly">
            {projects[currSkillindex].Projects.map((project,index)=>(<Projecttiles key={index} project={project} index={index}/>))}
        </div>
        <nav className="nav position-absolute end-0 top-50 project-nav me-3 d-flex align-items-end flex-column">
            {skills.map((skill,index)=>(<div className="mb-3 shadow skill-nav-items nav-item rounded-5 cursor-pointer text-center" key={index} onClick={()=>{setCurrSkillindex(index);}}>
                <a className={`nav-link d-flex flex-row align-content-end align-items-center`} style={{"color":logocolor[index]}}><FontAwesomeIcon icon={skilllogo[index]}/>&nbsp;&nbsp;
                <p className={`project-menu-item m-0 p-0 ${index == currSkillindex ? "active":""}`}>{skill}</p></a>
            </div>))}
        </nav>
    </div>
}

function Projecttiles({project,index}){
    return <div className="w-25 me-4 shadow-lg position-relative rounded-3 me-1 projecttile mb-4 p-1">
        <h5 className="w-100 text-center mb-4">{project.title}</h5>
        <a className="text-custom-logo position-absolute top-0 end-0 p-2 pe-1 " href={project.url}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
        {project.Description.map((pointers,index)=>(<li key={index} className="py-1">{pointers}</li>))}
        <p className={`text-custom-logo d-flex flex-row position-absolute bottom-0 ${index > 2 ? "mb-5 pb-4" : "mb-2"} justify-content-around align-items-center min-w-75`}><strong>Tools: &nbsp;&nbsp;</strong>{project.Tools.map((tool,index)=>(<span className="me-2" key={index}>{tool}</span>))}</p>
    </div>
}