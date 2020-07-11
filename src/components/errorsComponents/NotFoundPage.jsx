import React from "react";
import { Col, Row } from "react-bootstrap";
import ThemedContainer from '../hoc/ThemedContainer'

const NotFoundPage = () => {
  return (
    <ThemedContainer className="h-75 mt-5 p-5">
      <Row className="align-items-center h-75">
        <Col sm={8} className="mx-auto">
          <center>
            <p style={{ fontSize: "7rem", fontWeight: "100" }}>404</p>
            <p style={{ fontSize: "5rem", fontWeight: "100" }}>Page not found</p>
          </center>
        </Col>
      </Row>
    </ThemedContainer>
  );
};

export default NotFoundPage;
