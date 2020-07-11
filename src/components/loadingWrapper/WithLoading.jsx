import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Loading from "./Loading";

export default (WrappedComponent, actions) => {
  const fetchActions = actions.reduce((o, fn) => ({ ...o, [fn.name]: fn }), {});

  const LoadingDataHOC = (props) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const actionPromises = actions.map((action) => props[action.name]());
      Promise.all(actionPromises).then(() => setLoading(false));
      return () => {
        setLoading(true);
      };
      // eslint-disable-next-line
    }, []);

    return (
      <Loading loading={loading}  pageType={LoadingDataHOC.pageType}>
        <WrappedComponent {...props} />
      </Loading>
    );
  };
  return connect(null, fetchActions)(LoadingDataHOC);
};
