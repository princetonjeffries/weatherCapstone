import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import OpenWeather from '../OpenWeather'
import GetDate from '../GetDate'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

const index = () => {
    return (
        <div>
            <Jumbotron id='jumbotron'fluid className='text-center'>
                <Container>
                    <h1>Hello, {format (new Date(), "'Today is ' eeee, LLLL do")}</h1>
                    <OpenWeather/>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default index
