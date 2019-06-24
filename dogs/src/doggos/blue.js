import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import logo from "../title.png";
import { Link } from "react-router-dom";
import '../App.css';
import Form1 from '../form';

const Blue = (props) => {
  return (
    <div>
        <div className="logoTitle">
      <Link to="/">
            <img src={logo} className="logo" alt="pup" /></Link>
        </div>

      <Card>
      <div className="cardAll">
      <div className="singleCard2">
        <CardImg top width="100%" src="https://farm4.static.flickr.com/3879/14600053505_467145d614_b.jpg" alt="Card image cap" />
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
      <Form1/>
      </div>
  );
};

export default Blue;