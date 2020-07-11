import React from "react";
import "./Loading.css";
import { connect } from "react-redux";
import ErrorFetchingData from "../errorsComponents/ErrorFetchingData";

const Loading = ({ loading, children, haveError }) => {
  const getLoaderAnimation = () => {
    return (
      <div className="loader-wrapper">
        <div className="bar">
          <div className="circle"></div>
          <p>Loading</p>
        </div>
      </div>
    );
  };
  return <>{haveError ? <ErrorFetchingData /> : loading ? getLoaderAnimation() : { ...children }}</>;
};

const mapStateToProps = (state) => {
  return {
    haveError: state.error.haveError,
  };
};

export default connect(mapStateToProps, null)(Loading);
