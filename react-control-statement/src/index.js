import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.css';

class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      name: '',
      maritalStatus: false,
      dependents: []
    };
  }

  maritalStatusChange = event => this.setState({maritalStatus: event.target.checked});
 
  updateCount = event => {
    const value = parseInt(event.target.value, 10);
    this.setState({dependents: Array(value).fill({name:''})})
    };

  render() {
    return (
      <section className="jumbotron">
        <h1 className="text-info">Constrol statements demo</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input className="form-control" id="name" />
        </div>
        <div className="form-group form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" onChange={this.maritalStatusChange}/> Married
          </label>
        </div>
        
        {/* Dependent view */}
        { this.state.maritalStatus &&
          <div>
            <div className="form-group">
              <label htmlFor="dependentCount">No. of Dependents</label>
              <input type="number" min="0" className="form-control" id="dependentCount" onChange={this.updateCount} />
            </div>
            <DependentsView dependents={this.state.dependents} />
          </div>
        }
      </section>
    );
  }
}

function DependentsView(props) {
  const {dependents} = props;
  return (
    dependents.map((dependent, i) => (
      <div className="form-group" key={i}>
        <label htmlFor="dependent{i+1}">Dependent {i+1}</label>
        <input className="form-control" id="dependent{i+1}"/>
     </div>
    ))     
  );
}

render(<App />, document.getElementById('root'));