
import { useEffect, useState } from "react";
import About from "./About";
import Headers from "./Header";
import HomeP from "./HomeP";
import Projects from "./Projects";
import Resume from "./Resume";
import Skill from "./Skills";
import Contact from "./Contact";


export default function MainP(){
    const [scroll,setScroll]=useState(0);
    const [windowheight,setwindowheight] = useState(window.innerHeight);
    useEffect(()=>{
        if(typeof window == "undefined"){
          return null;
        }
        const updateScroll = () => {
          setScroll(window.scrollY);
        }
        window.addEventListener("scroll",updateScroll);
        return ()=> window.removeEventListener("scroll",updateScroll);
    },[])
    return <>
        <div className=" m-0 p-0 w-100 vh-100">
            <Headers />
            <HomeP />
            <About scroll={scroll} windowheight={windowheight}/>
            <Resume scroll={scroll} windowheight={windowheight}/>
            <Projects />
            <Skill />
            <Contact />
        </div>
    </>;
}