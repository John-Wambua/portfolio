import React from "react"
import {Flip} from "react-reveal"

const Item = props=>{
    return(
        <Flip top>
            <div className={`resume-item content-box ${props.type}`}>
                <div className="date">{props.date}</div>
                <div className="name">{props.name}</div>
                <div className="text">{props.text}
                </div>
            </div>
        </Flip>
    )
}
Item.defaultProps={
    type: ""
}
export default Item