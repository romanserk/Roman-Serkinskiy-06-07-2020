import React from "react";
import { Form, Col } from "react-bootstrap";
import * as weatherDataActions from "../../../redux/actions/weatherDataActions";
import * as errorAction from "../../../redux/actions/errorsActions";
import { connect } from "react-redux";
import AsyncSelect from "react-select/async";
import ThemedContainer from "../../hoc/ThemedContainer";
import { getAutocompleteCityList } from "../../../apiCallsFunctions";

import "./searchForm.css";

const SearchForm = (props) => {
  const locationClickHandler = (result) => {
    props.setCityKeyTriggerRefetchAction(result.value.Key);
    props.setCityInfoAction(result.value);
  };

  const loadOptions = async (inputValue) => {
    const res = await getAutocompleteCityList(inputValue);
    if (res.err) {
      props.addNewError(res.err, true);
    } else {
      const resList = res.map((elem) => {
        return {
          value: elem,
          label: elem.LocalizedName,
        };
      });
      return resList;
    }
  };
  return (
    <ThemedContainer
      className={`slide-in-top searchFormContainer ${
        props.dark ? "searchFormContainer-dark" : "searchFormContainer-light"
      }`}
    >
      <Form>
        <Form.Row>
          <Col>
            <AsyncSelect
              loadOptions={loadOptions}
              classNamePrefix="react-select"
              placeholder={"Search..."}
              onChange={locationClickHandler}
            />
          </Col>
        </Form.Row>
      </Form>
    </ThemedContainer>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    setCityInfoAction: (result) => dispatch(weatherDataActions.setCityInfoAction(result)),
    setCityKeyTriggerRefetchAction: (cityKey) => dispatch(weatherDataActions.setCityKeyTriggerRefetchAction(cityKey)),
    addNewError: (error, bool) => dispatch(errorAction.addNewError(error, bool)),
  };
};
const mapStateToProps = (state) => {
  return {
    dark: state.theme.dark,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
