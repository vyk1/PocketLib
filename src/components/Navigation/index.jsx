import React, { Component } from "react";
import NavigationDrawer from "react-md/lib/NavigationDrawers";
import ToolbarActions from "../ToolbarActions";
import Footer from "../Footer";
import GetNavList from "./NavList";
import "./Navigation.scss";

class Navigation extends Component {
  render() {
    // const { children, config, LocalTitle } = this.props;
    // const footerLinks = LocalTitle !== "About";
    return (
      <NavigationDrawer
        drawerTitle={"Pocket Lib"}
        toolbarTitle={"Pocket Lib"}
        contentClassName="main-content"
        navItems={GetNavList()}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        toolbarActions={<ToolbarActions />}
      >
        {/* <div className="main-container">{this.props.children}</div> */}
        <div>{this.props.children}</div>
        <Footer />
      </NavigationDrawer>
    );
  }
}

export default Navigation;
