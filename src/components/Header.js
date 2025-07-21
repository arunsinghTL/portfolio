import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faWhatsapp, faTelegram, faGithub } from "@fortawesome/free-brands-svg-icons";
export default function Header(){
    const [scroll,setScroll]=useState(0);
    const [windowheight,setWindowHeight] = useState(window.innerHeight);
    const menus = ["Home", "About", "Resume", "Projects", "Skills", "Contact_ME"];
    useEffect(()=>{
        if(typeof window == "undefined"){
          return null;
        }
        setWindowHeight(window.innerHeight);
        const updateScroll = () => {
          setScroll(window.scrollY);
        }
        window.addEventListener("scroll",updateScroll);
        return ()=> window.removeEventListener("scroll",updateScroll);
    },[])
    return <><header className={`z-3 d-flex py-2 w-100 flex-row justify-content-between align-items-end ${scroll > 200  ? "bg-dark shadow-lg text-custom-logo" :"bg-transparent "} position-fixed top-0 start-0`}>
        <Image alt="ArunSingh" src="/logo.png" width={180} height={65} className="ms-3" priority />
        <nav className="me-5 fs-5">
        <ul className="nav me-4">
          {menus.map((menu,index)=> {
            const secStart = windowheight * index;
            const secEnd = windowheight * (index + 1);
            const isactive = scroll >= secStart && scroll < secEnd;
            return  <li key={index} className="nav-item mx-2 pe-2 d-flex flex-column align-items-center">
              <a className={`nav-link px-2 pb-0 text-custom-logo ${isactive ? 'active':""}`} href={`#${menu.toLowerCase()}`}>{menu}</a>
              <div className={`nav-menu ${isactive ? "w-100" : "w-0"}`}></div>
          </li>})}
        </ul>
      </nav>
    </header>
            <footer className={` ${scroll > 100  ? "z-3 bg-dark shadow-lg text-custom-logo" : "bg-transparent "} position-fixed d-flex flex-row bottom-0 p-2 w-100 left-0 ps-5`}>
            <a href='https://t.me/erarunjava' rel="noopener noreferrer" className="ms-5" target='_blank'><FontAwesomeIcon icon={faTelegram} className='rounded-circle text-custom-logo fs-3 me-3 p-2 border-custom' /></a>
            <a href='https://wa.me/+918112337820' rel="noopener noreferrer" target='_blank'><FontAwesomeIcon icon={faWhatsapp} className='rounded-circle text-custom-logo fs-3 me-3 p-2 border-custom' /></a>
            <a href='https://www.linkedin.com/in/arun-singh-92844436b' rel="noopener noreferrer" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} className='rounded-circle text-custom-logo fs-3 me-3 p-2 border-custom' /></a>
            <a href='https://github.com/arunsinghTL' rel="noopener noreferrer" target='_blank'><FontAwesomeIcon icon={faGithub} className='rounded-circle text-custom-logo fs-3 me-3 p-2 border-custom' /></a>       
        </footer></>
}