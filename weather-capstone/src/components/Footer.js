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
                <ul id='links1'>
                    <li><a href='#' ><img src='https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png' height='64' width='64'></img> </a></li>
                    <li><a href='#'><img src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png' height='64' width='64'></img></a></li>
                    <li><a href='#'><img src='https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png' height='64' width='64'></img></a></li>
                </ul>
                <ul id='links'>
                    <li><a href='#'>Contact Us</a></li>
                    <li><a href='#'>Leave a Review</a></li>
                    <li><a href='#'>Buy Merchandise</a></li>
                </ul>
            </div>
                <p className='text-center'>Copyright @ 2021</p>
        </Card>
        </div>
    )
}

export default Footer
