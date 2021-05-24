import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import ChartDataManager from './Components/expenditureVisualization/ChartDataManager';
import configureStore from './State-Management/configureStore';

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
    <div className="App">
      <header>
        <img src={"https://centime.com/images/logo.png"} alt="logo" />
      </header>
        <ChartDataManager/>
    </div>
    </Provider>
  );
}

export default App;
