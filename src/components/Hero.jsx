import React from "react";
import './files';
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Experiences from "./Experiences";
import Education from "./Education";
import Skills from "./Skills";
import ContactMe from "./ContactMe";
import Pricing from "./Pricing";
import bioImg from '../images/biobg.png';


export default function Hero()
{
    return(
        <>
        <div className="container-fluid d-flex align-items-center justify-content-center" style={{height: "90vh"}}>
                <section  className="lordSection col d-flex align-items-center justify-content-center" style={{height: "70vh"}}>
                    <img src={bioImg} className="img-fluid bi bi-emoji-smile fs-1 p-3 border border-2 shadow-lg rounded p-0 animate__animated animate__pulse animate__infinite animate__slower lordw13"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#AboutMeOffCanvas"
                    aria-controls="AboutMeOffCanvas"
                    title="About Me"
                    alt=""/>
                </section>

                <section  className="lordSection col d-flex align-items-center justify-content-center" style={{height: "70vh"}}>
                    <img src={bioImg} className="img-fluid bi bi-emoji-smile fs-1 p-3 border border-2 shadow-lg rounded p-0 animate__animated animate__pulse animate__infinite animate__slower lordw13"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#AboutMeOffCanvas"
                    aria-controls="AboutMeOffCanvas"
                    title="About Me"
                    alt=""/>
                </section>

                <section  className="lordSection col d-flex align-items-center justify-content-center" style={{height: "70vh"}}>
                    <img src={bioImg} className="img-fluid bi bi-emoji-smile fs-1 p-3 border border-2 shadow-lg rounded p-0 animate__animated animate__pulse animate__infinite animate__slower lordw13"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#AboutMeOffCanvas"
                    aria-controls="AboutMeOffCanvas"
                    title="About Me"
                    alt=""/>
                </section>

                <section  className="lordSection col d-flex align-items-center justify-content-center" style={{height: "70vh"}}>
                    <img src={bioImg} className="img-fluid bi bi-emoji-smile fs-1 p-3 border border-2 shadow-lg rounded p-0 animate__animated animate__pulse animate__infinite animate__slower lordw13"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#AboutMeOffCanvas"
                    aria-controls="AboutMeOffCanvas"
                    title="About Me"
                    alt=""/>
                </section>

                <section  className="lordSection col d-flex align-items-center justify-content-center" style={{height: "70vh"}}>
                    <img src={bioImg} className="img-fluid bi bi-emoji-smile fs-1 p-3 border border-2 shadow-lg rounded p-0 animate__animated animate__pulse animate__infinite animate__slower lordw13"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#AboutMeOffCanvas"
                    aria-controls="AboutMeOffCanvas"
                    title="About Me"
                    alt=""/>
                </section>

                <section  className="lordSection col d-flex align-items-center justify-content-center" style={{height: "70vh"}}>
                    <img src={bioImg} className="img-fluid bi bi-emoji-smile fs-1 p-3 border border-2 shadow-lg rounded p-0 animate__animated animate__pulse animate__infinite animate__slower lordw13"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#AboutMeOffCanvas"
                    aria-controls="AboutMeOffCanvas"
                    title="About Me"
                    alt=""/>
                </section>

                <section  className="lordSection col d-flex align-items-center justify-content-center" style={{height: "70vh"}}>
                    <img src={bioImg} className="img-fluid bi bi-emoji-smile fs-1 p-3 border border-2 shadow-lg rounded p-0 animate__animated animate__pulse animate__infinite animate__slower lordw13"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#AboutMeOffCanvas"
                    aria-controls="AboutMeOffCanvas"
                    title="About Me"
                    alt=""/>
                </section>
        </div>
        {/* <Projects/>
        <AboutMe/>
        <ContactMe/>
        <Experiences/>
        <Pricing/>
        <Skills/>
        <Education/> */}
        </>
    )

}