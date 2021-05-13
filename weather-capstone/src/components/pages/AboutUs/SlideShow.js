import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css'

const SlideShow = () => {
  return (
  <>
  <CardDeck>
  <Card>
    <Card.Body>
      <Card.Title>Our Mission</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Card.Img variant="top" src="holder.js/100px160" />
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Our Vision</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
      <Card.Img variant="top" src="holder.js/100px160" />
    </Card.Body>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Our Goals</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <Card.Img variant="top" src="holder.js/100px160" />
    </Card.Body>
  </Card>
</CardDeck>
  </>

  )
}

export default SlideShow
