import React from 'react';
import ReactDOM from 'react-dom';

import WhiteBoardContainer from './containers/WhiteBoardContainer';

window.onload = () => {
  ReactDOM.render(
    <WhiteBoardContainer />,
    document.getElementById('app')
  );
};