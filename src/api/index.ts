import axios from 'axios';

import Config from '../config';

const AppAPI = {

  async fetchBooks() {
    return axios
      .post(Config.env.baseURL);
  }

};

export default AppAPI;
