import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="experience">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Experience</span>
                            <h2 className="colorlib-heading animate-box">Work Experience</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-1">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Software Developer Intern <span>February 2020 - September 2020</span></h2>
                                                <ul>
                                                    <li>Translated project requirements into technical details 
                                                        and developed a custom search engine to filter a list of products to match client requests with the product inventory</li>
                                                    <li>Developed CRM database solutions and deployed unit tests to optimize project requirements</li>
                                                    <li>Integrated third-party tools with REST API and triggers to automate business processes</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                    
                                    <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                                    <div className="timeline-entry-inner">
                                        <div className="timeline-icon color-none">
                                        </div>
                                    </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}