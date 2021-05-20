import { Row, Col } from 'react-bootstrap'
import Story from './Story'

const StoryRow = ({src1, date1, title1, text1, src2, date2, title2, text2, src3, date3, title3, text3}) => {

    return (
        <Row style={{marginTop: '15px', marginBottom: '15px'}}>
            <Story src={src1} date={date1} title={title1} text={text1} />
            <Story src={src2} date={date2} title={title2} text={text2} />
            <Story src={src3} date={date3} title={title3} text={text3} />
        </Row>
    )
}

export default StoryRow