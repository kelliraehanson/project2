import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import logo from "../title.png";
import { Link } from "react-router-dom";
import Form1 from '../form';
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
        <CardImg top width="100%" src="https://www.marshalswickveterinarysurgery.co.uk/wp-content/uploads/2018/05/509092254.jpg" alt="Card image cap" />
        <CardBody>
        <div className="name">
          <CardTitle>Lady</CardTitle>
        </div>
        <div className="age">
          <CardSubtitle>3 years old, adult, female, spayed
          </CardSubtitle>
        </div>
        <div className="about">
          <CardText>Hi everyone, my name is Lady.  I’m a 3 year old, 54 pound, Coonhound Mix with a heart of gold. I was found as a pregnant stray and recently moved to NHA with my puppies. Not much is known about my past, but I am very thankful that my present is here at NHA, and my future is in a forever home with (paws crossed) you. What is known about me is that I’m friendly, sweet, sometimes goofy, and always in a good mood. Pretty proud to say that my pups all take after me, too.</CardText>
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

export default Lady;