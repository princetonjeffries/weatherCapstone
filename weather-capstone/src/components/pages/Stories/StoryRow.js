import { Row } from 'react-bootstrap'
import Story from './Story'
//Row imported from react bootstrap and story component imported

const StoryRow = ({src1, date1, title1, text1, src2, date2, title2, text2, src3, date3, title3, text3}) => {
    return (
        <Row style={{marginTop: '15px', marginBottom: '15px'}}>
        {/* row component with margin top of 15px and a margin bottom of 15px */}
            <Story src={src1} date={date1} title={title1} text={text1} />
            {/* story component with date set as the date1 prop, title set as the title1 prop, and text set as the text1 prop */}
            <Story src={src2} date={date2} title={title2} text={text2} />
            {/* story component with date set as the date2 prop, title set as the title2 prop, and text set as the text2prop */}
            <Story src={src3} date={date3} title={title3} text={text3} />
            {/* story component with date set as the date3 prop, title set as the title3 prop, and text set as the text3 prop */}
        </Row>
    )
}

export default StoryRow