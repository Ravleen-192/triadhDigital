import React, { Component } from 'react';

import '../css/App.css'
import Capabilities from "./Capabilities";
import Plutusimg from '../image/Plutusimg1.jpg';
import ServOverview from '../image/ServiceOverview.png';
import { Helmet } from "react-helmet";
var mContext;


export default class Plutus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped1: false,
            isFlipped2: false,
            isFlipped3: false,
            isShow: true,
        };
        mContext = this;
    }
    componentWillMount() {
        window.scrollTo(0, 50);
    }

    handleClick(e, type) {
        e.preventDefault();
        switch (type) {
            case "first":
                mContext.setState(prevState => ({ isFlipped1: !prevState.isFlipped1, isFlipped2: false, isFlipped3: false }));
                break;
            case "second":
                mContext.setState(prevState => ({ isFlipped1: false, isFlipped2: !prevState.isFlipped2, isFlipped3: false }));
                break;
            case "third":
                mContext.setState(prevState => ({ isFlipped1: false, isFlipped2: false, isFlipped3: !prevState.isFlipped3 }));
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <div className="container-fluid ">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>AI, ML, Deep Learning Turn-key and Tailor-made Solutions and Plutus</title>
                    <meta name="description" content="AI, ML, Deep Learning, ComputerVision, Pose, Facial, Object, Speech-to-text, text-to-speech, AWS SageMaker Plutus" />
                    {/* <link rel="canonical" href="" /> */}
                </Helmet>

                <div className=" row container-fluid " md="12" sm="12" xs="12" lg="12" xl="12">
                    <div className="td__header mb_20" >
                        <div className=" td__header-content" md="6" sm="6" xs="6" lg="6" xl="6">
                            <h2>Plutus</h2>
                                <p><br />Plutus is an easy to use portal <br /> that provide a single pane of glass view of your data products, <br />ability to manage them, susbcribe to platform services and govern them. ???</p>
                        </div>

                        <div className="td__header-image mb_20 " md="6" sm="6" xs="6" lg="6" xl="6">
                            <img src={Plutusimg} />
                        </div>
                    </div>
                </div>
                <div className=" row container-fluid " md="12" sm="12" xs="12" lg="12" xl="12">
                    <div className="td__header mb_20" >
                        <div className=" td__header-content" md="6" sm="6" xs="6" lg="6" xl="6">
                        <h2>Overview</h2>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br /> quis nostrud exercitation ullamco laboris<br /> nisi ut aliquip ex ea commodo consequat.
                                <br /> Duis aute irure dolor in reprehenderit in<br /> voluptate velit esse <br />cillum dolore eu fugiat nulla pariatur.<br /> Excepteur sint occaecat cupidatat non proident, sunt in <br />culpa qui officia deserunt mollit anim id est laborum.  ???</p>

                        </div>

                        <div className="td__header-image mb_20 " md="6" sm="6" xs="6" lg="6" xl="6">
                            <img src={ServOverview} />
                        </div>
                    </div>
                </div>
               {/* <div className=" row container-fluid " md="12" sm="12" xs="12" lg="12" xl="12">
                    <div className="td__header mb_20" >
                        <div className=" td__header-content" md="6" sm="6" xs="6" lg="6" xl="6">
                            <div className="row">
                                <div className=" td__header-content " >

                                    <h2>Overview</h2>
                                </div>
                            </div>
                            <p className=" td__header-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br /> quis nostrud exercitation ullamco laboris<br /> nisi ut aliquip ex ea commodo consequat.
                                <br /> Duis aute irure dolor in reprehenderit in<br /> voluptate velit esse <br />cillum dolore eu fugiat nulla pariatur.<br /> Excepteur sint occaecat cupidatat non proident, sunt in <br />culpa qui officia deserunt mollit anim id est laborum.  ???</p>

                        </div>

                        <div className="td__header-image mb_20 " md="6" sm="6" xs="6" lg="6" xl="6">
                            <img src={ServOverview} />
                        </div>
                    </div>
        </div>*/}

                <Capabilities />
            </div>
        );
    }
}
