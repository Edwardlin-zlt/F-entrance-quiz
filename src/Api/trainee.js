import axios from 'axios';
import baseURL from './base';

const TraineeApi = {
  getAll: async () => {
    const result = await axios.get(`${baseURL}/trainees`);
    return result.data.trainees;
  },
};

export default TraineeApi;
