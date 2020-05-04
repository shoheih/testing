import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import App from 'components/App';

ReactDOM.render(
  <Root>
    <App />
    <p>test</p>
  </Root>,
  document.querySelector('#root')
);