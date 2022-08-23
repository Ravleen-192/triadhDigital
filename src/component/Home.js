import React , { Component }from 'react';
import {Col,} from 'reactstrap';
import logo from '../image/Key_Image_Final.png';
import ReactCardFlip from 'react-card-flip';
import ReactTextRotator from 'react-text-rotator';
import {Helmet} from "react-helmet";
const content = [
    {
      text: "Innovate", 
      className: 'classA',
      animation: 'fade',
    },
    {
      text: "Invent",
      className: 'classB',
      animation: 'fade',
    },
    {
      text:  "Transform",
      className: 'classC',
      animation: 'fade',
    },
  ];
   
var mContext;
export default class Home extends Component{
    constructor(props) {
      super(props);
      this.state = {
        isFlipped1: false,
        isFlipped2:false,
        isFlipped3:false,
        isShow:true,
      };
      mContext =this;
    }
    componentWillMount(){
        window.scrollTo(0,0);
    }
    handleClick(e,type) {
        e.preventDefault();
        switch(type){
            case "first":
                mContext.setState(prevState => ({ isFlipped1: !prevState.isFlipped1,isFlipped2: false,isFlipped3: false}));
                break;
            case "second":
                mContext.setState(prevState => ({ isFlipped1: false,isFlipped2: !prevState.isFlipped2,isFlipped3: false}));
                break;
            case "third":
                mContext.setState(prevState => ({ isFlipped1: false,isFlipped2: false,isFlipped3: !prevState.isFlipped3}));
                break;
            default:
                break;
        }
        
    }
    
    componentWillUnmount(){
       
       
    }
    
    render() {
      return (
        <div className="container-fluid text-center">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Triadh Machine Learning and Deep Learning Services and Solutions Provider</title>
                <meta name="description" content="Triadh is an Artificial Intelligence, Machine Learning and Deep Learning Software Platform and Services company based out of Dallas, TX, USA" />
                {/* <link rel="canonical" href="" /> */}
            </Helmet>
            <div className="row">
                <Col md="12" sm="12" xs="12" lg="12" xl="12" >
                    <img className="img img-responsive keyimage" src={logo} alt="logo" />
                </Col>
                <Col md="12" sm="12" xs="12" lg="12" xl="12">
                    <Col className ="fade-text text-center ">
                        <Col className=" vcenter">
                            {this.state.isShow?<ReactTextRotator content={content} />:null}
                        </Col>
                    </Col>
                </Col>
            </div>
            {/* <div class="row">
                <Col md="12" sm="12" xs="12" lg="12" xl="12">
                    <div class ="center-text text-center ">
                        <Col className=" vcenter">
                            <ReactTextRotator content={content} />
                        </Col>
                    </div>
                </Col>
                <Col md="12" sm="12" xs="12" lg="12" xl="12" className="mt_20">
                    <div class ="center-text text-center ">
                        <Col className=" vcenter">
                            <ReactRotatingText items={["Innovate", "Invent", "Transform"]} cursor ={false}/>
                        </Col>
                    </div>
                </Col>
            </div> */}
            <div className="row mt_20">
                <Col md="12 text-center vcenter" sm="12" xs="12" lg="12" xl="12">
                    <Col md='12 vcenter' sm="12" xs="12" lg="12" xl="12">
                    <p className="content">Intelligence shouldn't be Artificial, we believe AI should stand for Adaptive Intelligence; which allows the system the ability to change in response to the current demands in the environment. AI should integrate all of the processes, knowledge, skills and aptitudes that help companies not only deal with change but take advantage of it and move forward.</p>
                    </Col>
                </Col>
            </div>
            <div className="container-fuild mt_20 mb_20">
                <div className="row">
                    <Col md="4" sm="12" xs="12" lg="4" xl="4" className="mb_20">
                        <ReactCardFlip isFlipped={this.state.isFlipped1} flipDirection="horizontal" infinite flipSpeedFrontToBack={1.5} flipSpeedBackToFront={1.5}>
                            <div className="frontside"  onClick={(e)=>this.handleClick(e,"first")}>
                                <div className="card bg_img_front_1">
                                    <div className="card-body text-center">
                                        <Col md="12 text-center vcenter" sm="12" xs="12" lg="12" xl="12">
                                            {/* <p className="card-text">StoLav</p> */}
                                            <p className="card-text">StoLav <br/>AI Low Code Platform </p>
                                        </Col>
                                    </div>
                                </div>
                            </div>
                            <div className="backside" onClick={(e)=>this.handleClick(e,"first")}>
                                <div className="card bg_img_back">
                                    <div className="card-body text-center">
                                        <p className="card-text back-text"> Turn your image, video and sensor data into actionable insight and grow your business. <a className="link" onClick ={()=>this.props.onClickMenuItem(3)}><strong>Learn more</strong></a></p>
                                        
                                    </div>
                                </div>
                            </div>
                        </ReactCardFlip>
                    </Col>
                    <Col md="4" sm="12" xs="12" lg="4" xl="4" className="mb_20">
                        <ReactCardFlip isFlipped={this.state.isFlipped2} flipDirection="horizontal" infinite flipSpeedFrontToBack={1.5} flipSpeedBackToFront={1.5}>
                            <div className="frontside"  onClick={(e)=>this.handleClick(e,"second")}>
                                <div className="card bg_img_front_2">
                                    <div className="card-body text-center">
                                        <Col md="12 text-center vcenter" sm="12" xs="12" lg="12" xl="12">
                                            <p className="card-text second-card">AI Services</p>
                                        </Col>
                                    </div>
                                </div>
                            </div>
                            <div className="backside" onClick={(e)=>this.handleClick(e,"second")}>
                                <div className="card bg_img_back">
                                    <div className="card-body text-center">
                                    <p className="card-text back-text">AI- automate your facial, speech recognition, natural language processing and many more use cases. <a className="link" onClick ={()=>this.props.onClickMenuItem(2)}><strong>Learn more</strong></a></p>
                                    </div>
                                </div>
                            </div>
                        </ReactCardFlip>
                    </Col>
                    <Col md="4" sm="12" xs="12" lg="4" xl="4" className="mb_20">
                        <ReactCardFlip isFlipped={this.state.isFlipped3} flipDirection="horizontal" infinite flipSpeedFrontToBack={1.5} flipSpeedBackToFront={1.5}>
                            <div className="frontside"  onClick={(e)=>this.handleClick(e,"third")}>
                                <div className="card bg_img_front_1">
                                    <div className="card-body text-center">
                                        <Col md="12 text-center vcenter" sm="12" xs="12" lg="12" xl="12">
                                            <p className="card-text">Articles, Blogs, Use Cases</p>
                                        </Col>
                                    </div>
                                </div>
                            </div>
                            <div className="backside" onClick={(e)=>this.handleClick(e,"third")}>
                                <div className="card bg_img_back">
                                    <div className="card-body text-center">
                                    <p className="card-text back-text">Read about our technology, general trends and much more. 
                                    <a className="link" onClick ={()=>window.open("https://www.linkedin.com/company/triadh-ai/?viewAsMember=true","_blank")}><strong> Click here</strong></a></p>
                                    </div>
                                </div>
                            </div>
                        </ReactCardFlip>
                    </Col>
                </div>
            </div>
            {/* <div class="container-fuild mt_20 mb_20">
                <div class="row">
                    <Col md="4" sm="12" xs="12" lg="4" xl="4">
                        <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                            <div class="mainflip">
                                <div class="frontside">
                                    <div class="card bg_img_front_1">
                                        <div class="card-body text-center">
                                            <Col md="12 text-center vcenter" sm="12" xs="12" lg="12" xl="12">
                                                <p class="card-text">Platform Engineering Services</p>
                                            </Col>
                                        </div>
                                    </div>
                                </div>
                                <div class="backside">
                                    <div class="card bg_img_back">
                                        <div class="card-body text-center mt-4">
                                            <p class="card-text"> Platform - lift and shift, re platform and containerization of your application and moving to DevOps. Learn more</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="4" sm="12" xs="12" lg="4" xl="4">
                        <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                            <div class="mainflip">
                                <div class="frontside">
                                    <div class="card bg_img_front_2">
                                        <div class="card-body text-center">
                                            <Col md="12 text-center vcenter" sm="12" xs="12" lg="12" xl="12">
                                                <p>Activity Recognition Platform</p>
                                            </Col>
                                        </div>
                                    </div>
                                </div>
                                <div class="backside">
                                    <div class="card bg_img_back">
                                        <div class="card-body text-center mt-4">
                                            <p class="card-text">Activity Recognition- turn your image, video and sensor data to actionable insight and grow your business. Learn more</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md="4" sm="12" xs="12" lg="4" xl="4">
                        <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                            <div class="mainflip">
                                <div class="frontside">
                                    <div class="card bg_img_front_1 vcenter">
                                        <div class="card-body text-center vcenter">
                                            <Col md="12 text-center vcenter" sm="12" xs="12" lg="12" xl="12">
                                                <p class="card-text">Artificial Intelligence Services</p>
                                            </Col>
                                        </div>
                                    </div>
                                </div>
                                <div class="backside">
                                    <div class="card bg_img_back">
                                        <div class="card-body text-center mt-4">
                                            <p class="card-text">AI- automate your facial, speech recognition, natural language processing and many more use cases. Learn more</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </div>
            </div> */}
        </div>
      );
    }
  }