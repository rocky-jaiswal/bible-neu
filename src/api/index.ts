import axios from 'axios';

import Config from '../config';

const AppAPI = {

  init() {
    return axios.create({
      headers: {
        common: {
          Authorization: localStorage.getItem('accessToken') || ''
        }
      }
    });
  },

  async fetchInfo() {
    return await AppAPI.init()
      .get(Config.env.baseURL + '/api/info');
  }

};

export default AppAPI;
