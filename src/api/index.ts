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

  async fetchDeBible() {
    return await AppAPI.init()
      .get(Config.env.baseURL + '/bible-de.json');
  },

  async fetchEnBible() {
    return await AppAPI.init()
      .get(Config.env.baseURL + '/bible-en.json');
  }

};

export default AppAPI;
