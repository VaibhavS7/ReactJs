import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';


class App extends Component {
  state = {}
  componentDidMount(){
    this.onRouteChanged();
  }
  render(){

  }
}

export default (withRouter(App));