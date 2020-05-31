import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import async from 'middlewares/async';
import ReduxThunk from 'middlewares/redux-thunk';
import stateValidator from 'middlewares/stateValidator';
import reducers from 'reducers';

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(ReduxThunk, stateValidator)
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}