import React from "react";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import TopNavigation from "./TopNavigation";
import ServicesSection from "../homePageSections/servicesSection/ServicesSection";
import ProjectSection from "../homePageSections/portfolioSection/ProjectSection";

const Layout = (props: any) => {
  return (
    <div>
        <TopNavigation/>
        <main className="row">{props.children}</main>
    </div>
  );
};

export default Layout;
