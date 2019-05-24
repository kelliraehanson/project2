import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import logo from "./title.png";
import './App.css';

const Cards = (props) => {
  return (
    <div>
    
      <div className="logoTitle">
      <Link to="/">
            <img src={logo} className="logo" alt="pup" /></Link>
        </div>


<div className="cardAll">
<div className="singleCard">
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
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
          <div className="button"><Link to="/blue">View More</Link></div>
          </div>
        </CardBody>
        </div>
      </Card>
      </div>

      <div className="singleCard">
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
          <div className="button"><Link to="/shadow">View More</Link></div>
          </div>
        </CardBody>
      </Card>
      </div>

      <div className="singleCard">
      <Card>
        <CardImg top width="100%" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/cockapoo-dog-isolated-on-white-background-oleksiy-maksymenko.jpg" alt="Card image cap" />
        <CardBody>
        <div className="name">
          <CardTitle>Frank</CardTitle>
        </div>
        <div className="age">
          <CardSubtitle>2 years old</CardSubtitle>
          </div>
          <div className="about">
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
          <div className="button"><Link to="/frank">View More</Link></div>
          </div>
        </CardBody>
      </Card>
      </div>

      <div className="singleCard">
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
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
          <div className="button"><Link to="/skip">View More</Link></div>
          </div>
        </CardBody>
      </Card>
      </div>

      <div className="singleCard">
      <Card>
      <div className="cardThings">
      <div className="dogPic">
        <CardImg top width="100%" src="https://www.marshalswickveterinarysurgery.co.uk/wp-content/uploads/2018/05/509092254.jpg" alt="Card image cap" />
      </div>  
        <CardBody>
        <div className="name">
          <CardTitle>Lady</CardTitle>
        </div>
        <div className="age">
          <CardSubtitle>1 year old</CardSubtitle>
        </div>
        <div className="about">
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
          <div className="button"><Link to="/lady">View More</Link></div>
          </div>
        </CardBody>
        </div>
      </Card>
      </div>

      <div className="singleCard">
      <Card>
        <CardImg top width="100%" src="https://media.mnn.com/assets/images/2015/10/dogs-chow-chow.jpg.838x0_q80.jpg" alt="Card image cap" />
        <CardBody>
        <div className="name">
          <CardTitle>Alvin</CardTitle>
        </div>
        <div className="age">
          <CardSubtitle>3 years old</CardSubtitle>
        </div>
        <div className="about">
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
          <div className="button"><Link to="/alvin">View More</Link></div>
          </div>
        </CardBody>
      </Card>
      </div>

      <div className="singleCard">
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
          <div className="button"><Link to="/archie">View More</Link></div>
          </div>
        </CardBody>
      </Card>
    </div>

    <div className="singleCard">
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
          <div className="button"><Link to="/libby">View More</Link></div>
          </div>
        </CardBody>
      </Card>
    </div>

    <div className="singleCard">
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
          <div className="button"><Link to="/puddy">View More</Link></div>
          </div>
        </CardBody>
      </Card>
    </div>

    </div>
    </div>
  );
};

export default Cards