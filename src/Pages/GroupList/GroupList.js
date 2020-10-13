import React, { Component } from 'react';
import TraineeGroupRow from '../../Components/GroupTrainee/TraineeGroupRow';

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO trainee: [],
      groups: [['asd', 'asdf'], ['asd'], ['asd'], ['asd'], ['asd'], []],
    };
  }

  render() {
    const { groups } = this.state;
    return (
      <div>
        <div className="list-title">
          <h3>分组列表</h3>
          <button type="button">分组学员</button>
        </div>
        {groups.map((groupTrainee, index) => (
          <TraineeGroupRow groupTrainee={groupTrainee} groupIndex={index} key={index} />
        ))}
      </div>
    );
  }
}

export default GroupList;
