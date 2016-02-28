import React from 'react';

class ReportsComponent extends React.Component {

  constructor(props) {
    super(props);
    // this.customers = new Customers().load();
  }

  render() {
    return (
      <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h1 className="page-header">Reports</h1>
        <p>Work has to be done here.</p>
      </div>
    );
  }
}

export default ReportsComponent;
// propTypes and defaultProps are defined as properties on the constructor
ReportsComponent.propTypes = {  };
ReportsComponent.defaultProps = {  };