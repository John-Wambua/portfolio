import React from "react"
import Item from "./Item";

const Education = ()=>{
    return(
        <div className="col col-md">

            {/*- title -->*/}
            <div className="title">
                <div className="title_inner">Education</div>
            </div>

            {/*- resume items -->*/}
            <div className="resume-items">

                <Item
                    date={"2018 - present"}
                    name={"Strathmore University"}
                    text={"Bachelor of Science in Informatics and Computer Science."}
                />
                <Item
                    date={"2014 - 2017"}
                    name={"Strathmore School"}
                    text={"High School Education"}
                />

            </div>
        </div>
    )
}
export default Education