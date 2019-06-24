import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import logo from "../title.png";
import { Link } from "react-router-dom";
import Form1 from '../form';
import '../App.css';

const Skip = (props) => {
  return (
    <div>
        <div className="logoTitle">
      <Link to="/">
            <img src={logo} className="logo" alt="pup" /></Link>
        </div>

<div className="cardAll">
<div className="singleCard2">
      <Card>
        <CardImg top width="100%" src="https://t4.ftcdn.net/jpg/00/28/49/27/240_F_28492744_9iTccyRTEvDh6RHLxM1azRlRllq3QTEQ.jpg" alt="Card image cap" />
        <CardBody>
        <div className="name">
          <CardTitle>Skip</CardTitle>
        </div>
        <div className="age">
          <CardSubtitle>4 months old</CardSubtitle>
        </div>
        <div className="about">
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
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

export default Skip;