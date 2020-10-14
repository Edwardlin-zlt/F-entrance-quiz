import React, { Component } from 'react';
import TraineeGroupRow from '../../Components/GroupTrainee/TraineeGroupRow';
// TODO feedback: 代码运行失败，因为没有css这个文件
import TraineeApi from '../../Api/trainee';

// TODO feedback:组件划分不够合理，划分层次不够，导致所有的代码都在这个组件中，很难维护
class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainees: [],
      // TODO feedback: 不建议定义6个数组去维护数据，每次操作会非常麻烦，建议直接去操作后台反馈的groups列表
      groups: [[], [], [], [], [], []],
    };
  }

  async componentDidMount() {
    await this.getAllTrainees();
    // TODO feedback: 和需求不符，初始情况并不会分组
    this.groupTrainees();
  }

  getAllTrainees = async () => {
    const trainees = await TraineeApi.getAll();
    // TODO feedback: 后台直接反馈了name数据，不需要再map一次了
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
    // TODO feedback: trainees为数组，这种判断其实不起作用
    if (trainees) {
      // TODO feedback: 分组是在后台实现
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
        {/* // TODO feedback: 既然是groups-header，为什么不用header标签 */}
        <section className="groups-header">
          <h3 className="groups-header-title">分组列表</h3>
          <button type="button" onClick={this.groupTrainees}>
            分组学员
          </button>
        </section>
        <section className="groups-main">
          {groups.map((groupTrainee, index) => (
            // TODO feedback: 需求是希望后台直接返回组名，而不是前端通过index维护
            <TraineeGroupRow groupTrainee={groupTrainee} groupIndex={index} key={index} />
          ))}
        </section>
        <section className="groups-all-trainee">
          {/* // TODO feedback: 学员列表不应该包含在GroupList组件中，相互之间没有业务包含关系 */}
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
