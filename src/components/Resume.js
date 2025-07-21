import Roundedsvg from "@/styles/svg";


export default function Resume({scroll,windowheight}){
    return <div id="resume" className="w-100 bg-light vh-100 p-5 d-flex position-relative flex-column justify-content-evenly align-items-center">
        <div className="w-100"> <h1 className="mt-5 p-2 text-custom-logo"> My Journey !</h1></div>
        <div className="w-100 d-flex flex-row justify-content-around align-items-center">
            <div className="w-40 border-left-custom shadow rounded-3">
                <h2> Education :</h2> 
                <p className="m-0 p-0">&nbsp;</p>
                <div className="d-flex position-relative">
                    <div className="position-absolute bg-light rounded-circle shadow custom-bullet-circle border-custom shadow-lg"></div>
                    <div className="ms-4 pt-1 ">
                        <h5 className="text-custom-logo fw-semibold m-0 p-0">B. Tech (Mechanical Engineering)</h5> 
                        <p className="text-custom-logo m-0 p-0 fw-semibold">University :- VBS Purvanchal University, Jaunpur</p>
                        <p className="text-custom-logo fw-normal m-0">Period :- 2016 - 2020</p>
                    </div>
                </div>
                <div className="d-flex mt-3 position-relative">
                    <div className="position-absolute bg-light rounded-circle shadow custom-bullet-circle border-custom shadow-lg"></div>
                    <div className="ms-4 pt-1 ">
                        <h5 className="fw-semibold m-0 p-0">HSC (12<sup>th</sup> Grade.)</h5> 
                        <p className="m-0 p-0 fw-semibold">Board :- CBSE Board, Delhi</p>
                        <p className="fw-normal m-0">Period :- 2014 - 2016</p>
                    </div>
                </div>
                <div className="d-flex mt-3 position-relative">
                    <div className="position-absolute bg-light rounded-circle shadow custom-bullet-circle border-custom shadow-lg"></div>
                    <div className="ms-4 pt-1 ">
                        <h5 className="text-custom-logo fw-semibold m-0 p-0">SSC (10<sup>th</sup> Grade.)</h5> 
                        <p className="text-custom-logo m-0 p-0 fw-semibold">Board :- CBSE Board, Delhi</p>
                        <p className="text-custom-logo fw-normal m-0">Period :- 2012 - 2014</p>
                    </div>
                </div>
                <p>&nbsp;</p>
            </div>
            <div className="w-40 border-left-custom shadow rounded-3">
                <h2> Experience :</h2> 
                <p className="m-0 p-099">&nbsp;</p>
                <div className="d-flex position-relative">
                    <div className="position-absolute bg-light rounded-circle shadow custom-bullet-circle border-custom shadow-lg"></div>
                    <div className="ms-4 pt-1 ">
                        <h5 className=" m-0 p-0 fw-semibold">Software Developer</h5> 
                        <p className="fw-semibold m-0 p-0">Company :- Trends Infonet Pvt. Ltd.</p>
                        <p className="fw-normal m-0">Period :- Nov, 2024 - July, 2025</p>
                    </div>
                </div>
                <div className="d-flex mt-3 position-relative">
                    <div className="position-absolute bg-light rounded-circle shadow custom-bullet-circle border-custom shadow-lg"></div>
                    <div className="ms-4 pt-1 ">
                        <h5 className="text-custom-logo fw-semibold m-0 p-0">Team Lead</h5> 
                        <p className="text-custom-logo m-0 p-0 fw-semibold">Delhivery Pvt. Ltd., Gorakhpur</p>
                        <p className="text-custom-logo fw-normal m-0">Period :- July, 2024 - Aug 2024</p>
                    </div>
                </div>
                <div className="d-flex mt-3 position-relative">
                    <div className="position-absolute bg-light rounded-circle shadow custom-bullet-circle border-custom shadow-lg"></div>
                    <div className="ms-4 pt-1 ">
                        <h5 className="fw-semibold m-0 p-0">Software Developer (Java)</h5> 
                        <p className="m-0 p-0 fw-semibold">Company :- CSJ Technology Pvt. Ltd.</p>
                        <p className="fw-normal m-0">Period :- Jan, 2021&nbsp;-&nbsp;Jan, 2024  </p>
                    </div>
                </div>
                <p>&nbsp;</p>
            </div>
        </div>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        {scroll > 2.15*windowheight && scroll< 3.5*windowheight ? <div style={{"transition":"0s"}} className="z-1 w-100 fs-3 position-absolute svg-custom-position fw-semibold text-custom-logo d-flex flex-row justify-content-around align-items-center">
            <Roundedsvg text1={"B.Tech"} text2={"65%"} color1={"#000"} color2={"#fff"} />
            <Roundedsvg text1={"4 yrs"} text2={"Experience"} color1={"#000"} color2={"#fff"} />
            <Roundedsvg text1={"25+"} text2={"Projects"} color1={"#000"} color2={"#fff"} />
            <Roundedsvg text1={"40+"} text2={"Techniques"} color1={"#000"} color2={"#fff"} />
        </div> : ""}
    </div>
}