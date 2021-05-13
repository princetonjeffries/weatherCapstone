import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css'
import image1 from './img/image1.jpg'
import image2 from './img/image2.jpg'
import image3 from './img/image3.jpg'
import image4 from './img/image4.jpg'

const Cards = () => {
  return (
  <>
  <CardDeck>
  <Card>
    <Card.Body>
      <Card.Title>Our Mission</Card.Title>
      <Card.Text>
        Provide consistent weather and forecast updates for Arizonans to keep them safe and informed.
      </Card.Text>
      <Card.Body>
      <Card.Img variant="top" src={image4} className="custom-image"/>
      </Card.Body>
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Our Vision</Card.Title>
      <Card.Text>
        Every Arizonan is informed and prepared to deal with weather endangerments.
      </Card.Text>
      <Card.Img variant="top" src={image2} className="custom-image"/>
      <Card.Img variant="top" src={image1} className="custom-image" />
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Our Goals</Card.Title>
      <Card.Text>
        -Teach more Arizonans about possible weather endangerments
      </Card.Text>
      <Card.Text>
      -Inform Arizonans about the current weather as soon as possible
      </Card.Text>
      <Card.Text>
      -Put safety precautions in place to prepare for a safer future
      </Card.Text>
      <Card.Img variant="top" src={image3} className="custom-image"/>
    </Card.Body>
  </Card>
</CardDeck>
  </>

  )
}

export default Cards
