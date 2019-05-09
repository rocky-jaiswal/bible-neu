export default class QueryBuilder {

  static greet = (to: string) => `{
    greet(to: "${to}") {
      response
    }
  }`

  static getVersesForBookAndChapter = (book: string, chapter: number) => `{
    getVersesForBookAndChapter(book: "${book}", chapter: ${chapter}) {
      verse
      text
      language
    }
  }`

}
