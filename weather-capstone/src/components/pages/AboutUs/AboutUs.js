import Cards from "./Cards"; /* Imports Cards from Cards.js */

const AboutUs = () => { /* AboutUs page function */
    return (
        <div className="container"> {/* Parent container needed to hold the components */}

            <Cards /> {/* Displaying the Cards on the page */}

        </div>
    )
}

export default AboutUs
