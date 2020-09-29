import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-projects" data-section="projects">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Projects</span>
                                <h2 className="colorlib-heading animate-box">Projects</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-2">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Animal Shelter Application <span>Apex, JavaScript, React, SOQL</span></h2>
                                                <ul>
                                                    <li>Implemented an animal shelter locator to dynamically display available animals for adoption using JavaScript on the client-side to improve client interaction</li>
                                                    <li>Created a custom, interactive page that displayed clients' addresses using Google Maps API to provide better visualization for shelter employees</li>
                                                    <li>Integrated an external, custom web-to-lead page into the Salesforce database using React, Bootstrap, and GitHub pages for adoption application submissions</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                    <article class="timeline-entry animate-box" data-animate-effect="fadeInRight">
                                        <div class="timeline-entry-inner">
                                            <div class="timeline-icon color-3">
                                                <i class="icon-pen2"></i>
                                            </div>
                                            <div class="timeline-label">
                                            <h2>Flashcard Application <span>JavaScript, HTML, CSS, SQLite3</span></h2>
                                                <ul>
                                                    <li>Programmed with React for a user-friendly interface that translates English input into Chinese 
                                                    through the Google Translate API and returned the translation in JSON</li>
                                                    <li>Initialized a database that stored these translations onto flashcards when the user clicks the “Save” button and taught server to respond to AJAX queries</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>

                                    <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div class="timeline-entry-inner">
                                            <div class="timeline-icon color-4">
                                                <i class="icon-pen2"></i>
                                            </div>
                                            <div class="timeline-label">
                                            <h2>User-Level Thread Library <span>C</span></h2>
                                                <ul>
                                                    <li>Built a multi-threaded application that implemented a semaphore for efficient thread synchronization</li>
                                                    <li>Ensured mutual exclusion by incorporating critical sections and a queue to track resources</li>
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