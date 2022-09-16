import React, { Component } from 'react'

export default class Capabilities extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <div className=" row container-fluid " md="12" sm="12" xs="12" lg="12" xl="12">
                    <div className="td__header mb_20" >
                        <div className=" td__header-content" md="6" sm="6" xs="6" lg="6" xl="6">
                            <h2>Capabilities</h2>
                        </div>
                    </div>
                </div>

                <div>
                    
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i class="fa fa-lightbulb-o"  aria-hidden="true"></i>
                                    </span>
                                    <div className="desc">
                                        <h3>Data product publish & consume </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco <br />laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i class="fa fa-desktop"  aria-hidden="true"></i>
                                    </span>
                                    <div className="desc">
                                        <h3>Platform Services</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco <br />laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i class="fa fa-superpowers"  aria-hidden="true"></i>
                                    </span>
                                    <div className="desc">
                                        <h3>Governance</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco <br />laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}