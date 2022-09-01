import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";
import icon1 from '../image/icon1.png';
import icon2 from '../image/icon2.png';
import  icon3 from '../image/icon3.png';
import Theia from './Theia';
import Helios from './Helios';
import Plutus from './Plutus';
export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }
  componentWillMount() {
    window.scrollTo(0, 0);
  }
  openModal(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isOpen: !prevState.open
    }));
  }

  render() {
    return (
      <Router>
      <div className="td__header section__padding" id="home">
        <div className="td__header-content text-center prod-text">
        <Link to="/Helios">
          <img
            src={icon1}
            alt="Helios"
          />
        </Link>
        
          <h3 >Helios</h3>
          <p>Machine vision platform</p>
          
          </div>
          <div className="td__header-content text-center prod-text">
          <Link to="/Theia">
          <img
            src={icon2}
            alt="Theia"
          />
        </Link>
            <h3 >Theia</h3>
            <p>Data mesh portal </p>
            
          </div>
          <div className="td__header-content text-center prod-text">
          <Link to="/Plutus">
          <img
            src={icon3}
            alt="Plutus"
          />
        </Link>
            <h3 >Plutus </h3>
            <p>Data product catalog</p>
            
          </div>
        </div>
        </Router>
        );
  }
}
