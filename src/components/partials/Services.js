import React from "react"
import Service from "./Service";

const Services = ()=>{
    return(
        <div className="section service" id="section-services">
            <div className="content">

                {/*- title -->*/}
                <div className="title">
                    <div className="title_inner">Services</div>
                </div>

                {/*- service items -->*/}
                <div className="service-items">

                    <Service icon={"fas fa-code"}
                        name={"Web Development"}
                        text={"Modern and responsive websites that will help you reach all of your customers."}
                    />
                    <Service icon={"fab fa-microsoft"}
                        name={"Microsoft Azure Platform"}
                        text={"Development of modern and highly available cloud infrastructure with Microsoft Azure"}
                    />
                    <Service icon={"fab fa-node"}
                        name={"Backend"}
                        text={"Scalable and secure Backend applications with Node.js"}
                    />
                    <Service icon={"fab fa-react"}
                        name={"React"}
                        text={"Single Page Applications with React"}
                    />
                    <Service icon={"fas fa-database"}
                        name={"MongoDB"}
                        text={"Storage services and statistics with MongoDB"}
                    />
                    <Service icon={"fas fa-mobile"}
                        name={"Mobile Applications Development"}
                        text={"Mobile applications for both android and ios devices for easy access by your clients"}
                    />
                </div>

                <div className="clear"></div>
            </div>
        </div>
    )
}
export default Services