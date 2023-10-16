import React from "react";
export const SimpleHoc = (Component) => {
  const newProps = "Passed from HOC";
  return (props) => <Component newProps={newProps} {...props} />;
};

