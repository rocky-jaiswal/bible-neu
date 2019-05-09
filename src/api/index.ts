import axios from 'axios';

import { Verse } from '../constants/types';
import config from '../config';

class QueryBuilder {

  static getVersesForBookAndChapter = (book: string, chapter: number) => `{
    getVersesForBookAndChapter(book: "${book}", chapter: ${chapter}) {
      verse
      text
      language
    }
  }`

}

const TOKEN_KEY = 'token';
class API {

  async fetchBooks(book: string, chapter: number): Promise<Verse[]> {
    const token = await API.getToken();
    const response = await axios
      .post(
        `${config.env.baseURL}/graphql`,
        { query: QueryBuilder.getVersesForBookAndChapter(book, chapter) },
        { headers: { Authorization: `Bearer ${token}` } }
      );

    return response.data.data.getVersesForBookAndChapter;
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
