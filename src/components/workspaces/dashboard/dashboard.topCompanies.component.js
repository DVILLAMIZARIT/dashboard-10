import React from 'react';

class TopCompaniesComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row placeholders">
        {this.props.topCompanies.map( company =>
          <div key={company.name} className="col-xs-6 col-sm-3 placeholder">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail" />
            <h4>{company.name}</h4>
            <span className="text-muted">{company.sales} BitCoins</span>
          </div>
        )}
      </div>
    );
  }
}

export default TopCompaniesComponent;
// propTypes and defaultProps are defined as properties on the constructor
TopCompaniesComponent.propTypes = { topCompanies: React.PropTypes.array };
TopCompaniesComponent.defaultProps = {
  topCompanies: [ {name: 'CompanyA', sale: '1000'}, {name: 'CompanyB', sale: '1000'}, {name: 'CompanyC', sale: '1000'}, {name: 'CompanyD', sale: '1000'} ]
};