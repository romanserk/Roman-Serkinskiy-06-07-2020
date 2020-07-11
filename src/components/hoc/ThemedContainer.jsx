import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";

import "./ThemedContainer.css";

const ThemedContainer = ({ children, className, dark }) => {
  return (
    <div className={`${className} ${dark && "theme-container-dark"}`}>
      <Container className={`${dark ? "glass_dark_background" : "glass_background"} shadow p-3 mt-3`}>
        {children}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dark: state.theme.dark,
  };
};

export default connect(mapStateToProps, null)(ThemedContainer);
