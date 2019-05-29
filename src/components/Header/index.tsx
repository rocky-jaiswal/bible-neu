import * as React from 'react';
import { Link } from 'react-router-dom';

import LoadingSpinner from '../LoadingSpinner';

import './styles.css';

interface Props {
  loading: boolean;
  toggleRightSidebar(): void;
}

const Header = (props: Props) => {
  return (
    <div className="header headerFixed">
      <div className="headerContainer">
        <h1>
          <Link to="/">Simple Bible</Link>
        </h1>
        <LoadingSpinner visible={props.loading} />
        <div className="logo" onClick={() => props.toggleRightSidebar()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            stroke="#FEFEFE"
            strokeWidth="2"
          >
            <line x1="10" y1="10" x2="30" y2="10"/>
            <line x1="10" y1="19" x2="30" y2="19"/>
            <line x1="10" y1="28" x2="30" y2="28"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
