import React , { Component }from 'react';
import {Col,} from 'reactstrap';
import Computer_vision from '../image/Computer_vision.png';
import NLP from '../image/NLP.png';
import {Helmet} from "react-helmet";
export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount(){
    window.scrollTo(0,0);
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
        <div className="row">
          <Col md="12" sm="12" xs="12" lg="12" xl="12">
            <div className ="header-text">
              <Col className="">
                <p className="content">We are an extension of your existing team, here to provide you expertise based on our vast experience to take your Artificial Intelligence journey to the next level. We can perform independent or co-sourced analysis and delivery. <strong className="link" onClick ={()=>this.props.onClickMenuItem(4)}>Contact Us</strong></p>
              </Col>
            </div>
          </Col>
        </div>
        <div className="row mt_20">
          <Col md="12" sm="12" xs="12" lg="12" xl="12">
            <div className ="text-center vcenter comp-text ">
              <Col className=" vcenter">
                <h4 className="title-txt">COMPUTER VISION</h4>   
              </Col>
            </div>
          </Col>
        </div>
        <div className="row mt_20">
          <Col md="12" sm="12" xs="12" lg="12" xl="12">
            <div className ="service-txt">
              <Col className="">
                <p className="content">Turn your images and videos into actionable 
                insights using our Deep Learning models and APIs. 
                Identify objects, humans, faces, emotions, text on your image and video data with a very precise accuracy. <strong className="link" onClick ={()=>this.props.onClickMenuItem(4)}>Contact Us</strong></p>
              </Col>
            </div>
          </Col>
        </div>
        <div class="row">
          <Col md="12" sm="12" xs="12" lg="12" xl="12" >
            <img class="img img-responsive keyimage1" src={Computer_vision} alt="logo" />
          </Col>
        </div>
        <div className="row mt_20">
          <Col md="12" sm="12" xs="12" lg="12" xl="12">
            <div className ="text-center vcenter comp-text ">
              <Col className=" vcenter">
                <h4 className="title-txt">NATURAL LANGUAGE PROCESSING</h4>   
              </Col>
            </div>
          </Col>
        </div>
        <div className="row mt_20">
          <Col md="12" sm="12" xs="12" lg="12" xl="12">
            <div className ="service-txt">
              <Col className="">
                <p className="content">Extract data and text from your documents and images, convert speech to text, 
                text to speech, sentiment analysis with your text, audio and video data and language translation. <strong className="link" onClick ={()=>this.props.onClickMenuItem(4)}>Contact Us</strong></p>
              </Col>
            </div>
          </Col>
        </div>
        <div class="row">
          <Col md="12" sm="12" xs="12" lg="12" xl="12" >
            <img class="img img-responsive keyimage1" src={NLP} alt="logo" />
          </Col>
        </div>
      </div>
    );
  }
}
