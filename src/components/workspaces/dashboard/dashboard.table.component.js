import React from 'react';

class TableComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const customerList  = this.props.customers;

    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
          <tr>
            <th>#</th>
            <th>Company</th>
            <th>Account</th>
            <th>Last-Name</th>
            <th>First-Name</th>
            <th>Sum (BitCoins)</th>
          </tr>
          </thead>
          <tbody>
          {customerList.map(customer =>
            <tr key={customer.id}>
              <td>{customer.orderId}</td>
              <td>{customer.company}</td>
              <td>{customer.account}</td>
              <td>{customer.lastName}</td>
              <td>{customer.firstName}</td>
              <td>{customer.sum}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableComponent;
// propTypes and defaultProps are defined as properties on the constructor
TableComponent.propTypes = { customers: React.PropTypes.array };
TableComponent.defaultProps = { customers: [ ] };