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
    this.groupTrainees();
  }

  getAllTrainees = async () => {
    const trainees = await TraineeApi.getAll();
    const traineeNames = trainees.map((traineeObj) => traineeObj.name);
    this.setState({ trainees: traineeNames });
  };

  shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      // eslint-disable-next-line no-param-reassign
      array[currentIndex] = array[randomIndex];
      // eslint-disable-next-line no-param-reassign
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  groupTrainees = () => {
    const { trainees } = this.state;
    const groups = [[], [], [], [], [], []];
    if (trainees) {
      const shuffledTrainees = this.shuffle([...trainees]);
      shuffledTrainees.forEach((trainee, index) => {
        groups[index % 6].push(trainee);
      });
    }
    this.setState({ groups });
  };

  render() {
    const { groups, trainees } = this.state;
    return (
      <div className="groups">
        <section className="groups-header">
          <h3 className="groups-header-title">分组列表</h3>
          <button type="button" onClick={this.groupTrainees}>
            分组学员
          </button>
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
