import React from "react";
import * as favoriteActions from "../../redux/actions/favoriteActions";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { Container, Col, Row } from "react-bootstrap";

import FavoriteCard from "./FavoriteCard";
import ErrorFetchingData from '../errorsComponents/ErrorFetchingData'

const FavoritePage = (props) => {
  return (
    <Container>
      {props.haveError ? (
        <ErrorFetchingData />
      ) : (
        <Row>
          {props.favorite.map((favoriteItem) => {
            return (
              <Col key={uuidv4()} lg={3} md={4} sm={6}>
                <FavoriteCard favoriteItem={favoriteItem} />
              </Col>
            );
          })}
        </Row>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    favorite: state.favorite.favorite,
    haveError: state.error.haveError,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToFavoriteAction: (favorite) => dispatch(favoriteActions.addToFavoriteAction(favorite)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritePage);
