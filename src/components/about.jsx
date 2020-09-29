import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Me</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p><strong>Hi, I'm Sally! </strong> I am a recent computer science graduate from UC Davis based in the San Francisco Bay Area. 
                                            I've worked with a variety of technologies and frameworks including but not limited to <strong>Java</strong>, <strong>JavaScript</strong>, <strong>HTML/CSS</strong>, <strong>React JS</strong>, and <strong>Salesforce</strong>.
                                            I love learning and developing new technologies, finding solutions to difficult problems, and continuously improving my programming skills.</p>
                                            <p> In my spare time, I like to find new projects to work on, code and listen to tropical house music, and play Call of Duty. 
                                            Due to quarantine and the extra time I had on my hands, I even qualified for COD championships but unfortunately never made it past stage 2.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                                    <div className="services color-1">
                                        <span className="icon2"><i className="icon-data" /></span>
                                        <h3>Data Structures</h3>
                                    </div>
                                    </div>
                                    <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                                    <div className="services color-2">
                                        <span className="icon2"><i className="icon-code" /></span>
                                        <h3>Web Development</h3>
                                    </div>
                                    </div>
                                    <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                                    <div className="services color-3">
                                        <span className="icon2"><i className="icon-cloud4" /></span>
                                        <h3>Salesforce</h3>
                                    </div>
                                    </div>
                                    {/* <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                                    <div className="services color-4">
                                        <span className="icon2"><i className="icon-phone3" /></span>
                                        <h3>Application</h3>
                                    </div>
                                    </div> */}
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}