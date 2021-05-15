import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./img/image1.jpg"
import image2 from "./img/image2.jpg"
import image3 from "./img/image3.jpg"

const Carousel = () => {
    return (
        <div className="carousel"> {/* Linked to a class named carousel in the index.css */}
    <AliceCarousel autoPlay autoPlayInterval="3000"> {/* AliceCarousel is an imported component. It is set to autoplay and it with switch slides every 3 seconds */}
        <img src={image1} className="sliderimg" alt=""/> {/* These images are imported from a folder named img. They all have the same class to be the same size. Alt is used to give alternate info incase the user can't view what is shown */}
        <img src={image2} className="sliderimg" alt=""/>
        <img src={image3} className="sliderimg" alt=""/>
    </AliceCarousel>
        </div>
    )
}

export default Carousel
