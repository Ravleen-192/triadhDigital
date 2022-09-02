import React, { Component } from 'react';
import { Col, } from 'reactstrap';
//import Computer_vision from '../image/Computer_vision.png';
import '../css/App.css'
import ServOverview from '../image/ServiceOverview.jpg';
import ReactCardFlip from 'react-card-flip';
import { Helmet } from "react-helmet";
var mContext;


export default class Services extends Component {
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
                    <title>AI, ML, Deep Learning Turn-key and Tailor-made Solutions and Services</title>
                    <meta name="description" content="AI, ML, Deep Learning, ComputerVision, Pose, Facial, Object, Speech-to-text, text-to-speech, AWS SageMaker Services" />
                    {/* <link rel="canonical" href="" /> */}
                </Helmet>

                <div className=" row container-fuild " md="12" sm="12" xs="12" lg="12" xl="12">
                    <div className=" td__header" >
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
                    <Col md="4" sm="12" xs="12" lg="4" xl="4" className="mb_20">
                        <ReactCardFlip isFlipped={this.state.isFlipped1} flipDirection="vertical" infinite flipSpeedFrontToBack={1.5} flipSpeedBackToFront={1.5}>
                            <div className="frontside" onClick={(e) => this.handleClick(e, "first")}>
                                <div className="card bg_img_sfront_1">

                                </div>
                                <div >
                                    <Col md="12" sm="12" xs="12" lg="12" xl="12">
                                        <button className="frmSbtn2" >Consulting Services </button>
                                    </Col>
                                </div>
                            </div>
                            <div className="backside" onClick={(e) => this.handleClick(e, "first")}>
                                <div className="card bg_img_front_1">
                                    <div className="card-body text-center">
                                        <p className="card-text back-text"> Outcome based consulting to define your teachnology strategy, eliminate pain points and accelerate business value.<a className="link" onClick={() => this.props.onClickMenuItem(3)}><strong>Learn more</strong></a></p>

                                    </div>
                                </div>
                            </div>
                        </ReactCardFlip>
                    </Col>
                    <Col md="4" sm="12" xs="12" lg="4" xl="4" className="mb_20">
                        <ReactCardFlip isFlipped={this.state.isFlipped2} flipDirection="horizontal" infinite flipSpeedFrontToBack={1.5} flipSpeedBackToFront={1.5}>
                            <div className="frontside" onClick={(e) => this.handleClick(e, "second")}>
                                <div className="card bg_img_sfront_2">

                                </div>
                                <div >
                                    <Col md="12 text-bottom " sm="12" xs="12" lg="12" xl="12">
                                        <button className="frmSbtn2">Managed and Professional Services</button>
                                    </Col>
                                </div>
                            </div>
                            <div className="backside" onClick={(e) => this.handleClick(e, "second")}>
                                <div className="card bg_img_front_1">
                                    <div className="card-body text-center">
                                        <p className="card-text back-text">Fixed-bid implementation and managed contracts in an onshore/offshore model. <a className="link" onClick={() => this.props.onClickMenuItem(2)}><strong>Learn more</strong></a></p>
                                    </div>
                                </div>
                            </div>
                        </ReactCardFlip>
                    </Col>
                    <Col md="4" sm="12" xs="12" lg="4" xl="4" className="mb_20">
                        <ReactCardFlip isFlipped={this.state.isFlipped3} flipDirection="vertical" infinite flipSpeedFrontToBack={1.5} flipSpeedBackToFront={1.5}>
                            <div className="frontside" onClick={(e) => this.handleClick(e, "third")}>
                                <div className="card bg_img_sfront_3">

                                </div>
                                <div >
                                    <Col md="12 text-bottom " sm="12" xs="12" lg="12" xl="12">
                                        <button className="frmSbtn2">Staffing Services</button>
                                    </Col>
                                </div>
                            </div>
                            <div className="backside" onClick={(e) => this.handleClick(e, "third")}>
                                <div className="card bg_img_front_1">
                                    <div className="card-body text-center">
                                        <p className="card-text back-text">Time and material contractors.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ReactCardFlip>
                    </Col>

                </div>
            </div>
        );
    }
}
