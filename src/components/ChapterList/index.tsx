import * as React from 'react';

import { LocaleEnum } from '../../constants/enums';

import './styles.css';

interface Props {
  selectedLocale: LocaleEnum;
  deBookNames: string[];
  enBookNames: string[];
}

const ChapterList: React.SFC<Props> = (props) => {
  const deBooks = () => {
    return props.deBookNames.map((b, i) => {

      return <div className="book" key={i}>{b}</div>;
    });
  };

  const enBooks = () => {
    return props.enBookNames.map((b, i) => {

      return <div className="book" key={i}>{b}</div>;
    });
  };

  return (
    <div className="chapterList">
      {props.selectedLocale === LocaleEnum.de ? deBooks() : enBooks()}
    </div>
  );
};

export default ChapterList;
