import React, { Component } from 'react';
import { Col, Label, Button } from 'reactstrap';
import { useAlert } from "react-alert";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Helmet } from "react-helmet";
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';
import TopBarProgress from "react-topbar-progress-indicator";
var validator = require("email-validator");

var mcontext;
TopBarProgress.config({
  barColors: {
    "0": "#B0EADE",
    "1.0": "#B0EADE"
  },
  shadowBlur: 5,
  shadowColor: "#B0EADE"
});
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactModel: new ContactModel(),
      autoFocus: false,
      loading: false,
    };
    mcontext = this;
    this.focusRef = React.createRef();
  }
  componentWillMount() {
    window.scrollTo(0, 0);
  }
  callback(token) {
    console.log(token);
  }
  submitForm() {
    let { alert } = this.props;
    let { contactModel } = this.state;

    //loadReCaptcha("6LcsnPIUAAAAAFtykko0C3nRDGC52DmOaLsSZbKx", this.callback);
    if (!contactModel.name) {
      this.refs.name.focus();
      this.setState({ nameError: "Name Required" });
      window.scrollTo(0, 0);
      return;
    } else {
      this.setState({ nameError: null });
    }
    if (!contactModel.title) {
      this.refs.title.focus();
      this.setState({ titleError: "Job Title Required" });
      window.scrollTo(0, 0);
      return;
    } else {
      this.setState({ titleError: null });
    }
    if (!contactModel.email) {
      this.refs.email.focus();
      this.setState({ emailError: "Work Email Required" });
      window.scrollTo(0, 0);
      return;
    } else if (!validator.validate(contactModel.email)) {
      this.refs.email.focus();
      this.setState({ emailError: "Please enter valid email" });
      window.scrollTo(0, 0);
      return;
    } else {
      this.setState({ emailError: null });
    }
    if (!contactModel.phone) {

      //this.refs.phoneInputRef.focus();
      this.setState({ phoneError: "Work Phone Required", autoFocus: true });
      window.scrollTo(0, 0);
      return;
    } else {
      this.setState({ phoneError: null });
    }
    if (!contactModel.comname) {
      this.refs.comname.focus();
      this.setState({ companyError: "Company Name Required" });
      window.scrollTo(0, 0);
      return;
    } else {
      this.setState({ companyError: null });
    }
    if (!contactModel.message) {
      this.refs.message.focus();
      this.setState({ messageError: "Message Required" });
    } else {
      this.setState({ messageError: null });
    }
    mcontext.setOnProgress();
    var form = new FormData()
    form.append('name', contactModel.name);
    form.append('title', contactModel.title);
    form.append('email', contactModel.email);
    form.append('phone', contactModel.phone);
    //form.append('comname', contactModel.comname);
    form.append('message', contactModel.message);
    form.append('recaptcha', this.captchatoken);
    var xhr = new XMLHttpRequest()
    //xhr.withCredentials = true;
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log("status = ", xhr.status);
        mcontext.setOnProgress();
        if (xhr.status === 200) {
          alert.show("Thank you for the interest. We will contact you within one business day.", {
            title: "Success"
          });
          mcontext.setState({ contactModel: new ContactModel() })
        } else {
          alert.show("Please try again after some time");
        }
        console.log(xhr.responseText)
      }
    }
    // xhr.open("POST","https://toxsswlv99.execute-api.us-east-1.amazonaws.com/prod/dsk");
    xhr.open("POST", "https://hdy1gtzwre.execute-api.us-east-1.amazonaws.com/default/SendEmail-test");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.send(form);
  }
  verifyCallback = (recaptchaToken) => {
    // Here you will get the final recaptchaToken!!!  
    console.log(recaptchaToken, "<= your recaptcha token")
  }
  setOnProgress() {
    mcontext.setState(prevState => ({ loading: !prevState.loading }));
  }
  render() {
    let { contactModel } = this.state;
    //const phoneInputRef = useRef(null);
    return (
      <div className="container-fluid text-center">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Triadh Contact</title>
          <meta name="description" content="Get in touch for predictable, scalable, cost effective AI, Machine Learning, Deep Learning and AWS Sagemaker Services." />
          {/* <link rel="canonical" href="" /> */}
        </Helmet>
        <div>{this.state.loading && <TopBarProgress />}</div>


        <GoogleReCaptchaProvider reCaptchaKey="6LcsnPIUAAAAAFtykko0C3nRDGC52DmOaLsSZbKx">
          <GoogleReCaptcha
            ref={"captcha"}
            onVerify={
              token => {
                console.log("received token -->", token)
                this.captchatoken = token;
              }
            } />
        </GoogleReCaptchaProvider>
        <div class=" wrap text-center contact-text mb_20">
          <div class="resp col-md-6">
            <div className="row mt_20">

              <div><Label className="content lbl_txt">Name:<sup className="red_star">*</sup></Label></div>

              <div>
              {/* <input type="file" onChange={(event)=>this.Upload(event)}></input> */}
              <input type="text" className="form-control"
                value={contactModel.name ? contactModel.name : ""}
                ref={"name"}
                onChange={(event) => {
                  event.preventDefault();
                  contactModel.name = event.target.value;
                  this.setState({ contactModel, nameError: null })
                }}
                maxLength={50} required></input>
              {this.state.nameError ? <span className="error-lbl">{this.state.nameError}</span> : null}
              </div>
            </div>
            <div className="row mt_20">

              <div><Label className="content lbl_txt">Job Title:<sup className="red_star">*</sup></Label></div>

              <div>
              <input type="text" className="form-control"
                value={contactModel.title ? contactModel.title : ''}
                ref={"title"}
                onChange={(event) => {
                  event.preventDefault();
                  contactModel.title = event.target.value;
                  this.setState({ contactModel, titleError: null })
                }}
                maxLength={30}
                required></input>
              {this.state.titleError ? <span className="error-lbl">{this.state.titleError}</span> : null}
              </div>
            </div>
            </div>
          <div class="resp col-md-6">
            <div className="row mt_20">


              <div><Label className="content lbl_txt">Work Email:<sup className="red_star">*</sup></Label></div>

              <div>
              <input type="email" className="form-control"
                value={contactModel.email ? contactModel.email : ''}
                ref={"email"}
                onChange={(event) => {
                  event.preventDefault();
                  contactModel.email = event.target.value;
                  this.setState({ contactModel, emailError: null })
                }}
                required></input>
              {this.state.emailError ? <span className="error-lbl">{this.state.emailError}</span> : null}
              </div>
            </div><div className="row mt_20">

              <div><Label className="content lbl_txt">Work Phone:<sup className="red_star">*</sup></Label></div>

              <div>
                <PhoneInput
                  international
                  defaultCountry="US"
                  value={contactModel.phone ? contactModel.phone : ""}
                  limitMaxLength
                  autoFocus={this.state.autoFocus}
                  onChange={(value) => {
                    //event.preventDefault();
                    contactModel.phone = value;
                    this.setState({ contactModel, phoneError: null })
                  }}
                />
                {this.state.phoneError ? <span className="error-lbl">{this.state.phoneError}</span> : null}

              </div></div> </div>
        </div>
        <div className="text-left  contact">
          <Col >
            <h6 className="title-txt">HOW CAN WE HELP YOU?</h6>
          </Col>
        </div>
        <div className="text-center contact-text mb_20">
          <Col >
            <div className="row mt_20 mb_20">
              <Col md="2" lg="2" xl="2"></Col>
              <Col md='8 vcenter' sm="12" xs="12" lg="8" xl="8">
                <textarea className="form-control content" type="textarea" id="message" placeholder="Message"
                  value={contactModel.message ? contactModel.message : ""}
                  ref={"message"}
                  onChange={(event) => {
                    event.preventDefault();
                    contactModel.message = event.target.value;
                    this.setState({ contactModel, messageError: null })
                  }}
                  maxLength={2000} rows="7"></textarea>
                <Col className="row">
                  {this.state.messageError ? <span className="error-lbl-textarea">{this.state.messageError}</span> : null}
                </Col>
              </Col>

              <Col md="2" lg="2" xl="2"></Col>
            </div>
            <div className="row mt_20 mb_20">
              <Col md='12 vcenter' sm="12" xs="12" lg="12" xl="12">
                <Button className="submitBtn" onClick={() => this.submitForm()}>Submit</Button>
              </Col>
            </div>
          </Col>
        </div>
      </div >




    );
  }
}

export default () => {
  const alert = useAlert();
  return (
    <Contact alert={alert} />
  )
}
class ContactModel {
  constructor() {
    // this.name="test";
    // this.title="test";
    // this.email="test@gmail.com";
    // this.phone="911234567890";
    // this.comname="test";
    // this.message="test"
  }
}