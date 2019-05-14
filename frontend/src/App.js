import React from 'react';
import 'antd/dist/antd.css'
import './App.css'

import TodoLayout from './containers/Layout'

import BaseRouter from './routes'
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <Router>
      <TodoLayout>
        <BaseRouter />
      </TodoLayout>
    </Router>     
    </div>
  );
}

export default App;
