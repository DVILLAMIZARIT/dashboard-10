import React from 'react';

class TopCompaniesComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row placeholders">
        <div className="col-xs-6 col-sm-3 placeholder">
          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail" />
          <h4>Company A</h4>
          <span className="text-muted">1.000.000 BitCoins</span>
        </div>
        <div className="col-xs-6 col-sm-3 placeholder">
          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail" />
          <h4>Company B</h4>
          <span className="text-muted">999.999 BitCoins</span>
        </div>
        <div className="col-xs-6 col-sm-3 placeholder">
          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail" />
          <h4>Company C</h4>
          <span className="text-muted">888.888 BitCoins</span>
        </div>
        <div className="col-xs-6 col-sm-3 placeholder">
          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail" />
          <h4>Company D</h4>
          <span className="text-muted">777.777 BitCoins</span>
        </div>
      </div>
    );
  }
}

export default TopCompaniesComponent;
// propTypes and defaultProps are defined as properties on the constructor
TopCompaniesComponent.propTypes = {  };
TopCompaniesComponent.defaultProps = {  };