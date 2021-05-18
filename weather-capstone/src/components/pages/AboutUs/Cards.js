/* The React Bootstrap CSS file was imported to style the imported components */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Cards, the CardDeck, and the Jumbotron components were imported from React Bootstrap. */
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel'

/* This Sun icon was imported from Styled Icons */
import {WeatherSunnyLow} from '@styled-icons/fluentui-system-filled/WeatherSunnyLow';

/* These are all images imported from the img folder */
import image1 from './img/image1.jpg';
import image2 from './img/image2.jpg';
import image3 from './img/image3.jpg';
import image4 from './img/image4.jpg';
import image5 from './img/image5.jpg';
import image6 from './img/image6.png';
import image7 from './img/image7.jpg';
import image8 from './img/image8.jpg';
import image9 from './img/image9.jpg';

const Cards = () => { /* This is the cards function */
  return (
  <>

  <Carousel interval="100000">

  <Carousel.Item>

  <Jumbotron id="jumbotron-2"> {/* Jumbotron is a React Bootstrap Component */}

    <div className="header">
  <WeatherSunnyLow size='90'/> <h1 id="heading">Arizona Weather</h1> {/* The Sun icon from Styled Icons is used here */}
  </div>

  <CardDeck> {/* All of the cards are inside a card deck to align them evenly */}

  <Card className="custom-card"> {/* Each set of information and images are held in cards */}
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

  <Card className="custom-card"> {/* Each set of information and images are held in cards */}
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

  <Card className="custom-card"> {/* Each set of information and images are held in cards */}
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

</Carousel.Item>


<Carousel.Item>

  <Jumbotron id="jumbotron-2"> {/* Jumbotron is a React Bootstrap Component */}

  <div className="header">
    <h1 id="heading">How we retrieve data</h1> {/* The Sun icon from Styled Icons is used here */}
  </div>

  <CardDeck> {/* All of the cards are inside a card deck to align them evenly */}

  <Card className="custom-card"> {/* Each set of information and images are held in cards */}
    <Card.Body> {/* Card Bodies put padding around the content inside the card */}
      <Card.Title id="title">Our Methods</Card.Title> {/* Titles have a larger font-size compared to the rest of the text and are at the top */}
      <Card.Text id="text"> {/* Card text holds the rest of the information */}
        We use the newest and most accurate methods to ensure accurate forecasts.
      </Card.Text>
      <Card.Img variant="top" id="methods-image" src={image6} className="custom-image"/> {/* Card Images display images inside cards */}
        <Card.Text id="text">The exact methods that we use for our forecasts are Deterministic forecasting and Probabilistic forecasting.</Card.Text>
    </Card.Body>
  </Card>

  <Card className="custom-card"> {/* Each set of information and images are held in cards */}
    <Card.Body> {/* Card Bodies put padding around the content inside the card */}
      <Card.Title id="title">Our Tools</Card.Title> {/* Titles have a larger font-size compared to the rest of the text and are at the top */}
      <Card.Text id="text"> {/* Card text holds the rest of the information */}
        We are using new technology like portable dust generators and Doppler Radars.
      </Card.Text>
      <Card.Img variant="top" src={image7} className="custom-image"/> {/* Card Images display images inside cards */}
      <Card.Body>
      <Card.Img variant="top" src={image8} className="custom-image"/>
      </Card.Body>
    </Card.Body>
  </Card>

  <Card className="custom-card"> {/* Each set of information and images are held in cards */}
    <Card.Body> {/* Card Bodies put padding around the content inside the card */}
      <Card.Title id="title">Our Ideas</Card.Title> {/* Titles have a larger font-size compared to the rest of the text and are at the top */}
      <a href="https://www.barnesandnoble.com/w/reginald-sutcliffe-and-the-invention-of-modern-weather-systems-science-jonathan-e-martin/1137665805"><Card.Img variant="top" src={image9} className="custom-image"/></a> {/* Card Images display images inside cards */}
    </Card.Body>
  </Card>

</CardDeck>

</Jumbotron>

</Carousel.Item>


<Carousel.Item>

  <Jumbotron id="jumbotron-2"> {/* Jumbotron is a React Bootstrap Component */}

  <div className="header">
    <h1 id="heading">Our Story</h1> {/* The Sun icon from Styled Icons is used here */}
  </div>

  <div className="scroll">
  <h1 id="title-2"><strong>The History of Arizona Weather</strong></h1>
  <h1 id="title-3"><strong>Introduction</strong></h1>
  <p>Arizona Weather was founded on February 14<sup>th</sup>, 1949. It was founded by Abe Cleveland. Abe Cleaveland thought it was important to provide Arizonans with up to date weather reports to ensure everyone's safety. </p> 
  
  <h1 id="title-3"><strong>Part One - Loss</strong></h1>
  <p>Abe was walking down the street on his way to his brother's wedding. He was the best man so he had to be on time and have the ring. He kept the ring in his right jacket pocket in a black wooden case. Every 5 minutes he would check to make sure he still had the ring in his pocket. After about his fifth check he saw a dust storm heading straight for him. He tried to hide behind a sign but it didn't work. His suit was covered in dirt. He didn't care too much but then he noticed that the ring in his pocket was missing.</p>
</div>

</Jumbotron>

</Carousel.Item>

</Carousel>
</>

  )
}

export default Cards
