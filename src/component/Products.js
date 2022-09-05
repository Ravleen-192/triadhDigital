import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";

import icon1 from '../image/icon1.png';
import icon2 from '../image/icon2.png';
import icon3 from '../image/icon3.png';
import Helios from "./Helios";

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
    <Helios />

    );
  }
}
