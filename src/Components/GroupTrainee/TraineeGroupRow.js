import React, { Component } from 'react';

class TraineeGroupRow extends Component {
  render() {
    const groupIndex = 1; // TODO
    const trainee = ['lintao', 'amons', 'ccccc']; // TODO
    return (
      <div className="trainee-group-row">
        <div className="group-name">{groupIndex}组</div>
        <div className="trainee-names">
          {trainee.map((traineeName, index) => (
            <div className="trainee-name" key={index}>
              `{index}.{traineeName}`
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TraineeGroupRow;
