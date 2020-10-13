import axios from 'axios';
import baseURL from './base';

const TraineeApi = {
  getAll: async () => {
    return axios.get(`${baseURL}/trainees`);
  },
};

export default TraineeApi;
