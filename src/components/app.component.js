import React from 'react';

import SideNavigation from './app.sideNavigation.component.js'
import DashboardComponent from './dashboard.component';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedNavItem: undefined
    };
    // No Autobinding see https://facebook.github.io/react/docs/reusable-components.html#no-autobinding
    this.handleNavItemClick = this.handleNavItemClick.bind(this);
  }

  // should recieve the clicked item as string
  handleNavItemClick(clickedItem) {
    this.setState({selectedNavItem: clickedItem});
  }

  render() {
    return (
      <div className="row">

        <SideNavigation
          selectedNavItem={this.state.selectedNavItem}
          handleClick={this.handleNavItemClick}
        />

        <DashboardComponent />

      </div>
    );
  }
}

export default AppComponent;
// propTypes and defaultProps are defined as properties on the constructor
AppComponent.propTypes = {  };
AppComponent.defaultProps = {  };