import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import { Link } from "react-router-dom";
import logo from "./title.png";
import './App.css';

const About = (props) => {
  return (
    <div>
       <div className="logoTitle">
      <Link to="/">
            <img src={logo} className="logo" alt="pup" /></Link>
        </div>


<div className="cardAll">
<div className="singleCard2">
      <Card>
        <CardImg top width="100%" src="https://www.thejungleni.com/app/uploads/2016/08/Group-of-Dogs.jpg" alt="Card image cap" />
        <CardBody>

        <div className="name">
          <CardTitle>About Us:</CardTitle>
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

export default About;