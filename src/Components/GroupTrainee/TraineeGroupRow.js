import React, { Component } from 'react';

class TraineeGroupRow extends Component {
  render() {
    const { groupTrainee, groupIndex } = this.props;
    return (
      <div className="trainee-group-row">
        <div className="group-name">{groupIndex + 1}组</div>
        <div className="trainee-names">
          {groupTrainee.map((traineeName, index) => (
            <div className="trainee-name" key={index}>
              {index + 1}.{traineeName}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TraineeGroupRow;
