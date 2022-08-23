import React , { Component }from 'react';
import {Col,} from 'reactstrap';
import {Helmet} from "react-helmet";
import Fitness from '../image/Fitness.png';
import Posture from '../image/Posture.png';
import Helmetpng from '../image/Helmet.png';
import Player from "./reactPlayer";
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }
  componentWillMount(){
    window.scrollTo(0,0);
  }
  openModal (e) {
    e.preventDefault();
    this.setState(prevState => ({
      isOpen: !prevState.open
    }));
  }
  
  render() {
    return (
      <div className="container-fluid">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Triadh StoLav AI, ML, Deep Learning turn-key and custom SaaS Platform</title>
          <meta name="description" content="Lightweight AI, ML, Deep Learning, Computer Vision, Pose, Facial, Object, Human Activity Recognition platform consumed as APIs or deployed on Edge and Cloud." />
          {/* <link rel="canonical" href="" /> */}
        </Helmet>
        {/* <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='oIlIVFBBbNw' onClose={() => this.setState({isOpen: false})} /> */}
        <Player open={this.state.isOpen} toggleModal={()=>this.setState({isOpen:false})} />
        <div className="row">
          <Col md="12" sm="12" xs="12" lg="12" xl="12">
            <div className ="header-text">
              <Col className="">
                <p>STOLAV - ACTIVITY RECOGNITION PLATFORM</p>
                <p className="content">StoLav leverages Computer Vision, Deep Learning and Digital Signal 
                Processing techniques to turn your sensor, image and video data to transform your business. 
                The platform can be consumed as APIs, SDK or Software-as-a-Service. 
                We take privacy and security very seriously and NEVER store or use customer data; 
                we use industry standard TLS and encryption protocols to ensure security.  
                <strong className="link" onClick ={(e)=>this.openModal(e)}> Check out a video on the platform.</strong></p>
              </Col>
            </div>
          </Col>
        </div>
        {/* <div className ="row mt_20 text-center">
          <Col md="3" lg="3" xl= "3" ></Col>
          <Col md="6" sm="12" xs="12" lg="6" xl="6" className="text-center">
            <Col className='player-wrapper text-center vcenter'>
              <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
              pip ={false} playing ={true} controls ={true} light ={false}
              volume ={0.8} muted ={false} played ={0} loaded ={0} duration ={6.10} playbackRate ={1.0}
              loop ={false} />
            </Col>
          </Col>
          <Col md="3" lg="3" xl= "3" ></Col>
        </div> */}
        <div className="row mt_20">
          <Col md="12" sm="12" xs="12" lg="12" xl="12">
            <div className ="text-center vcenter comp-text ">
              <Col className=" vcenter">
                <h4 className="title-txt">USE CASES</h4>   
              </Col>
            </div>
          </Col>
        </div>
        <div className="row mt_20 mb_20 text-center">
          <Col md="6" sm="12" xs="12" lg="6" xl="6" >
            <img className="img img-responsive keyimage" src={Fitness} alt="logo" />
          </Col>
          <Col md="6" sm="12" xs="12" lg="6" xl="6">
            <Col className="p-all-100">
              <p className="txt">FITNESS</p> 
              <p className="content">Using live or recorded video and Identify type of exercise/yoga, repetition count, form analysis, range of motion, auto routine storage and much more. You can also setup virtual coaching to train your customers without you being present.</p>
            </Col>
          </Col>
        </div>
        <div className="row mt_20 mb_20 text-center">
          <Col md="6" sm="12" xs="12" lg="6" xl="6" >
            <img className="img img-responsive keyimage" src={Posture} alt="logo" />
          </Col>
          <Col md="6" sm="12" xs="12" lg="6" xl="6">
            <Col className="p-all-100">
              <p className="txt">POSTURE/ GAIT ANALYSIS</p> 
              <p className="content">Help your customers, patients or employees to follow the right posture and avoid injury and reduce pain and discomfort.</p>
              
            </Col>
          </Col>
        </div>
        <div className="row mt_20 mb_20 text-center">
          <Col md="6" sm="12" xs="12" lg="6" xl="6" >
            <img className="img img-responsive keyimage" src={Helmetpng} alt="logo" />
          </Col>
          <Col md="6" sm="12" xs="12" lg="6" xl="6">
            <Col className="p-all-100">
              <p className="txt">WORK PLACE SAFETY ANALYSIS</p> 
              <p className="content">Ensure your employees are kept safe and follow compliance and regulations; right safety equipments(helmets, glasses,gloves etc) are worn for equipment installation or pole climbing.</p>
              
            </Col>
          </Col>
        </div>
        <div className="row mb_20">
          <Col md="12" sm="12" xs="12" lg="12" xl="12">
            <div className ="header-text">
              <Col className="">
                <p className="txt">OTHER USE CASES</p>
                <p className="content">We can work with you to bring in other use cases applicable to your business in a turn-key fashion. <strong className="link" onClick ={()=>this.props.onClickMenuItem(4)}>Contact Us.</strong></p>
                <p className="content mt_20">Want us to show you more?</p>
                <p className="txt link" onClick ={()=>this.props.onClickMenuItem(4)}>Schedule a demo!</p>
              </Col>
            </div>
          </Col>
        </div>
      </div>
    );
  }
}
