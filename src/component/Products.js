import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";

import icon1 from '../image/icon1.png';
import icon2 from '../image/icon2.png';
import  icon3 from '../image/icon3.png';

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      showing: true
    };
    this.openModal = this.openModal.bind(this);
  }
  componentWillMount() {
    window.scrollTo(0, 0);
  }
  handleClick(e, type) {
    e.preventDefault();
    const { showing } = this.state;
    switch (type) {
        case "Helios":this.props.switchComponent("Helios");
        this.setState({ showing: !showing });
           break;
        case "Theia":this.props.switchComponent("Theia");
        this.setState({ showing: !showing });
            break;
        case "Plutus":this.props.switchComponent("Plutus");
        this.setState({ showing: !showing });
             break;
        default:
            break;
    }

}
  openModal(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isOpen: !prevState.open
    }));
  }

  render() {
    const { showing } = this.state;
    return (

      
      <div className=" td__Prodheader section__padding" id="home" > 
        <Router>
        <div className="td__Prodheader-content prod-text" onClick={(e) => this.handleClick(e, "Helios")}>
        
        <Link to="/Helios" >
          <img
            src={icon1}
            alt="Helios"
          />       
          <h3 >Helios</h3>
          <p>Machine vision platform</p>
          </Link>
          </div>
          <div className="td__Prodheader-content  prod-text" onClick={(e) => this.handleClick(e, "Theia")}>
          <Link to="/Theia">
          <img
            src={icon2}
            alt="Theia"
          />
       
            <h3 >Theia</h3>
            <p>Data mesh portal </p>
            </Link>
            
          </div>
          <div className="td__Prodheader-content  prod-text" onClick={(e) => this.handleClick(e, "Plutus")}>
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
          
        </div>
       
        
        );
  }
}
