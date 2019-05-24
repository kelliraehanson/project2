import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import logo from "../logo.png";
import '../App.css';

const Archie = (props) => {
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
        <CardImg top width="100%" src="https://i.pinimg.com/originals/9a/1d/64/9a1d64ef146dacb915cde2786752473a.jpg" alt="Card image cap" />
        <CardBody>
        <div className="name">
          <CardTitle>Archie</CardTitle>
        </div>
        <div className="age">
          <CardSubtitle>5 years old</CardSubtitle>
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

export default Archie;