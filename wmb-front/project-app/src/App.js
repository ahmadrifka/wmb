import React from 'react';
import './App.css';
import SingleLayout from './layouts/SingleLayout';
import { createStore } from 'redux';
import reducers from './modules/reducers';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={createStore(reducers)}>
      <SingleLayout/>
      </Provider>
    </div>
  );
}

export default App;
