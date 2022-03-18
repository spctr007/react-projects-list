import React from "react";

const Layout = (props: any) => {
  return (
    <div>
      <main className="row">{props.children}</main>
    </div>
  );
};

export default Layout;
