import React , { Component }from 'react';
import {node} from 'prop-types';
import './css/App.css';
import './css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,Col
} from 'reactstrap';
import ImportComponent from './common/ImportComponent';
import logo from './image/logo_new.png';
import { positions, Provider } from "react-alert";
import AlertMUITemplate from "react-alert-template-mui";
// import instagram from "./image/instagram.JPEG";
// import linkedin from './image/linkin.png';
// import twitter from './image/twitter.png'
const links = [
  { href: '#Home', text: 'Home',menuId:0 },
  { href: '#company', text: 'Company',menuId:1 },
  { href: '#services', text: 'Services', menuId:2 },
  { href: '#products', text: 'Products', menuId:3, },
  { href: '#contact', text: 'Contact', menuId:4 },
];

const createNavItem = ({ href, text, className,menuId }) => (
  <NavItem key={menuId}>
    <NavLink  href={href} className={className}  onClick={()=>mContext.onClickMenuItem(menuId)}>{text}</NavLink>
     
  </NavItem>
);
var mContext;
const options = {
  timeout: 10000,
  position: positions.MIDDLE
};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      child:node,
    };
    mContext = this;
    this.onClickMenuItem = this.onClickMenuItem.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  componentWillMount(){
    this.onClickMenuItem(0);
    //window.location.hash = "#home";
  }
  
  onClickMenuItem(menuId){
    var Component = ImportComponent(menuId);
    this.setState({child:<Component.default onClickMenuItem={this.onClickMenuItem}></Component.default>});
    this.closeNavbar()
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  closeNavbar() {
    if (this.state.isOpen === true) {
      this.toggle();
    }
  }
  newTab(linkedin) {
    var url = linkedin? "https://www.linkedin.com/company/triadh-ai/?viewAsMember=true":" https://www.instagram.com/triadhai/";
    window.open(url, "_blank"); 
  }
  componentDidMount() {
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener('popstate', this.onBackButtonEvent);
  }
  onBackButtonEvent = (e) => {
    e.preventDefault();
    var menuname = window.location.hash.split("#");
    if(menuname[1]){
      switch(menuname[1]){
        case "Home":
          this.onClickMenuItem(0);
          break;
        case "company":
          this.onClickMenuItem(1);
          break;
        case "services":
          this.onClickMenuItem(2);
          break
        case "products":
          this.onClickMenuItem(3);
          break;
        case "contact":
          this.onClickMenuItem(4);
          break;
        default:
          break;
      }
    }else{
      this.onClickMenuItem(0);
    }
    //window.history.pushState(null, null, window.location.pathname);
  
  }
  componentWillUnmount = () => {
    window.removeEventListener('popstate', this.onBackButtonEvent);
  }
  render() {
    let{child} = this.state;
    var year = new Date().getFullYear();
    return (
      <div>
        <Navbar light expand="md" sticky={'top'} className="navbar-header">
          
          <NavbarBrand href="/"><img className="img img-responsive navbrand" src={logo} alt="logo" /></NavbarBrand>
          {this.state.isOpen?
            <a onClick={this.toggle} type="button" className="navbar-toggle pull-right closebtn"><i className="fa fa-times" aria-hidden="true"></i></a>
            :
            <NavbarToggler onClick={this.toggle} />
          }
          
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              
              {links.map(createNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
        <Provider template={AlertMUITemplate} {...options}>
        <div>{child}</div>
        </Provider>
        <footer className="footer">
          <Col className="row">
          <Col className="" md="12" sm="12" xs="12" lg="12" xl="12">
            <Col md="12" sm="12" xs="12" lg="12" xl="12" className="text-center">
              <Col className="footer-text">
              <ul className="footer-ul">
                <li className="list-inline-item">
                  <a className="social-icon link" onClick={()=>this.newTab(true)}>
                    <i className="fa fa-linkedin-square"></i>
                  </a>
                </li>
                {/* <li className="list-inline-item">
                  <a className="social-icon" target="_blank" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li> */}
                <li className="list-inline-item">
                  <a className="social-icon link" onClick={()=>this.newTab(false)}>
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <p>© {year} Triadh</p>
                </li>
              </ul>
              </Col>
            </Col>
          </Col> 
          </Col>
        </footer>
      </div>
    );
  }
}
