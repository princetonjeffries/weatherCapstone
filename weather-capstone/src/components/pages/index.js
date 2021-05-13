import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
const index = () => {
    return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>Hello, today is Friday, May 21st</h1>
                    <h1>It is currently 94°F</h1>
                    <img src='https://x-default-stgec.uplynk.com/ausw/slices/44f/5c3d34b8b29a45469a86c02775b7a2cf/44f2ae5b571b48f58f252bacdbcf33b4/poster_736464d81a3c49308d5d294605737d4c.jpg'></img>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default index
