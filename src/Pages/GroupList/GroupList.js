import React, { Component } from 'react';
import TraineeGroupRow from '../../Components/GroupTrainee/TraineeGroupRow';
import './GroupList.css';
import TraineeApi from '../../Api/trainee';

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainees: [],
      groups: [[], [], [], [], [], []],
    };
  }

  async componentDidMount() {
    await this.getAllTrainees();
  }

  getAllTrainees = async () => {
    const trainees = await TraineeApi.getAll();
    const traineeNames = trainees.map((traineeObj) => traineeObj.name);
    this.setState({ trainees: traineeNames });
  };

  render() {
    const { groups, trainees } = this.state;
    return (
      <div className="groups">
        <section className="groups-header">
          <h3 className="groups-header-title">分组列表</h3>
          <button type="button">分组学员</button>
        </section>
        <section className="groups-main">
          {groups.map((groupTrainee, index) => (
            <TraineeGroupRow groupTrainee={groupTrainee} groupIndex={index} key={index} />
          ))}
        </section>
        <section className="groups-all-trainee">
          <h3>学员列表</h3>
          {trainees &&
            trainees.map((traineeName, index) => (
              <span className="trainee-name" key={index}>
                {index + 1}.{traineeName}
              </span>
            ))}
        </section>
      </div>
    );
  }
}

export default GroupList;
