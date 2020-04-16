import React from "react";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "react-router-dom";

function GetNavList() {
  const NavList = [
    {
      primaryText: "Home",
      leftIcon: <FontIcon>home</FontIcon>,
      component: Link,
      to: "/"
    },
    {
      primaryText: "Bibloteca",
      leftIcon: <FontIcon>book</FontIcon>,
      component: Link,
      to: "/my-lib"
    },
    {
      divider: true
    }
  ];

  NavList.push({
    primaryText: "Sobre",
    leftIcon: <FontIcon>info</FontIcon>,
    component: Link,
    to: "/sobre"
  });
  return NavList;
}
export default GetNavList;
