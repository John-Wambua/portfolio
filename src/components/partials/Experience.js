import React from "react"

const Experience = ()=>{
    return (
        <div className="col col-md">

            {/*- title -->*/}
            <div className="title">
                <div className="title_inner">Experience</div>
            </div>

            {/*- resume items -->*/}
            <div className="resume-items">

                <div className="resume-item content-box active">
                    <div className="date">2020 - Present</div>
                    <div className="name">Executive - Django Africa.</div>
                    <div className="text">Helping with the growth of the Django/Python community in
                        Africa.
                    </div>
                </div>

                <div className="resume-item content-box">
                    <div className="date">2020 - Present</div>
                    <div className="name">Github Student Developer</div>
                    <div className="text"></div>
                </div>

                <div className="resume-item content-box">
                    <div className="date">Jan 2020 - Present</div>
                    <div className="name">Pluralsight Author</div>
                    <div className="text"></div>
                </div>

            </div>

        </div>
    )
}
export default Experience