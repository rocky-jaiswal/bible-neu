import * as React from 'react';

import './styles.css';

interface Props {
  message?: string;
}

const ErrorMessage: React.SFC<Props> = (props) => {
  return (
    <div className="error">
      <p>Error!! {props.message}</p>
    </div>
  );
};

export default ErrorMessage;
