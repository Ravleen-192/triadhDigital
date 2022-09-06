import React, { Component } from 'react';
import { Col, } from 'reactstrap';

import '../css/App.css'
import Theiaimg from '../image/Theiaimg.jpg';
import ServOverview from '../image/ServiceOverview.png';
import ReactCardFlip from 'react-card-flip';
import { Helmet } from "react-helmet";
var mContext;


export default class Theia extends Component {
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
        window.scrollTo(0, 0);
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
            <div className="container-fluid text-center">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>AI, ML, Deep Learning Turn-key and Tailor-made Solutions and Theia</title>
                    <meta name="description" content="AI, ML, Deep Learning, ComputerVision, Pose, Facial, Object, Speech-to-text, text-to-speech, AWS SageMaker Theia" />
                    {/* <link rel="canonical" href="" /> */}
                </Helmet>
                
                <div className=" row container-fuild mt_2 mb_2" md="12" sm="12" xs="12" lg="12" xl="12">
                    <div className="td__header mb_20" >
                        <div className=" td__header-content" md="6" sm="6" xs="6" lg="6" xl="6">
                            <p className=" td__header-content">DEEP LEARNING.
                            Theia is an easy to use portal that provide a single pane of glass view of your data products, ability to manage them, susbcribe to platform services and govern them. ​</p>
                        </div>

                        <div className="td__header-image" md="6" sm="6" xs="6" lg="6" xl="6">
                            <img src={Theiaimg} />
                        </div>
                    </div>
                    <div className=" td__header-content" md="6" sm="6" xs="6" lg="6" xl="6">
                            <h3 className=" td__header-content">Overview </h3>
                            <p className=" td__header-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                <br/> Duis aute irure dolor in reprehenderit in voluptate velit esse <br/>cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  ​</p>

                        </div>

                        <div className=" td__header-image" md="6" sm="6" xs="6" lg="6" xl="6">
                            <img src={ServOverview} />
                        </div>
                </div>
            </div>
        );
    }
}
