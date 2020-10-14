import axios from 'axios';
import TraineeApi from './trainee';

jest.mock('axios');
jest.mock('./base', () => 'base.url.com');

describe('TraineeApi', () => {
  describe('getAllTrainees', () => {
    it('should make a post to /trainees', async () => {
      axios.get.mockResolvedValue({ trainees: {} });
      await TraineeApi.getAll();

      // TODO feedback: 这两个测试都是测试了TraineeApi.getAll的调用，所以可以合并
      expect(axios.get).toHaveBeenCalledWith('base.url.com/trainees');
    });

    it('returns trainees information on a successful response', async () => {
      const traineesData = [];
      axios.get.mockResolvedValue({ trainees: traineesData });

      const result = await TraineeApi.getAll();

      expect(result).toBe(traineesData);
    });
  });
});
