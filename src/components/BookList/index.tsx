import * as React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

interface Props {
  bookNames: string[];
}

const BookList: React.SFC<Props> = (props) => {

  const books = (booknames: string[]) => {
    return booknames.map((b, i) => {
      return (
        <div className="book" key={i}>
          <Link to={`/books/${b}`}>{b}</Link>
        </div>
      );
    });
  };

  return (
    <div className="chapterList">
      {books(props.bookNames)}
    </div>
  );
};

export default BookList;
