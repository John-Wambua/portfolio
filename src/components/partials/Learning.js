import React from "react"


const Learning = ()=>{
    return(
        <div className="section skills" id="section-skills-know">
            <div className="content">

                {/*-- title -->*/}
                <div className="title">
                    <div className="title_inner">Currently Exploring</div>
                </div>

                {/*-- skills -->*/}
                <div className="skills list content-box">
                    <ul>
                        <li>
                            <div className="name">Microservices with Docker</div>
                        </li>
                        <li>
                            <div className="name">Container Orchestration with Kubernates</div>
                        </li>
                        <li>
                            <div className="name">Spring boot</div>
                        </li>
                        <li>
                            <div className="name">Server Administration</div>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    )
}
export default Learning