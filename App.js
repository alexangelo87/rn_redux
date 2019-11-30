import React from 'react';
import Home from './components/home';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

const App = props => {
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <Home />
    </Provider>
  );
};

export default App;
