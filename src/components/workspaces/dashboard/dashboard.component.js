import React from 'react';

import Customers from '../../../app/customers';

import TopCompanies from './dashboard.topCompanies.component';
import Table from './dashboard.table.component';

class DashboardComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const customers = new Customers('https://mock');

    return (
      <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h1 className="page-header">Dashboard</h1>

        <TopCompanies topCompanies={customers.getTopComopanies()}/>

        <h2 className="sub-header">Section title</h2>

        <Table customers={customers.getCustomerObjectList()} />

      </div>
    );
  }
}

export default DashboardComponent;
// propTypes and defaultProps are defined as properties on the constructor
DashboardComponent.propTypes = {  };
DashboardComponent.defaultProps = {  };