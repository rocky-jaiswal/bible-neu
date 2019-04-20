import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  selectedBook: string;
  chapterList: number[];
}

const ChapterList = (props: Props) => {

  const chapters = () => {
    return props.chapterList.map((c, i) => {
      return (
        <div className="book" key={i}>
          <Link to={`/books/${props.selectedBook}/chapter/${c}`}>{c}</Link>
        </div>
      );
    });
  };

  return (
    <div className="chapterList">
      {chapters()}
    </div>
  );
};

export default ChapterList;
