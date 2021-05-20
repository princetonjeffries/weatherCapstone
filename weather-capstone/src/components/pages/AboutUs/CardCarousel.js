/* The React Bootstrap CSS file was imported to style the imported components */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Cards, the CardDeck, and the Jumbotron components were imported from React Bootstrap. */
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Carousel from 'react-bootstrap/Carousel'

/* This Sun icon was imported from Styled Icons */
import {WeatherSunnyLow} from '@styled-icons/fluentui-system-filled/WeatherSunnyLow';

/* These are all images imported from the img folder */
import image1 from './img/image1.jpg';
import image2 from './img/image2.jpg';
import image3 from './img/image3.jpg';
import image4 from './img/image4.jpg';
import image5 from './img/image5.jpg';
import image6 from './img/image6.png';
import image7 from './img/image7.jpg';
import image8 from './img/image8.jpg';
import image9 from './img/image9.jpg';

const CardCarousel = () => { /* This is the cards function */
  return (
  <>
  
  <Carousel interval={null} controls={true}>

  <Carousel.Item>

  <Jumbotron id="jumbotron-2"> {/* Jumbotron is a React Bootstrap Component */}

  <div className="header">
  <WeatherSunnyLow size='90'/> <h1 id="heading">Arizona Weather</h1> {/* The Sun icon from Styled Icons is used here */}
  </div>

  <CardDeck> {/* All of the cards are inside a card deck to align them evenly */}

  <Card className="custom-card"> {/* Each set of information and images are held in cards */}
    <Card.Body> {/* Card Bodies put padding around the content inside the card */}
      <Card.Title id="title">Our Mission</Card.Title> {/* Titles have a larger font-size compared to the rest of the text and are at the top */}
      <Card.Text id="text"> {/* Card text holds the rest of the information */}
        Provide consistent weather and forecast updates for Arizonans to keep them safe and informed.
      </Card.Text>
      <Card.Img variant="top" src={image1} className="custom-image" /> {/* Card Images display images inside cards */}
      <Card.Body>
      <Card.Img variant="top" src={image4} className="custom-image"/>
      </Card.Body>
    </Card.Body>
  </Card>

  <Card className="custom-card"> {/* Each set of information and images are held in cards */}
    <Card.Body> {/* Card Bodies put padding around the content inside the card */}
      <Card.Title id="title">Our Vision</Card.Title> {/* Titles have a larger font-size compared to the rest of the text and are at the top */}
      <Card.Text id="text"> {/* Card text holds the rest of the information */}
        Every Arizonan is informed and prepared to deal with weather endangerments.
      </Card.Text>
      <Card.Img variant="top" src={image5} className="custom-image"/> {/* Card Images display images inside cards */}
      <Card.Body>
      <Card.Img variant="top" src={image2} className="custom-image"/>
      </Card.Body>
    </Card.Body>
  </Card>

  <Card className="custom-card"> {/* Each set of information and images are held in cards */}
    <Card.Body> {/* Card Bodies put padding around the content inside the card */}
      <Card.Title id="title">Our Goals</Card.Title> {/* Titles have a larger font-size compared to the rest of the text and are at the top */}
      <Card.Text id="text"> {/* Card text holds the rest of the information */}
        -Teach more Arizonans about possible weather endangerments
      </Card.Text>
      <Card.Text id="text">
      -Inform Arizonans about the current weather as soon as possible
      </Card.Text>
      <Card.Text id="text">
      -Put safety precautions in place to prepare for a safer future
      </Card.Text>
      <Card.Img variant="top" src={image3} className="custom-image"/> {/* Card Images display images inside cards */}
    </Card.Body>
  </Card>

</CardDeck>

</Jumbotron>

</Carousel.Item>


<Carousel.Item>

  <Jumbotron id="jumbotron-2"> {/* Jumbotron is a React Bootstrap Component */}

  <div className="header">
    <h1 id="heading">How we retrieve data</h1> {/* The Sun icon from Styled Icons is used here */}
  </div>

  <CardDeck> {/* All of the cards are inside a card deck to align them evenly */}

  <Card className="custom-card"> {/* Each set of information and images are held in cards */}
    <Card.Body> {/* Card Bodies put padding around the content inside the card */}
      <Card.Title id="title">Our Methods</Card.Title> {/* Titles have a larger font-size compared to the rest of the text and are at the top */}
      <Card.Text id="text"> {/* Card text holds the rest of the information */}
        We use the newest and most accurate methods to ensure accurate forecasts.
      </Card.Text>
      <Card.Img variant="top" id="methods-image" src={image6} className="custom-image"/> {/* Card Images display images inside cards */}
        <Card.Text id="text">The exact methods that we use for our forecasts are Deterministic forecasting and Probabilistic forecasting.</Card.Text>
    </Card.Body>
  </Card>

  <Card className="custom-card"> {/* Each set of information and images are held in cards */}
    <Card.Body> {/* Card Bodies put padding around the content inside the card */}
      <Card.Title id="title">Our Tools</Card.Title> {/* Titles have a larger font-size compared to the rest of the text and are at the top */}
      <Card.Text id="text"> {/* Card text holds the rest of the information */}
        We are using new technology like portable dust generators and Doppler Radars.
      </Card.Text>
      <Card.Img variant="top" src={image7} className="custom-image"/> {/* Card Images display images inside cards */}
      <Card.Body>
      <Card.Img variant="top" src={image8} className="custom-image"/>
      </Card.Body>
    </Card.Body>
  </Card>

  <Card className="custom-card"> {/* Each set of information and images are held in cards */}
    <Card.Body> {/* Card Bodies put padding around the content inside the card */}
      <Card.Title id="title">Our Ideas</Card.Title> {/* Titles have a larger font-size compared to the rest of the text and are at the top */}
      <a href="https://www.barnesandnoble.com/w/reginald-sutcliffe-and-the-invention-of-modern-weather-systems-science-jonathan-e-martin/1137665805"><Card.Img variant="top" src={image9} className="custom-image"/></a> {/* Card Images display images inside cards */}
    </Card.Body>
  </Card>

</CardDeck>

</Jumbotron>

</Carousel.Item>


<Carousel.Item>

  <Jumbotron id="jumbotron-2"> {/* Jumbotron is a React Bootstrap Component */}

  <div className="header">
    <h1 id="heading">The Past of Arizona Weather</h1> {/* The Sun icon from Styled Icons is used here */}
  </div>

  <div className="scroll">
  <h1 id="title-3"><strong>Introduction</strong></h1>
  <p className="history-text">Arizona Weather was founded on February 14<sup>th</sup>, 1949. It was founded by Abe Cleveland and George Storm. Abe and George thought it was important to provide Arizonans with up-to-date weather reports to ensure everyone's safety. </p> 
  
  <h1 id="title-3"><strong>Part One - Loss</strong></h1>
  <p className="history-text">Abe was walking down the street on his way to his brother's wedding. He was the best man so he had to be on time and have the ring. He had 6 hours before he needed to be there. He kept the ring in his right jacket pocket in a black wooden case. Every 5 minutes he would check to make sure he still had the ring in his pocket. After his fifth check, he saw a dust storm heading straight for him. He pulled the case out of his pocket and held it tightly in his right hand to make sure he wouldn't lose it. He ran and tried to hide behind a sign but it didn't work. His suit was covered in dirt. He didn't care too much but then he noticed that the case was no longer in his right hand. He looked everywhere around him and couldn't find it. He checked his pocket about 30 more times before he realized that the dust storm must have knocked it out of his hands and into the nearby river. He knew that the ring was the most important thing and was necessary for the wedding to be successful. So he started to climb into the river.</p>

  <h1 id="title-3"><strong>Part Two - The Chase</strong></h1>
  <p className="history-text">Abe climbed down into the river and tore the left sleeve of his jacket on a metal bar sticking out of the ground. He saw the case was sitting on a pile of rocks right next to the water. It looked like it was still intact He started making his way towards the case when it started pouring rain. He tripped on a rock and fell into the water along with the case. He started swimming towards it and could almost reach it but he hit his head on a bridge that went over the river and he passed out. When he woke up he saw someone reaching down and picking up the case. Abe tried to yell out but the person ran off. Abe got up and noticed it was much darker. He checked his watch and saw that he only had two hours before the wedding. He went to where the person took the case and there was a note left on the ground. It said "check your right pocket". He checked his right pocket and found another note that said "Meet at the abandoned factory at 6PM". The factory was on the opposite side of town of where the wedding was happening so he started moving right away. The rain was replaced with loud thunder and bright purple lightning. He heard loud aggressive strings playing in the streets as he ran towards the factory. There was a strong wind blowing against him as he ran. He knew he couldn't let it slow him down so he picked up the lid of a metal trash can and kept running. He used the trash can lid to slide down the road quickly and slid right through the factory doors and fell down. He got up and everything was dark and quiet. He couldn't hear anything happening outside of the factory. He walked further into the factory and cut his leg while moving debris. Someone walked out from the railing at the top of the building above the machines. They were wearing a nice suit and had a cane. They said "Looking for this?". After that one of the crushing machines turned on. The suited figure said "I'm not letting you get to that wedding Abe." Abe responded by asking "Who are you?" to the man. The suited man said "My name is George Storm. I have been the one creating the storms around you all day, and you're not getting to that wedding."</p>

  <h1 id="title-3"><strong>Part Three - The Fight</strong></h1>
  <p className="history-text">George threw the black wooden case onto the conveyor belt that was headed straight for the crusher. He jumped down to Abe's level and tried to attack him with the cane. Abe barely dodged his attacks and moved to the other side of the room. He saw the switch that turns off the crusher was where George was standing. He started to climb up towards the switch when George flew over on a storm cloud and knocked him down with his cane. He crashed into the ground. George floated down and said "I can't let you get to that wedding because you're brother is marrying Sherry. Sherry is supposed to marry me!" George tried shocking Abe but he rolled out of the way. Abe got up and started running. He thought George would send out a dust storm so he grabbed a leaf blower he saw on the ground and sucked up the dust storm. He shot the dust storm back towards him. While George was blinded he ran towards him and jumped on his storm cloud. He floated it up to the switch and shut off the crusher, but it was too late. The machine didn't turn off in time and the case was crushed right in front of Abe. He ran back down and watched as the ring was crushed into tiny pieces. He couldn't believe the ring was destroyed. Abe went to leave the factory. George started crying and caused a flood inside the factory. It pushed the both of them out into the streets. Abe got up and looked into his reflection in the water. It was already bad enough that the ring was destroyed but he also looked terrible. He knew that he couldn't show up to the wedding anymore. Abe walked up to George and asked "Why are you crying? Isn't this what you wanted?". George responded by saying "No. Not really. I thought it was but I still feel the same. I'm sorry." Abe said nothing and just started walking home. George said "You know the wedding is the other way right?" Abe said "Yeah, but I'm not going to the wedding. There's no point. I don't have the ring and I look terrible." George said "Who cares? You need to be there for your brother. He won't care about the ring or how you look. He will just be happy that you came. That's what Sherry likes about him." Abe said "But I'll never make it in time, it's across town." George said "Hop on" and signaled towards his cloud. Abe said "Are you sure?" George said "Yes. I need to make this right." Abe climbed on the cloud and they flew across town.</p>

  <h1 id="title-3"><strong>Part Four - The Wedding</strong></h1>
  <p className="history-text">Abe and George made it to the wedding right before the end of the ceremony. Abe saw his brother, Robert, looking nervous and worried. George told him to get up there and handed him a piece of string. Abe walked up next to Robert. He asked for the ring and Abe handed him the piece of string and said "I lost the ring. I'm so sorry." Robert said "It's okay. I'm just glad you made it." He tied the string around Sherry's finger and the ceremony was finished. Sherry knew exactly why the ring was lost and she was happy with her piece of string. The wedding was a great time and George explained what happened and apologized. Abe and George became friends after the wedding and started working together.</p>

  <h1 id="title-3"><strong>Conclusion</strong></h1>
  <p className="history-text">Sherry and Robert stayed happily married and had 2.5 children. George and Abe worked together to forecast weather and form Arizona Weather.</p>

  <h1 id="title-3"><strong>The End</strong></h1>
  <p id="end">Thank you for reading about our history!</p>
</div>

</Jumbotron>

</Carousel.Item>

</Carousel>
</>

  )
}

export default CardCarousel
