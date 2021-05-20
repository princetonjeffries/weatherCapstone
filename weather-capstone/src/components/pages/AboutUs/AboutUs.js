import CardCarousel from "./CardCarousel"; /* Imports Cards from Cards.js */

const AboutUs = () => { /* AboutUs page function */
    return (
        <div className="AboutUs"> {/* Parent container needed to hold the components */}

            <CardCarousel /> {/* Displaying the Cards on the page */}

        </div>
    )
}

export default AboutUs
