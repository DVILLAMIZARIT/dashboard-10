import React from 'react';

import SideNavigation from './app.sideNavigation.component.js'
import DashboardComponent from './workspaces/dashboard/dashboard.component';
import ReportsComponent from './workspaces/reports/reports.component';

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedNavItem: SideNavigation.defaultProps.selectedNavItem
    };
    // No Autobinding see https://facebook.github.io/react/docs/reusable-components.html#no-autobinding
    this.handleNavItemClick = this.handleNavItemClick.bind(this);
  }

  // should recieve the clicked item as string
  handleNavItemClick(clickedItem) {
    this.setState({selectedNavItem: clickedItem});
  }

  render() {

    const navItemList = SideNavigation.defaultProps.navItemList;
    var workspace;
    switch (this.state.selectedNavItem) {
      case navItemList[0]:
        workspace = <DashboardComponent />;
        break;
      case navItemList[1]:
        workspace = <ReportsComponent />;
        break;
      case navItemList[2]:
        workspace = <DashboardComponent />;
        break;
      case navItemList[3]:
        workspace = <DashboardComponent />;
        break;
      default:
        //Statements executed when none of the values match the value of the expression
        workspace = <DashboardComponent />;
        break;
    }

    return (
      <div className="row">

        <SideNavigation
          selectedNavItem={this.state.selectedNavItem}
          handleClick={this.handleNavItemClick}
        />

        {workspace}

      </div>
    );
  }
}

export default AppComponent;
// propTypes and defaultProps are defined as properties on the constructor
AppComponent.propTypes = {  };
AppComponent.defaultProps = {  };