import React from "react"

const AboutMe = ()=>{
    return(
        <div className="section about" id="section-about">
            <div className="content content-box">

                {/*-- image -->*/}
                <div className="image">
                    <img src="/assets/images/john.JPG" alt="Desmond Nyamador" style={{borderRadius: '50%'}}/>
                </div>

                {/*-- desc -->*/}
                <div className="desc">
                    <p>Hello! I’m John Eudes Wambua! Explore some of my projects and view my skill set.</p>
                    <div className="info-list">
                        <ul>
                            <li><strong>Age:</strong> 20</li>
                            <li><strong>Hiring:</strong> Available</li>
                            <li><strong>Address:</strong> Nairobi, Kenya</li>
                            <li><strong>Phone:</strong> +254 70266 3063</li>
                            <li><strong>E-mail:</strong> jwambua307@gmail.com</li>
                        </ul>
                    </div>
                    {/*-- <div class="bts">*/}
                    {/*    <a href="#" class="btn hover-animated">*/}
                    {/*        <span class="circle"></span>*/}
                    {/*        <span class="lnk">Download CV</span>*/}
                    {/*    </a>*/}
                    {/*</div> -->*/}
                </div>

                <div className="clear"></div>
            </div>
        </div>
    )
}
export default AboutMe