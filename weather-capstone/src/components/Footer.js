import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {WeatherSunnyLow} from '@styled-icons/fluentui-system-filled/WeatherSunnyLow'
const Footer = () => {
    return (
        <div>
        <Card id='footer' className='text-left'>
            <Card.Header className='text-center'>
                Arizona Weather
            </Card.Header>
            <div id='restOfFooter' className='text-center'>
             <WeatherSunnyLow size='100'/>
                <ul>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                </ul>
                <ul>
                    <li>Contact Us</li>
                    <li>Leave a Review</li>
                    <li>Buy Merchandise</li>
                </ul>
            </div>
                <p className='text-center'>Copyright @ 2021</p>
        </Card>
        </div>
    )
}

export default Footer
