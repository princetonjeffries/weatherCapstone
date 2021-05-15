/* The React Bootstrap CSS file was imported to style the imported components */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Cards, the CardDeck, and the Jumbotron components were imported from React Bootstrap. */
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Jumbotron from 'react-bootstrap/Jumbotron';

/* This Sun icon was imported from Styled Icons */
import {WeatherSunnyLow} from '@styled-icons/fluentui-system-filled/WeatherSunnyLow';

/* These are all images imported from the img folder */
import image1 from './img/image1.jpg';
import image2 from './img/image2.jpg';
import image3 from './img/image3.jpg';
import image4 from './img/image4.jpg';
import image5 from './img/image5.jpg';

const Cards = () => { /* This is the cards function */
  return (
  <>
  <Jumbotron id="jumbotron-2"> {/* Jumbotron is a React Bootstrap Component */}

    <div className="header">
  <WeatherSunnyLow size='90'/> <h1 id="heading">Arizona Weather</h1> {/* The Sun icon from Styled Icons is used here */}
  </div>

  <CardDeck> {/* All of the cards are inside a card deck to align them evenly */}

  <Card> {/* Each set of information and images are held in cards */}
    <Card.Body> {/* Card Bodies put padding around the content inside the card */}
      <Card.Title id="title">Our Mission</Card.Title> {/* Titles have a larger font-size compared to the rest of the text and are at the top */}
      <Card.Text id="text"> {/* Card text holds the rest of the information */}
        Provide consistent weather and forecast updates for Arizonans to keep them safe and informed.
      </Card.Text>
      <Card.Img variant="top" src={image1} className="custom-image" /> {/* Card Images display images inside cards */}
      <Card.Body>
      <Card.Img variant="top" src={image4} className="custom-image"/>
      </Card.Body>
    </Card.Body>
  </Card>

  <Card> {/* Each set of information and images are held in cards */}
    <Card.Body> {/* Card Bodies put padding around the content inside the card */}
      <Card.Title id="title">Our Vision</Card.Title> {/* Titles have a larger font-size compared to the rest of the text and are at the top */}
      <Card.Text id="text"> {/* Card text holds the rest of the information */}
        Every Arizonan is informed and prepared to deal with weather endangerments.
      </Card.Text>
      <Card.Img variant="top" src={image5} className="custom-image"/> {/* Card Images display images inside cards */}
      <Card.Body>
      <Card.Img variant="top" src={image2} className="custom-image"/>
      </Card.Body>
    </Card.Body>
  </Card>

  <Card> {/* Each set of information and images are held in cards */}
    <Card.Body> {/* Card Bodies put padding around the content inside the card */}
      <Card.Title id="title">Our Goals</Card.Title> {/* Titles have a larger font-size compared to the rest of the text and are at the top */}
      <Card.Text id="text"> {/* Card text holds the rest of the information */}
        -Teach more Arizonans about possible weather endangerments
      </Card.Text>
      <Card.Text id="text">
      -Inform Arizonans about the current weather as soon as possible
      </Card.Text>
      <Card.Text id="text">
      -Put safety precautions in place to prepare for a safer future
      </Card.Text>
      <Card.Img variant="top" src={image3} className="custom-image"/> {/* Card Images display images inside cards */}
    </Card.Body>
  </Card>

</CardDeck>

</Jumbotron>
</>

  )
}

export default Cards
