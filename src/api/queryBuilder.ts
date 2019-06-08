export default class QueryBuilder {

  static greet = (to: string) => `{
    greet(to: "${to}") {
      response
    }
  }`

  static getAllBooksAndChapters = () => `{
    getAllBooksAndChapters {
      book
      chapterCount
    }
  }`

  static getVersesForBookAndChapter = (book: string, chapter: number) => `{
    verses(book: "${book}", chapter: ${chapter}) {
      verseNumber
      text
      language
    }
  }`

}
