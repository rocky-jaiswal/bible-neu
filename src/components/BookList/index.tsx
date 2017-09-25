import * as React from 'react';
import { Link } from 'react-router-dom';

import { LocaleEnum } from '../../constants/enums';

import './styles.css';

interface Props {
  selectedLocale: LocaleEnum;
  deBookNames: string[];
  enBookNames: string[];
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
      {props.selectedLocale === LocaleEnum.de ?
        books(props.deBookNames) : books(props.deBookNames)}
    </div>
  );
};

export default BookList;
