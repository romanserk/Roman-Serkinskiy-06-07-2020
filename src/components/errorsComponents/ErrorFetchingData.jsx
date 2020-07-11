import React from "react";
import { Modal, Button, Image } from "react-bootstrap";
import * as showErrorModalAction from "../../redux/actions/errorsActions";
import { connect } from "react-redux";

const ErrorFetchingData = (props) => {
  return (
    <Modal size="md" aria-labelledby="contained-modal-title-vcenter" centered show={props.showErrorModal}>
      <center>
        <Image width={120} src={`./icons/error.svg`} alt="error" />
      </center>
      <Modal.Body>
        <center>
          <h1>{props.error.message}</h1>
        </center>
        <h2>Can be caused by reaching limit of api key</h2>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="info" onClick={() => props.showErrorModalAction(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.error.error,
    showErrorModal: state.error.showErrorModal,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    showErrorModalAction: (bool) => dispatch(showErrorModalAction.showErrorModalAction(bool)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorFetchingData);
