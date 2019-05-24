import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import logo from "../logo.png";
import '../App.css';

const Shadow = (props) => {
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
        <CardImg top width="100%" src="http://www.kimballstock.com/pix/DOG/03/DOG-03-RK0502-01P.JPG" alt="Card image cap" />
        <CardBody>

        <div className="name">
          <CardTitle>Shadow</CardTitle>
        </div>
        <div className="age">
          <CardSubtitle>4 years old</CardSubtitle>
          </div>
          <div className="about">
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
          {/* <Button>Button</Button> */}
          </div>
        </CardBody>
      </Card>
      </div>

    </div>
    </div>
  );
};

export default Shadow;