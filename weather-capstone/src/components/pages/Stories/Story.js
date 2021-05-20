import Card from 'react-bootstrap/Card'
import { Col } from 'react-bootstrap'
//imported card and col from react bootstrap

const Story = ({src, date, title, text}) => {
    return (
        <Col style={{ marginTop: '15px'}} md={4}>
        {/* created a col component, with a margin top of 15px and a md size of 4 */}
            <Card>
            {/* card component */}
                <Card.Img variant="top" src={src} />
                {/* card image with variant set as top and src set a src prop */}
                <Card.Body>
                {/* card body component to content text information */}
                    <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
                    {/* card subtitle with a className of 'mb-2 text-muted', and its texxt set as the date prop */}
                    <Card.Title>{title}</Card.Title>
                    {/* card title with the text set as the title prop */}
                    <Card.Text>{text}</Card.Text>
                    {/* card text with the text set as the text prop */}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Story
