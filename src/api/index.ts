import axios from 'axios';

import config from '../config';

const TOKEN_KEY = 'token';
class API {

  async executeGQLQuery<T>(queryName: string, queryBuilder: Function): Promise<T> {
    const token = await API.getToken();
    const response = await axios
      .post(
        `${config.env.baseURL}/graphql`,
        { query: queryBuilder() },
        { headers: { Authorization: `Bearer ${token}` } }
      );

    return response.data.data[queryName];
  }

  private static async getToken(): Promise<String> {
    if (!localStorage.getItem(TOKEN_KEY)) {
      const tokenResponse = await axios.post(`${config.env.baseURL}/session`);
      localStorage.setItem(TOKEN_KEY, tokenResponse.data.token);
    }
    return localStorage.getItem(TOKEN_KEY)!;
  }

}

export default new API();
