/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

import { node } from 'prop-types';
import './css/App.css';
import './css/bootstrap.min.css';
import ImportComponent from './common/ImportComponent';
import Home from "./component/Home";
import Services from "./component/Services";
import Products from "./component/Products";
import Company from "./component/Company";

import Contact from "./component/contact"
import Theia from "./component/Theia";
import Helios from "./component/Helios";
import Plutus from "./component/Plutus";
import { positions, Provider } from "react-alert";
import AlertMUITemplate from "react-alert-template-mui";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, Col
} from 'reactstrap';

import logo from './image/logo_new.png';

var mContext;
const options = {
  timeout: 10000,
  position: positions.MIDDLE
};


class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      child: node,
      user: null, // will contain our user data object when signed in
      status: "Home", loaded: true, hasError: false, type: "", message: "",
      noti_open: false, user_open: false,
      links: [
        { href: '#Home', text: '', menuId: 0, source: "Home", isActive: true },
        { href: '#Services', text: 'Services', menuId: 1, source: "Services", isActive: false },
        { href: '#Products', text: 'Products', menuId: 2, source: "Products", isActive: false },
        { href: '#Company', text: 'Company', menuId: 3, source: "Company", isActive: false },
        { className: "frmbtn2", href: '#contact', text: 'Lets Talk', menuId: 4, source: "contact", isActive: false },

      ]
    };
    mContext = this;
    this.toggle = this.toggle.bind(this);
    this.setOnLoad = this.setOnLoad.bind(this);
    this.onClickMenuItem = this.onClickMenuItem.bind(this);
    this.toggle = this.toggle.bind(this);
    
  }
  componentWillMount() {
    this.onClickMenuItem(0);
    //window.location.hash = "#home";
  }

  onClickMenuItem(menuId) {
    var Component = ImportComponent(menuId);
    this.setState({ child: <Component.default onClickMenuItem={this.onClickMenuItem}></Component.default> });
    this.closeNavbar()
  }
  newTab(linkedin) {
    var url = linkedin ? "https://www.linkedin.com/company/triadh-ai/?viewAsMember=true" : " https://www.instagram.com/triadhai/";
    window.open(url, "_blank");
  }
  
  componentDidMount() {
    this.setOnLoad(false);
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener('popstate', this.onBackButtonEvent);
  }
  onBackButtonEvent = (e) => {
    e.preventDefault();
    var menuname = window.location.hash.split("#");
    if (menuname[1]) {
      switch (menuname[1]) {
        case "Home":
          this.onClickMenuItem(0);
          break;
        case "Company":
          this.onClickMenuItem(1);
          break;
        case "Services":
          this.onClickMenuItem(2);
          break
        case "Products":
          this.onClickMenuItem(3);
          break;
       
        case "contact":
          this.onClickMenuItem(4);
          break;
        default:
          break;
      }
    } else {
      this.onClickMenuItem(0);
    }
    //window.history.pushState(null, null, window.location.pathname);

  }
  componentWillUnmount = () => {
    window.removeEventListener('popstate', this.onBackButtonEvent);
  }
  
  AuthComponent = () => {
    switch (this.state.status) {
      case "Home":
        return( <Home
          switchComponent={this.switchComponent}
          setOnLoad={this.setOnLoad}
          
        />
      );
      case "contact":
        return( <Contact
          switchComponent={this.switchComponent}
          setOnLoad={this.setOnLoad}
          
        />
      );
      case "Services":
        return (
          <Services
            switchComponent={this.switchComponent}
            setOnLoad={this.setOnLoad}            
          />
        );
      case "Company":
        return (
          <Company
            switchComponent={this.switchComponent}
            
            setOnLoad={this.setOnLoad}
           
          />
        );

        case "Products":
          
          return (
            <Products
              switchComponent={this.switchComponent}
             
              setOnLoad={this.setOnLoad}
              
            />
          );
          case "Helios":
          
          return (
            <Helios
              switchComponent={this.switchComponent}
             
              setOnLoad={this.setOnLoad}
              
            />
          );
          case "Theia":
          
            return (
              <Theia
                switchComponent={this.switchComponent}
               
                setOnLoad={this.setOnLoad}
                
              />
            );
            case "Plutus":
          
              return (
                <Plutus
                  switchComponent={this.switchComponent}
                 
                  setOnLoad={this.setOnLoad}
                  
                />
              );
      default:
        break;
    }
  };
  switchComponent = status => {
    
    this.setState({ status });
    console.log("status = ",status);
    this.closeNavbar();
  };
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  closeNavbar() {
    if (this.state.isOpen == true) {
      this.toggle();
    }
  }
  setOnLoad(source) {
    this.setState({ loaded: source });
  }
  setUser(user) {
    mContext.setState({ user: user });
  }
  onHidden(hidden) {
    mContext.setState({ hasError: hidden.hasError });
  }
  
  scroll(container, key, loop = false) {
    var element = document.getElementById(container);
    if (loop && this.state.mouseout) {
      return;
    }
    if (element) {
      var scroll_height = element.scrollTop;
      switch (key) {
        case "top":
          if (scroll_height > 0) {
            scroll_height -= 10;
            element.scrollTop = scroll_height;
            window.setTimeout(() => { this.scroll(container, key, true) }, 100);
          }
          break;
        case "bottom":
          var scrollable_height = scroll_height + element.clientHeight;
          if (scrollable_height < element.scrollHeight) {
            scroll_height += 10;
            element.scrollTop = scroll_height;
            window.setTimeout(() => { this.scroll(container, key, true) }, 100);
          }
          break;

        default:
          break;
      }
    }
  }
  toggleNavMenu(nav_item) {
    const { noti_open, user_open } = this.state;
    switch (nav_item) {
      case "noti":
        this.setState({ theam_open: false, fav_open: false, noti_open: !noti_open, other_noti_open: false, user_open: false });
        break;
      case "user":
        this.setState({ theam_open: false, fav_open: false, noti_open: false, other_noti_open: false, user_open: !user_open });
        break;
      default:
        this.setState({ noti_open: false, user_open: false });
        break;
    }
  }

  render() {
    let {  links} = this.state;
    var year = new Date().getFullYear();
    return (
      <section>
        <div>
        {/*<Router>*/}
          <Navbar light expand="md" sticky={'top'} className="navbar-header">

            <NavbarBrand href="/"><img className="img img-responsive navbrand" src={logo} alt="logo" /></NavbarBrand>

            {this.state.isOpen ?
              <a onClick={this.toggle} type="button" className="navbar-toggle pull-right closebtn">X</a>
              :
              <NavbarToggler onClick={this.toggle} />
            }

            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              {links.map((element, key) => {
                  return (
                    <NavItem key={element.menuId} active={element.isActive}>
                      <NavLink active={element.isActive} href={element.href} className={element.className}
                        onClick={() => { mContext.switchComponent(element.source);}}>{element.text}</NavLink>
                    </NavItem>
                  )
                })}
              </Nav>
            </Collapse>
          </Navbar> 
          <div>{this.AuthComponent()}</div>
        <footer className="footer">
          <Col className="row">
            <Col className="" md="12" sm="12" xs="12" lg="12" xl="12">
              <Col md="12" sm="12" xs="12" lg="12" xl="12" className="text-center">
                <Col className="footer-text">
                  <ul className="footer-ul">
                    <li className="list-inline-item">
                      <a className="social-icon link" onClick={() => this.newTab(true)}>
                        <i className="fa fa-linkedin-square"></i>
                      </a>
                    </li>
                    {/* <li className="list-inline-item">
                  <a className="social-icon" target="_blank" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li> */}
                    <li className="list-inline-item">
                      <a className="social-icon link" onClick={() => this.newTab(false)}>
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
        
      </section>
    );
  }
}

export default App;