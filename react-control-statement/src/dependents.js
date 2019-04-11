import React from 'react';

export default ({ name }) => (
      <div>        
          <div className="form-group">
            <label for="dependentCount">No. of Dependents</label>
            <input type="number" min="0" className="form-control" id="dependentCount" />
          </div>
          <div className="form-group">
            <label for="dependent1">Dependent 1</label>
            <input className="form-control" id="dependent1" />
          </div>
          <div className="form-group">
            <label for="dependent2">Dependent 2</label>
            <input className="form-control" id="dependent2"/>
          </div>
        </div>
);
