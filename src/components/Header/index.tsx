import * as React from 'react';
import { Link } from 'react-router-dom';

import { ActionType } from '../../constants/types';
import LoadingSpinner from '../LoadingSpinner';

import './styles.css';

interface Props {
  loading: boolean;
  toggleRightSidebar(): ActionType<string>;
}

const Header: React.SFC<Props> = (props) => {
  return (
    <div className="header headerFixed">
      <div className="headerContainer">
        <h1>
          <Link to="/">SimpleBible</Link>
        </h1>
        <LoadingSpinner visible={props.loading} />
        <div className="logo" onClick={() => props.toggleRightSidebar()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="10" y1="12" x2="40" y2="12"/>
            <line x1="10" y1="24" x2="40" y2="24"/>
            <line x1="10" y1="36" x2="40" y2="36"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
