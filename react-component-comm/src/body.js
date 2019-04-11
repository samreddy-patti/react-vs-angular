import React, { Component } from 'react';
import { render } from 'react-dom';

export class Body extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    const {page} = this.props;
    let element = <h5>Welcome to demo. Select menu.</h5>;
    if(page){
      element  = <span> You are in {page} page.</span>;
    }
    return (
      <section className="container pt-2">
        {element}
      </section>
    )
  }
}

