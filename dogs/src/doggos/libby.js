import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import logo from "../title.png";
import '../App.css';

const Libby = (props) => {
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
        <CardImg top width="100%" src="http://www.houstonpettalk.com/wp-content/uploads/2011/06/BlackPugPuppyMedium.jpg" alt="Card image cap" />
        <CardBody>
        <div className="name">
        <CardTitle>Liberty Bell (Libby)</CardTitle>
        </div>
        <div className="age">
          <CardSubtitle>3 months old</CardSubtitle>
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

export default Libby;