/* eslint-disable import/order */
import React from 'react';
import ReactDOM from 'react-dom';
// component file
import TodoContainer from './functionBased/components/TodoContainer';

// stylesheet
import './functionBased/App.css';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
