import React from 'react';
import AppContext from '../App.js';

export default class Child extends React.Component {
  static contextType = AppContext;

  componentDidMount() {
    const user = this.context;

    console.log(user);
  }
  render() {
    return null;
  }
}
