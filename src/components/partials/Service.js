import React from "react"
import {Fade} from "react-reveal";

const Service = props=>{
    return (
        <Fade top>
        <div className="service-col">
            <div style={{height: '250px'}} className="service-item content-box">
                <div className="icon"><span className={props.icon}></span></div>
                <div className="name">{props.name}</div>
                <div className="text">{props.text}</div>
            </div>
        </div>
        </Fade>
    )
}
export default Service