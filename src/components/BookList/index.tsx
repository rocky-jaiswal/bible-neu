import * as React from 'react';
import { Immutable } from 'seamless-immutable';
import { Link } from 'react-router-dom';

import './styles.css';

interface Props {
  bookNames: Immutable<string[]>;
  grid?: boolean;
  toggleRightSidebar(): void;
}

const BookList = (props: Props) => {

  const books = (booknames: Immutable<string[]>) => {
    return booknames.asMutable().map((b, i) => {
      return (
        <div className="book" key={i} onClick={props.toggleRightSidebar} >
          <Link to={`/books/${b}`}>{b}</Link>
        </div>
      );
    });
  };

  return (
    <div className={props.grid ? 'chapterlist-grid' : 'chapterlist'}>
      {books(props.bookNames)}
    </div>
  );
};

export default BookList;
