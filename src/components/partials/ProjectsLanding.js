import React from "react"
import {Link} from "react-router-dom";
import {Fade} from 'react-reveal'

const ProjectsLanding = ()=>{
    return(
        <div className="section started section-title" id="section-started">

            {/*-- background -->*/}
            <div className="video-bg">
                <div className="video-bg-mask"></div>
                <div className="video-bg-texture" id="grained_container"></div>
            </div>

            {/*-- started content -->*/}
            <Fade left>
             <div className="centrize full-width">
                <div className="vertical-center">
                    <div className="started-content">
                        <h1 className="h-title">Resume</h1>
                        <div className="h-subtitles">
                            <div className="h-subtitle typing-bread">
                                <p className="breadcrumbs">
                                    <Link to="/">Home</Link> / Resume
                                </p>
                            </div>
                            <span className="typed-bread"></span>
                        </div>
                    </div>
                </div>
            </div>
            </Fade>

        </div>
    )
}
export default ProjectsLanding