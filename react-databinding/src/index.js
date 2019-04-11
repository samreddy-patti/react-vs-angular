import React, { Component } from 'react';
import { render } from 'react-dom';
import Message from './message';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
    
  }

  updateName(newName){
    this.setState(
      {
        name: newName
      }
    );
  }

  render() {
    return (
      <section>
        <div className="jumbotron text-center">
        <h1 className="text-info">Data binding demo</h1>
          <div className="form-group">
            <input className="form-control" placeholder="Enter your name" value={this.state.name} onChange={e => this.updateName(e.target.value)}
              />
          </div>
        </div>

        <div className="text-center">
          <Message name={this.state.name} />
        </div>
      </section>
    );
  }
}

render(<App />, document.getElementById('root'));
