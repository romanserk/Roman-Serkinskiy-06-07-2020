import React from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

const ThemedButton = ({ children, className, dark, onClick }) => {
  return (
    <Button variant={dark ? "outline-light" : "info"} className={`${className}`} onClick={onClick}>
      {children}
    </Button>
  );
};

const mapStateToProps = (state) => {
  return {
    dark: state.theme.dark,
  };
};

export default connect(mapStateToProps, null)(ThemedButton);
