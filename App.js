import React from 'react';
import Home from './components/home';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';

const App = props => {
  return (
    <Provider store={createStore(reducers)}>
      <Home />
    </Provider>
  );
};

export default App;
