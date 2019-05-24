import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import logo from "../logo.png";
import '../App.css';

const Blue = (props) => {
  return (
    <div>
      <header>
        <div className="logoTitle">
            <img src={logo} className="logo" alt="sleep" />
        </div>
      </header>

<div className="cardAll">
<div className="singleCard2">
      <Card>
      <div className="cardThings">
      <div className="dogPic">
        <CardImg top width="100%" src="https://www.akc.org/wp-content/themes/akc/component-library/assets/img/welcome.jpg" alt="Card image cap" />
      </div>
        <CardBody>
          <div className="name">
            <CardTitle>Blue</CardTitle>
          </div>
          <div className="age">
          <CardSubtitle>8 months old</CardSubtitle>
          </div>
          <div className="about">
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
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

export default Blue;