import React, {useState, useEffect} from "react"
import {Reveal, Slide} from 'react-reveal';

const Landing = ()=>{
    const subTitles = [
        <p>I'm a <strong>Python + Django Developer</strong></p>,
        <p>I develop <strong>Javascript + React Apps</strong></p>,
        <p>I'm Learning <strong>Distributed Systems</strong></p>,
        <p>I Love <strong>Microservices</strong></p>
    ]

    const [subTitle, setSubTitle] = useState(subTitles[1])

    useEffect(() => {
        const interval = setInterval(() => {
            setSubTitle(subTitles[0])

        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const renderSubTitles = ()=>{
        // // const el = [0,1,2,3]
        // // setInterval(()=>{
        // // })
        // // for (let num=0;num<subTitles.length;num++){
        // // 	setSubTitle(subTitles[num])
        // // 	if (num==subTitles.length-1) num=0
        // // }
        //
        // let num = 0
        // while(num<subTitles.length){
        // 	setSubTitle(subTitles[num])
        //
        // 	if (num === subTitles.length) num = 0
        // 	num++
        // }

    }

    return(
        <div className="wrapper">

            {/*Section Started -->*/}
            <div className="section started layout-creative" id="section-started">

                {/*background -->*/}
                <div className="video-bg">
                    <div className="video-bg-mask"></div>
                    <div className="video-bg-texture" id="grained_container"></div>
                </div>

                {/*started content -->*/}
                <div className="centrize full-width">
                    <div className="vertical-center">
                        <div className="started-content">
                            <Reveal effect="fadeInUp">
                                <h1 className="h-title" >
                                    Hello, I’m <strong style={{color: '#f05454'}}>John Wambua</strong>,
                                    <br/> I'm a Fullstack Developer and Mobile Applications Developer
                                </h1>
                            </Reveal>
                            {/*<div className="h-subtitles">*/}
                            {/*	<div className="h-subtitle typing-subtitle">*/}
                            {/*		<p>I'm a <strong>Python + Django Developer</strong></p>*/}
                            {/*		<p>I develop <strong>Javascript + React Apps</strong></p>*/}
                            {/*		<p>I'm Learning <strong>Distributed Systems</strong></p>*/}
                            {/*		<p>I Love <strong>Microservices</strong></p>*/}
                            {/*	</div>*/}
                            <Slide left>
                                <span className="typed-subtitle">{subTitle}</span>
                            </Slide>
                            {/*</div>*/}
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
export default Landing