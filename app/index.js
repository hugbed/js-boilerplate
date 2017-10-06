// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';

import Timer from './components/Timer';

window.onload = () => {
  ReactDOM.render(
    <div>
      <Timer hours={3} minutes={0} seconds={23} />
    </div>,
    document.getElementById('root')
  );
}
