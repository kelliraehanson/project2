import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import logo from "../title.png";
import { Link } from "react-router-dom";
import '../App.css';

const Lady = (props) => {
  return (
    <div>
        <div className="logoTitle">
      <Link to="/">
            <img src={logo} className="logo" alt="pup" /></Link>
        </div>

<div className="cardAll">
<div className="singleCard2">
      <Card>
      <div className="cardThings">
      <div className="dogPic">
        <CardImg top width="100%" src="https://www.marshalswickveterinarysurgery.co.uk/wp-content/uploads/2018/05/509092254.jpg" alt="Card image cap" />
      </div>  
        <CardBody>
        <div className="name">
          <CardTitle>Lady</CardTitle>
        </div>
        <div className="age">
          <CardSubtitle>1 year old</CardSubtitle>
        </div>
        <div className="about">
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
          {/* <Button>Button</Button> */}
          </div>
        </CardBody>
        </div>
      </Card>
      </div>

    </div>
    </div>
  );
};

export default Lady;