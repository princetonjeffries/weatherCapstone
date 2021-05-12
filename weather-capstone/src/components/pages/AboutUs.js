import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const AboutUs = () => {
    return (
        <div className="container">

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src=""
      alt="text"
    />
    <Carousel.Caption>
      <h3>Hello, we are Arizona Weather</h3>
      <p>Text</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/background.jpg"
      alt="text-2"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src=""
      alt="text-3"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </div>
    )
}

export default AboutUs
