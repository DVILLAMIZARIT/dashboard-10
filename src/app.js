import React from 'react';
import ReactDOM from 'react-dom';

// this navigation should stay independent from the app
import MainNavigation from './components/mainNavigation.component';
import App from './components/app.component';

ReactDOM
  .render(
    <MainNavigation />, document.getElementById('main-navigation')
  );
ReactDOM
  .render(
    <App />, document.getElementById('app')
  );
