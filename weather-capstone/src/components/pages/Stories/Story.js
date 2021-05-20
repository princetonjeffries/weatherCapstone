import Card from 'react-bootstrap/Card'
import { Col } from 'react-bootstrap'
import './css/Stories.css';

const Story = ({src, date, title, text}) => {
    return (
        <Col style={{ marginTop: '15px', display: 'flex', justifyContent: 'center'}} md={4}>
            <Card id='story-card'style={{}}>
                <Card.Img variant="top" src={src} />
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text >{text}</Card.Text>  
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Story
