import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function BreadcrumbNav() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href='/'>Go back to home</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbNav;
