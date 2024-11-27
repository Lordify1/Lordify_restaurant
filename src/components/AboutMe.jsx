import React from "react";
import Offcanvas from "./OffCanvas";


export default function AboutMe()
{

    return(
        <Offcanvas
        id="AboutMeOffCanvas"
        title={"About Lordify"}
        content={
            <>
            <div className="h-100 row d-flex align-items-center justify-content-center">
                <div>
                <section className="text-center">
                <p>About Me</p>
                </section>
                <section className="text-center">
                <p>Hello,
I'm Owoeye Joshua Pelumi, a dedicated software developer with a diverse skill set. With a specialization in web application development, I possess a strong proficiency in designing and creating dynamic and interactive web-based solutions. Utilizing my broad knowledge and technical expertise, I am able to effectively handle various aspects of software development beyond web app development.
Throughout my career, I have consistently demonstrated a strong work ethic, attention to detail, and the ability to work both independently and collaboratively within a team. My passion for software development drives me to continually learn and adapt to emerging technologies and industry trends.
If you're looking for a dedicated and versatile software developer who can tackle web app development and more, I am confident that my skills and expertise will be an asset to any project or organization. Let's connect and discuss how we can collaborate to bring your ideas to life.</p>
                </section>
                </div>
            </div>
            </>
        }
        />
    )

}