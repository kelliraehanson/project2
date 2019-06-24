import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import logo from "../title.png";
import { Link } from "react-router-dom";
import Form1 from '../form';
import '../App.css';

const Archie = (props) => {
  return (
    <div>
        <div className="logoTitle">
      <Link to="/">
            <img src={logo} className="logo" alt="pup" /></Link>
        </div>

<div className="cardAll">
<div className="singleCard2">
      <Card>
        <CardImg top width="100%" src="https://i.pinimg.com/originals/9a/1d/64/9a1d64ef146dacb915cde2786752473a.jpg" alt="Card image cap" />
        <CardBody>
        <div className="name">
          <CardTitle>Archie</CardTitle>
        </div>
        <div className="age">
          <CardSubtitle>5 years old, adult, male, neutered
          </CardSubtitle>
        </div>
        <div className="about">
          <CardText>I’m an active little terrier mix that’s looking for a fun, forever family to join!  I love to play with toys and my very favorite one is a Kong with peanut butter in it!  I’m an energetic fella, so a home with a fenced yard would be ideal for me so I can run out my zoomies.  I’m up for going on adventures, but will also be happy to cuddle with you when the day is done!</CardText>
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

export default Archie;