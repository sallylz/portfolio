import React, { Component } from 'react'

export default class Certifications extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-certifications" data-section="certifications">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Certifications</span>
                                <h2 className="colorlib-heading animate-box">Certifications</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                <div className="fancy-collapse-panel">
                                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingOne">
                                                <h4 className="panel-title">
                                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Salesforce Certified Administrator
                                                    </a>
                                                </h4>
                                                </div>
                                                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                                <div className="panel-body">
                                                    <p>Issued <strong>March 2020</strong> </p>
                                                    <p>Credential ID: 21002858</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingTwo">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Salesforce Certified Platform App Builder
                                                    </a>
                                                </h4>
                                                </div>
                                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                <div className="panel-body">
                                                    <p>Issued <strong>April 2020</strong> </p>
                                                    <p>Credential ID: 21110806</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingThree">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Salesforce Certified Platform Developer I
                                                    </a>
                                                </h4>
                                                </div>
                                                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                                <div className="panel-body">
                                                    <p>Issued <strong>May 2020</strong> </p>
                                                    <p>Credential ID: 21209106</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingFour">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Salesforce Certified Platform Developer II
                                                    </a>
                                                </h4>
                                                </div>
                                                <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                                <div className="panel-body">
                                                    <p>Issued <strong>August 2020</strong> </p>
                                                    <p>Credential ID: 21442793</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}