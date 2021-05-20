import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {WeatherSunnyLow} from '@styled-icons/fluentui-system-filled/WeatherSunnyLow'
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';

const Footer = () => {
    return (
        <div>
        <Card id='footer' className='text-left'>
            <Card.Header className='text-center'>
                Arizona Weather
            </Card.Header>
            <div id='restOfFooter' className='text-center'>
             <WeatherSunnyLow 
                size='100'
                style={{color:'#a36106'}}
             />
                <ul id='links1'>
                    <li><a href='https://twitter.com/' target='_blank' ><img src={twitter} height='64' width='64'></img> </a></li>
                    <li><a href='https://instagram.com' target='_blank'><img src={instagram} height='64' width='64'></img></a></li>
                    <li><a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'><img src={youtube} height='64' width='64'></img></a></li>
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
