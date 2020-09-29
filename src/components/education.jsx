import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-education" data-section="education">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Education</span>
                                <h2 className="colorlib-heading animate-box">University of California, Davis <span> 2017 - 2019</span></h2>
                                    <div className="about-desc">
                                        <p>Bachelor of Science in Computer Science</p>
                                    </div>                                                                                             
                            </div>
                        </div>




                        {/* <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                            <div className="col-md-12">
                                <div className="about-desc">
                                    <span className="heading-meta">About Me</span>
                                    <h2 className="colorlib-heading">Who Am I?</h2>
                                    <p><strong>Hi, I'm Sally! </strong> I am a recent computer science graduate from UC Davis based in the San Francisco Bay Area. 
                                    I've worked with a variety of technologies and frameworks including but not limited to Java, JavaScript, HTML/CSS, React JS, and Salesforce.
                                    I love learning and developing new technologies, finding solutions to difficult problems, and continuously improving my programming skills.</p>
                                    <p> In my spare time, I like to find new projects to work on, watch Shark Tank, and play Call of Duty.</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>
            </div>
        )
    }
}