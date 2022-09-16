/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

import { node } from 'prop-types';
import './css/App.css';
import './css/bootstrap.min.css';
import { Link, BrowserRouter as Router } from "react-router-dom";
import ImportComponent from './common/ImportComponent';


import Home from "./component/Home";
import Services from "./component/Services";
import "./component/TrayMenu.css";
import Company from "./component/Company";
import icon1 from './image/heliosicon.jpg';
import icon2 from './image/theiaIcon.jpg';
import icon3 from './image/plutusIcon.jpg';
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

class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      child: node,
      trayuser: null, // will contain our user data object when signed in
      status: "Home", loaded: true, hasError: false, type: "", message: "",
      noti_open: false, user_open: false,
      links: [
        { href: '#Services', text: 'Services', menuId: 0, source: "Services", isActive: false },
        { href: '#TrayMenu', text: 'Products', menuId: 1, source: "TrayMenu", isActive: false },
        { href: '#Company', text: 'Company', menuId: 2, source: "Company", isActive: false },
        { className: "td__navbar-menu_container-links-sign", href: null, text: 'Login',source: "login", menuId: 3, isActive: false },
        { className: "frmbtn2", href: '#contact', text: 'Lets Talk', menuId: 4, source: "contact", isActive: false },
        ]
    };
    mContext = this;
    this.toggle = this.toggle.bind(this);
    this.setOnLoad = this.setOnLoad.bind(this);
    this.onClickMenuItem = this.onClickMenuItem.bind(this);
    this.toggle = this.toggle.bind(this);

    this.handleClose = this.handleClose.bind(this);

    this.handleClick = this.handleClick.bind(this);

  }
  handleClose = () => this.setState({ trayuser: this.state.status });

  handleClick = (event, type) => {
    event.preventDefault();
    switch (type) {
      case "Helios": this.switchComponent("Helios");

        break;
      case "Theia": this.switchComponent("Theia");

        break;
      case "Plutus": this.switchComponent("Plutus");

        break;
      default:
        break;
    }

  };
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
        case "TrayMenu":
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
    let drawerClasses = 'side-drawer open row container-fuild';
    let { trayuser } = this.state;
    switch (this.state.status) {
      
      case "Home": if (trayuser === "TrayMenu")
        return (<>

          <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">

            <div class="offcanvas-body">
              <nav className={drawerClasses}>
                <Router>
                  <button class="closebtn" onClick={this.handleClose}>&times;</button>
                  <div className="  td__Prodheader-content prod-text" onClick={(e) => this.handleClick(e, "Helios")}>

                    <Link to="/Helios" >
                      <img
                        src={icon1}
                        alt="Helios"
                      />
                      <h3 >Helios</h3>
                      <p>Vision platform</p>
                    </Link>
                  </div>
                  <div className="  td__Prodheader-content  prod-text" onClick={(e) => this.handleClick(e, "Theia")}>
                    <Link to="/Theia">
                      <img
                        src={icon2}
                        alt="Theia"
                      />

                      <h3 >Theia</h3>
                      <p>Data mesh portal </p>
                    </Link>

                  </div>
                  <div className="  td__Prodheader-content  prod-text" onClick={(e) => this.handleClick(e, "Plutus")}>
                    <Link to="/Plutus">
                      <img
                        src={icon3}
                        alt="Plutus"
                      />

                      <h3 >Plutus </h3>
                      <p>Data product catalog</p>
                    </Link>

                  </div>
                </Router>

              </nav>
            </div>
          </div>
          <Home
            switchComponent={this.switchComponent}
            setOnLoad={this.setOnLoad}

          /> </>
        )
      else return (<Home
        switchComponent={this.switchComponent}
        setOnLoad={this.setOnLoad}

      />);
      case "contact":
        if (trayuser === "TrayMenu")
          return (<>
           <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">


              <div class="offcanvas-body">
                <nav className={drawerClasses}>
                  <Router>
                    <button class="closebtn" onClick={this.handleClose}>&times;</button>
                    <div className="  td__Prodheader-content prod-text" onClick={(e) => this.handleClick(e, "Helios")}>

                      <Link to="/Helios" >
                        <img
                          src={icon1}
                          alt="Helios"
                        />
                        <h3 >Helios</h3>
                        <p>Vision platform</p>
                      </Link>
                    </div>
                    <div className="  td__Prodheader-content  prod-text" onClick={(e) => this.handleClick(e, "Theia")}>
                      <Link to="/Theia">
                        <img
                          src={icon2}
                          alt="Theia"
                        />

                        <h3 >Theia</h3>
                        <p>Data mesh portal </p>
                      </Link>

                    </div>
                    <div className="  td__Prodheader-content  prod-text" onClick={(e) => this.handleClick(e, "Plutus")}>
                      <Link to="/Plutus">
                        <img
                          src={icon3}
                          alt="Plutus"
                        />

                        <h3 >Plutus </h3>
                        <p>Data product catalog</p>
                      </Link>

                    </div>
                  </Router>

                </nav>
              </div>
            </div>
            <Contact
              switchComponent={this.switchComponent}
              setOnLoad={this.setOnLoad}

            /> </>
          )
        else return (<Contact
          switchComponent={this.switchComponent}
          setOnLoad={this.setOnLoad}

        />);
      case "Services":
        if (trayuser === "TrayMenu")
          return (<>
            <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">


              <div class="offcanvas-body">
                <nav className={drawerClasses}>
                  <Router>
                    <button class="closebtn" onClick={this.handleClose}>&times;</button>
                    <div className="  td__Prodheader-content prod-text" onClick={(e) => this.handleClick(e, "Helios")}>

                      <Link to="/Helios" >
                        <img
                          src={icon1}
                          alt="Helios"
                        />
                        <h3 >Helios</h3>
                        <p>Vision platform</p>
                      </Link>
                    </div>
                    <div className="  td__Prodheader-content  prod-text" onClick={(e) => this.handleClick(e, "Theia")}>
                      <Link to="/Theia">
                        <img
                          src={icon2}
                          alt="Theia"
                        />

                        <h3 >Theia</h3>
                        <p>Data mesh portal </p>
                      </Link>

                    </div>
                    <div className="  td__Prodheader-content  prod-text" onClick={(e) => this.handleClick(e, "Plutus")}>
                      <Link to="/Plutus">
                        <img
                          src={icon3}
                          alt="Plutus"
                        />

                        <h3 >Plutus </h3>
                        <p>Data product catalog</p>
                      </Link>

                    </div>
                  </Router>

                </nav>
              </div>
            </div>
            <Services
              switchComponent={this.switchComponent}
              setOnLoad={this.setOnLoad}

            /> </>
          )
        else return (<Services
          switchComponent={this.switchComponent}
          setOnLoad={this.setOnLoad}

        />);
      case "Company":
        if (trayuser === "TrayMenu")
          return (<>
            <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">


              <div class="offcanvas-body">
                <nav className={drawerClasses}>
                  <Router>
                    <button class="closebtn" onClick={this.handleClose}>&times;</button>
                    <div className="  td__Prodheader-content prod-text" onClick={(e) => this.handleClick(e, "Helios")}>

                      <Link to="/Helios" >
                        <img
                          src={icon1}
                          alt="Helios"
                        />
                        <h3 >Helios</h3>
                        <p>Vision platform</p>
                      </Link>
                    </div>
                    <div className="  td__Prodheader-content  prod-text" onClick={(e) => this.handleClick(e, "Theia")}>
                      <Link to="/Theia">
                        <img
                          src={icon2}
                          alt="Theia"
                        />

                        <h3 >Theia</h3>
                        <p>Data mesh portal </p>
                      </Link>

                    </div>
                    <div className="  td__Prodheader-content  prod-text" onClick={(e) => this.handleClick(e, "Plutus")}>
                      <Link to="/Plutus">
                        <img
                          src={icon3}
                          alt="Plutus"
                        />

                        <h3 >Plutus </h3>
                        <p>Data product catalog</p>
                      </Link>

                    </div>
                  </Router>

                </nav>
              </div>
            </div>
            <Company
              switchComponent={this.switchComponent}
              setOnLoad={this.setOnLoad}

            /> </>
          )
        else return (<Company
          switchComponent={this.switchComponent}
          setOnLoad={this.setOnLoad}

        />);

      case "Helios":

        if (trayuser === "TrayMenu")
          return (<>
            <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">


              <div class="offcanvas-body">
                <nav className={drawerClasses}>
                  <Router>
                    <button class="closebtn" onClick={this.handleClose}>&times;</button>
                    <div className="  td__Prodheader-content prod-text" onClick={(e) => this.handleClick(e, "Helios")}>

                      <Link to="/Helios" >
                        <img
                          src={icon1}
                          alt="Helios"
                        />
                        <h3 >Helios</h3>
                        <p>Vision platform</p>
                      </Link>
                    </div>
                    <div className="  td__Prodheader-content  prod-text" onClick={(e) => this.handleClick(e, "Theia")}>
                      <Link to="/Theia">
                        <img
                          src={icon2}
                          alt="Theia"
                        />

                        <h3 >Theia</h3>
                        <p>Data mesh portal </p>
                      </Link>

                    </div>
                    <div className="  td__Prodheader-content  prod-text" onClick={(e) => this.handleClick(e, "Plutus")}>
                      <Link to="/Plutus">
                        <img
                          src={icon3}
                          alt="Plutus"
                        />

                        <h3 >Plutus </h3>
                        <p>Data product catalog</p>
                      </Link>

                    </div>
                  </Router>

                </nav>
              </div>
            </div>
            <Helios
              switchComponent={this.switchComponent}
              setOnLoad={this.setOnLoad}

            /> </>
          )
        else return (<Helios
          switchComponent={this.switchComponent}
          setOnLoad={this.setOnLoad}

        />);
      case "Theia":
        if (trayuser === "TrayMenu")
          return (<>
           <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">


              <div class="offcanvas-body">
                <nav className={drawerClasses}>
                  <Router>
                    <button class="closebtn" onClick={this.handleClose}>&times;</button>
                    <div className="  td__Prodheader-content prod-text" onClick={(e) => this.handleClick(e, "Helios")}>

                      <Link to="/Helios" >
                        <img
                          src={icon1}
                          alt="Helios"
                        />
                        <h3 >Helios</h3>
                        <p>Vision platform</p>
                      </Link>
                    </div>
                    <div className="  td__Prodheader-content  prod-text" onClick={(e) => this.handleClick(e, "Theia")}>
                      <Link to="/Theia">
                        <img
                          src={icon2}
                          alt="Theia"
                        />

                        <h3 >Theia</h3>
                        <p>Data mesh portal </p>
                      </Link>

                    </div>
                    <div className="  td__Prodheader-content  prod-text" onClick={(e) => this.handleClick(e, "Plutus")}>
                      <Link to="/Plutus">
                        <img
                          src={icon3}
                          alt="Plutus"
                        />

                        <h3 >Plutus </h3>
                        <p>Data product catalog</p>
                      </Link>

                    </div>
                  </Router>

                </nav>
              </div>
            </div>
            <Theia
              switchComponent={this.switchComponent}
              setOnLoad={this.setOnLoad}

            /> </>
          )
        else return (<Theia
          switchComponent={this.switchComponent}
          setOnLoad={this.setOnLoad}

        />);
      case "Plutus":
        if (trayuser === "TrayMenu")
          return (<>
            <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">


              <div class="offcanvas-body">
                <nav className={drawerClasses}>
                  <Router>
                    <button class="closebtn" onClick={this.handleClose}>&times;</button>
                    <div className="  td__Prodheader-content prod-text" onClick={(e) => this.handleClick(e, "Helios")}>

                      <Link to="/Helios" >
                        <img
                          src={icon1}
                          alt="Helios"
                        />
                        <h3 >Helios</h3>
                        <p>Vision platform</p>
                      </Link>
                    </div>
                    <div className="  td__Prodheader-content  prod-text" onClick={(e) => this.handleClick(e, "Theia")}>
                      <Link to="/Theia">
                        <img
                          src={icon2}
                          alt="Theia"
                        />

                        <h3 >Theia</h3>
                        <p>Data mesh portal </p>
                      </Link>

                    </div>
                    <div className="  td__Prodheader-content  prod-text" onClick={(e) => this.handleClick(e, "Plutus")}>
                      <Link to="/Plutus">
                        <img
                          src={icon3}
                          alt="Plutus"
                        />

                        <h3 >Plutus </h3>
                        <p>Data product catalog</p>
                      </Link>

                    </div>
                  </Router>

                </nav>
              </div>
            </div>
            <Plutus
              switchComponent={this.switchComponent}
              setOnLoad={this.setOnLoad}

            /> </>
          )
        else return (<Plutus
          switchComponent={this.switchComponent}
          setOnLoad={this.setOnLoad}

        />);
      default:
        break;
    }
  };
  switchComponent = status => {
    if(status==="login")
    { var url = "https://master.d36f8cafq27e48.amplifyapp.com/" ;
    window.open(url, "_blank"); 
    return;}
    this.setState({ trayuser: status });
    this.setState({ status });
    console.log("status = ", status);
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
  settrayUser(trayuser) {
    mContext.setState({ trayuser: trayuser });
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
    let { links, trayuser } = this.state;
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
                      
                      {key === 1 ?
                        <NavLink active={element.isActive} href={element.href} className={element.className}
                          onClick={() => { if (trayuser === "TrayMenu") this.setState({ trayuser: this.state.status }); else { this.setState({ trayuser: "TrayMenu" }); } }}>{element.text}</NavLink> 
                         :
                        <NavLink active={element.isActive} href={element.href} className={element.className}
                          onClick={() => { mContext.switchComponent(element.source); }}>{element.text}</NavLink>}
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