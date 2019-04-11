import React, { Component } from 'react';
import { render } from 'react-dom';
import { Menu } from './menu';
import { Body } from './body';

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pageName: undefined
    }
  }

  onMenuSelection = (pageName) =>{
    this.setState({pageName});
  }

  render() {
    return (
      <section>
        <Menu onMenuSelection={this.onMenuSelection}/>
        <Body page={this.state.pageName} />
      </section>
    );
  }
}

render(<App />, document.getElementById('root'));
