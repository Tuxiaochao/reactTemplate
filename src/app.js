import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import Page1 from './pages/page1/page1.jsx';

ReactDOM.render((
  <BrowserRouter forceRefresh={'pushState' in window.history}>
    <App>
      <Route path="/page1" component={Page1} />
    </App>
  </BrowserRouter>),
  document.getElementById("root")
);

