import React from "react"
import AboutMe from "./partials/AboutMe";
import Services from "./partials/Services";
import Experience from "./partials/Experience";
import Education from "./partials/Education";
import Skills from "./partials/Skills";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Learning from "./partials/Learning";
import ProjectsLanding from "./partials/ProjectsLanding";


const Projects = ()=>{
    return(
        <div>
        <Header/>
        <div className="wrapper">

            <ProjectsLanding/>
            <AboutMe/>
            <Services/>

            {/*- Section Resume -->*/}
            <div className="section resume" id="section-history">
                <div className="content">
                    <div className="cols">
                        <Experience/>
                        <Education/>
                    </div>
                </div>
            </div>
            <Skills/>
            <Learning/>
        </div>
            <Footer/>
        </div>
    )
}
export default Projects