import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import logo from "../title.png";
import { Link } from "react-router-dom";
import Form1 from '../form';
import '../App.css';

const Puddy = (props) => {
  return (
    <div>
        <div className="logoTitle">
      <Link to="/">
            <img src={logo} className="logo" alt="pup" /></Link>
        </div>

<div className="cardAll">
<div className="singleCard2">
      <Card>
        <CardImg top width="100%" src="http://s1.1zoom.me/big0/639/Dogs_Bulldog_Glance_497142.jpg" alt="Card image cap" />
        <CardBody>
        <div className="name">
          <CardTitle>Puddy</CardTitle>
        </div>
        <div className="age">
          <CardSubtitle>3 years old</CardSubtitle>
        </div>
        <div className="about">
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
          {/* <Button>Button</Button> */}
          </div>
        </CardBody>
      </Card>
      <Form1/>
    </div>

    </div>
    </div>
  );
};

export default Puddy;