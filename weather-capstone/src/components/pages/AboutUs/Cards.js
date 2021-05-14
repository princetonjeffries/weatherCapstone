import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Jumbotron from 'react-bootstrap/Jumbotron'
import image1 from './img/image1.jpg'
import image2 from './img/image2.jpg'
import image3 from './img/image3.jpg'
import image4 from './img/image4.jpg'
import image5 from './img/image5.jpg'

const Cards = () => {
  return (
  <>
  <Jumbotron id="jumbotron-2">
  <CardDeck>
  <Card>
    <Card.Body>
      <Card.Title id="title">Our Mission</Card.Title>
      <Card.Text id="text">
        Provide consistent weather and forecast updates for Arizonans to keep them safe and informed.
      </Card.Text>
      <Card.Img variant="top" src={image1} className="custom-image" />
      <Card.Body>
      <Card.Img variant="top" src={image4} className="custom-image"/>
      </Card.Body>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title id="title">Our Vision</Card.Title>
      <Card.Text id="text">
        Every Arizonan is informed and prepared to deal with weather endangerments.
      </Card.Text>
      <Card.Img variant="top" src={image5} className="custom-image"/>
      <Card.Body>
      <Card.Img variant="top" src={image2} className="custom-image"/>
      </Card.Body>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title id="title">Our Goals</Card.Title>
      <Card.Text id="text">
        -Teach more Arizonans about possible weather endangerments
      </Card.Text>
      <Card.Text id="text">
      -Inform Arizonans about the current weather as soon as possible
      </Card.Text>
      <Card.Text id="text">
      -Put safety precautions in place to prepare for a safer future
      </Card.Text>
      <Card.Img variant="top" src={image3} className="custom-image"/>
    </Card.Body>
  </Card>
</CardDeck>
</Jumbotron>
</>

  )
}

export default Cards
