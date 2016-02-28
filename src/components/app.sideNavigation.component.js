import React from 'react';

class SideNavigationComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick(item) {
    this.props.handleClick(item);
  }

  render() {
    const navItems = this.props.navItemList;
    const selectedNavItem = this.props.selectedNavItem;

    return (
      <div className="col-sm-3 col-md-2 sidebar">

        <ul className="nav nav-sidebar">
          {navItems.map(item =>
            <li key={item} className={item === selectedNavItem ? 'active' : null}>
              <a onClick={this.handleClick.bind(this, item)} href="#">
                {item}{item === selectedNavItem ?  <CurrentComponent /> : null}
              </a>
            </li>)}
        </ul>

        {/* Second and third level nav are only for the show-case. */}
        <ul className="nav nav-sidebar">
          <li><a href="">Second Level</a></li>
          <li><a href="">Nav item again</a></li>
          <li><a href="">One more nav</a></li>
          <li><a href="">Another nav item</a></li>
          <li><a href="">More navigation</a></li>
        </ul>
        <ul className="nav nav-sidebar">
          <li><a href="">Third Level</a></li>
          <li><a href="">One more nav</a></li>
          <li><a href="">Another nav item</a></li>
        </ul>

      </div>
    );
  }
}

export default SideNavigationComponent;
// propTypes and defaultProps are defined as properties on the constructor
SideNavigationComponent.propTypes = {
  navItemList: React.PropTypes.array,
  selectedNavItem: React.PropTypes.string,
  handleClick: React.PropTypes.func };
SideNavigationComponent.defaultProps = {
  navItemList: ['Overview', 'Reports', 'Analytics', 'Export'],
  selectedNavItem: 'Overview',
  handleClick: function() { console.error('click handler in app.sideNavigation.component is missing') }
};

/**
 * small additional component for selected list items
 */
class CurrentComponent extends React.Component {
  render() {
    return (<span className="sr-only">(current)</span>);
  }
}