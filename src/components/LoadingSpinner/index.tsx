import * as React from 'react';

import './styles.css';

interface Props {
  visible: boolean;
}

const LoadingSpinner = (props: Props) => {

  return (
    <div className={props.visible ? 'spinnerWrapper' : 'hidden'}>
      <div className="spinner" />
    </div>
  );

};

export default LoadingSpinner;
