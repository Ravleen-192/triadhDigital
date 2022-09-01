import React , { Component }from 'react';
import '../css/bootstrap.min.css';
import {Col,} from 'reactstrap';
import contImg from '../image/SenthilKumar1.png';
import velImg from '../image/velu1.jpeg';
import {Helmet} from "react-helmet";
export default class Company extends Component {
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
          <title>About Triadh</title>
          <meta name="description" content="About Triadh, their team, work, vision, mission and purpose" />
          {/* <link rel="canonical" href="" /> */}
        </Helmet>
        <div className="row">
          <Col md="12" sm="12" xs="12" lg="12" xl="12">
            <div className ="header-text">
              <Col className="">
                <p>ABOUT US</p>
                <p className="content">At Triadh AI we believe that everything happens in 3s; electron, neutron, proton. The good, the bad, the in-between; the fundamental of our existence air, food, and water. With that, we look to serve our employees, our clients, our solutions where we can help innovate, invent, and transform.</p>
                <p className="content">We have a combined 100+ years of experience delivering mission critical projects for large enterprises including Digital Transformation, Cloud Migration and Infrastructure Modernization and Deep/machine Learning solutions.</p>
                <p className="content">We hand pick our staff who not only have deep technical expertise but are also obsessed with providing the best value for the customers. Our culture is to be a strategic partner for our clients. Our Architects and Engineers will be super active with constant communication with the clients and will also impart their deep knowledge to their teams.</p>
              </Col>
            </div>
          </Col>
        </div>
        <div className="row mt_20">
          <Col md="12" sm="12" xs="12" lg="12" xl="12">
            <div className ="text-center vcenter comp-text ">
              <Col className=" vcenter">
                <h4 className="title-txt">LEADERSHIP TEAM</h4>   
              </Col>
            </div>
          </Col>
        </div>
        <div className="row mt_20">
          <Col md="6" sm="12" xs="12" lg="6" xl="6" className="mb_20 company" >
            <div className="card">
              <div className="box">
                <div className="img">
                  <img src={contImg}/>
                </div>
                <h2>SENTHIL KUMAR<br/><span>Founder & CEO</span></h2>
                <p> 20+ Years of Technology and Product Development experience.</p>
                <span>
                  <ul>
                    <li><a onClick={()=>window.open("https://www.linkedin.com/in/esenthilkumar/", "_blank")}><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                  </ul>
                </span>
              </div>
            </div>
          </Col>
          {/*<Col md="3" sm="12" xs="12" lg="3" xl="3"className="mb_20 company" >
            <div class="card">
              <div class="box">
                <div class="img">
                  <img class="gray" src={navImg}/>
                </div>
                <h2>NAVEED PATEL<br/><span>CSO</span></h2>
                <p> 20+ Years of Product Strategy and Solutions implementation experience.</p>
                <span>
                  <ul>
                    <li><a onClick={()=>window.open("https://www.linkedin.com/in/naveedpatel/", "_blank")}><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                  </ul>
                </span>
              </div>
            </div>
          </Col>
          <Col md="3" sm="12" xs="12" lg="3" xl="3" className="mb_20 company">
            <div class="card">
              <div class="box">
                <div class="img">
                  <img class="gray" src={aminImg}/>
                </div>
                <h2>AMIN CHANDANI<br/><span>COO</span></h2>
                <p> 20+ Years of Business and Human Capital Development experience.</p>
                <span>
                  <ul>
                    <li><a onClick={()=>window.open("https://www.linkedin.com/in/aminchandani/", "_blank")}><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                  </ul>
                </span>
              </div>
            </div>
          </Col>*/
    }
          <Col md="6" sm="12" xs="12" lg="6" xl="6" className="mb_20 company" >
            <div class="card">
                <div class="box">
                    <div class="img">
                        <img src={velImg}/>
                    </div>
                    <h2>VELAYUDHAM MURUGESAN<br/><span>CTO</span></h2>
                    <p> 25 Years of Software & Consumer Electronics Product Development experience.</p>
                    <span>
                      <ul>
                        <li><a onClick={()=>window.open("https://www.linkedin.com/in/velayudhammurugesan/", "_blank")}><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                      </ul>
                    </span>
                </div>
            </div>
          </Col>
        </div>
        {/* <div className="row">
          <Col md="4" sm="12" xs="12" lg="4" xl="4" className=" company" />
          <Col md="4" sm="12" xs="12" lg="4" xl="4" className="mb_20 company" >
            <div class="card">
                <div class="box">
                    <div class="img">
                        <img src={velImg}/>
                    </div>
                    <h2>VELAYUDHAM MURUGESAN<br/><span>CTO</span></h2>
                    <p> 25 Years of Software & Consumer Electronics Product Development Experience.</p>
                    <span>
                      <ul>
                        <li><a onClick={()=>window.open("https://www.linkedin.com/in/velayudhammurugesan/", "_blank")}><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                      </ul>
                    </span>
                </div>
            </div>
          </Col>
          <Col md="4" sm="12" xs="12" lg="4" xl="4" className=" company" ></Col>
        </div> */}
        {/* <div className="row mt_20 mb_20">
          <Col md="6" sm="12" xs="12" lg="6" xl="6" >
            <img className="img img-responsive image" src={contImg} alt="logo" />
          </Col>
          <Col md="6" sm="12" xs="12" lg="6" xl="6">
            <Col className="p-all-100">
              <p className="txt">SENTHIL KUMAR</p> 
              <p>Founder & CEO</p>
              <p>20+ Years of technology and product development experience.</p>  
              <a className="social-icon link" onClick={()=>window.open("https://www.linkedin.com/in/esenthilkumar/", "_blank")}>
                <i className="fa fa-linkedin-square"></i>
              </a>
            </Col>  
          </Col>
        </div>
        <div className="row mt_20 mb_20">
          <Col md="6" sm="12" xs="12" lg="6" xl="6" >
            <img className="img img-responsive image" src={navImg} alt="logo" />
          </Col>
          <Col md="6" sm="12" xs="12" lg="6" xl="6">
            <Col className="p-all-100">
              <p className="txt">NAVEED PATEL</p> 
              <p>PARTNER & CSO</p>
              <p>20+ Years of Product Strategy and Solutions implementation experience.</p>  
              <a className="social-icon link" onClick={()=>window.open("https://www.linkedin.com/in/naveedpatel/", "_blank")}>
                <i className="fa fa-linkedin-square"></i>
              </a>
            </Col>  
          </Col>
        </div>
        <div className="row mt_20 mb_20">
          <Col md="6" sm="12" xs="12" lg="6" xl="6" >
            <img className="img img-responsive image" src={aminImg} alt="logo" />
          </Col>
          <Col md="6" sm="12" xs="12" lg="6" xl="6">
            <Col className="p-all-100">
              <p className="txt">AMIN CHANDANI</p> 
              <p>PARTNER & COO</p>
              <p>20+ Years of Business and Human Capital Development experience.</p>  
              <a className="social-icon link" onClick={()=>window.open("https://www.linkedin.com/in/aminchandani/", "_blank")}>
                <i className="fa fa-linkedin-square"></i>
              </a>
            </Col>  
          </Col>
        </div>
        <div className="row mt_20 mb_20">
          <Col md="6" sm="12" xs="12" lg="6" xl="6" >
            <img className="img img-responsive image" src={velImg} alt="logo" />
          </Col>
          <Col md="6" sm="12" xs="12" lg="6" xl="6">
            <Col className="p-all-100">
              <p className="txt">VELAYUDHAM MURUGESAN</p> 
              <p>CTO</p>
              <p>25 Years of Software & Consumer Electronics Product Development Experience.</p>  
              <a className="social-icon link" onClick={()=>window.open("https://www.linkedin.com/in/velayudhammurugesan/", "_blank")}>
                <i className="fa fa-linkedin-square"></i>
              </a>
            </Col>  
          </Col>
        </div> */}
      </div>
    );
  }
}
