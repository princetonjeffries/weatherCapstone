import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import {WeatherSunny} from '@styled-icons/fluentui-system-filled/WeatherSunny'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <div>
            <Jumbotron id='jumbotron'fluid className='text-center'>
                <Container>
                    <h1>Hello, today is Friday, May 21st</h1>
                    <h1>It is currently 94°F</h1>
                    <WeatherSunny size='100'></WeatherSunny><br></br>
                    <Link 
                        className="btn btn-warning btn-med"
                        role="button"
                        to="/weather"
                    > 
                        Accurate Weather Forecast
                    </Link>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default index
