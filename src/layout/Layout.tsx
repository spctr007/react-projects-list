import React from "react";
import TopNavigation from "./TopNavigation";

const Layout = (props: any) => {
  return (
    <div>
      <TopNavigation />
      <main className="row">{props.children}</main>
    </div>
  );
};

export default Layout;
