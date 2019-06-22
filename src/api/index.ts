import axios from 'axios';

import config from '../config';

const TOKEN_KEY = 'token';
class API {

  static async executeGQLQuery<T>(queryBuilder: Function, retry: number = 1): Promise<T | undefined> {
    try {
      if (retry < 3) {
        const token = localStorage.getItem(TOKEN_KEY);
        const response = await axios
          .post(
            `${config.env.baseURL}/graphql`,
            { query: queryBuilder() },
            { headers: { Authorization: `Bearer ${token}` } }
          );

        return response.data.data;
      }
    } catch (err) {
      if (err.response.status === 401) {
        const tokenResponse = await axios.post(`${config.env.baseURL}/session`);
        localStorage.setItem(TOKEN_KEY, tokenResponse.data.token);
        return API.executeGQLQuery(queryBuilder, retry + 1);
      }
    }
  }

}

export default API;
