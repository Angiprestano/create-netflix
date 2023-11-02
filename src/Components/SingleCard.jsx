import { React } from "react";
import { Col } from "react-bootstrap";

const SingleCard = ({ poster }) => {
  return (
    <Col className={1}>
      <img className="img-fluid" src={poster} alt="film" />
    </Col>
  );
};

export default SingleCard;
