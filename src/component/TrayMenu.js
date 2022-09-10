import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import './TrayMenu.css';
import icon1 from '../image/icon1.png';
import icon2 from '../image/icon2.png';
import icon3 from '../image/icon3.png';

export default class TrayMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      showing: true
    };
   
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }
  
 
  handleClick(e, type) {
    e.preventDefault();
    const { showing } = this.state;
    switch (type) {
      case "Helios": this.props.switchComponent("Helios");
        this.setState({ showing: !showing });
        break;
      case "Theia": this.props.switchComponent("Theia");
        this.setState({ showing: !showing });
        break;
      case "Plutus": this.props.switchComponent("Plutus");
        this.setState({ showing: !showing });
        break;
      default:
        break;
    }

  }
  
  closeNav() {
    this.setState({ showing:false});
    this.props.onBackButtonEvent();
  }
  render() {
    const { showing } = this.state;
    let drawerClasses = 'side-drawer';
    if (showing) {
      drawerClasses = 'side-drawer open row';
    }
     {/*<div className=" row text-center vcenter comp-text " > */}
    return (
      
     
      <nav className={drawerClasses}>
        <Router>
        <a href="javascript:void(0)" class="closebtn" onclick={this.props.onBackButtonEvent}>&times;</a>
        <div className="  td__Prodheader-content prod-text" onClick={(e) => this.handleClick(e, "Helios")}>
        
        <Link to="/Helios" >
          <img
            src={icon1}
            alt="Helios"
          />       
          <h3 >Helios</h3>
          <p>Machine vision platform</p>
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
    
    );
  }
}