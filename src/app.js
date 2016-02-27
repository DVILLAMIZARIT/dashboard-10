import React from 'react';
import ReactDOM from 'react-dom';
import Customers from './app/customers';
import DashboardComponent from './components/dashboard.component';

let customers = new Customers().load();
ReactDOM.render(
  <DashboardComponent customers={customers}/>, document.getElementById('app')
);
