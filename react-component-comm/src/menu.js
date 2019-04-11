import React, { Component } from 'react';
import { render } from 'react-dom';

 export class Menu extends Component {
  constructor(props) {
    super(props);
  }
  selectMenu(pageName){
    this.props.onMenuSelection(pageName);
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">  
        <a className="navbar-brand" target="_blank" href="http://www.techsams.com/blog.html">
          Sam
        </a> 
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => this.selectMenu('home')}>Home</a> 
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => this.selectMenu('about')}>About</a> 
          </li>
        </ul>   
      </nav>
    );
  }
}