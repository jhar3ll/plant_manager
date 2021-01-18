import React from 'react';

const About = () => {

    return (
        <div>
            <h3>
                Looking for more information about Plant Manager? Well you've come to the right place! Here's how to use Plant Manager: </h3>
                1) Fill out the from to begin managing your plants
                <br/>
                <br/>
                2) To water your plant, simply click the 'water' button and the timer will reset
                <br/>
                <br/>
                3) Notice the timer counts down hours dependent on the number of times per day the plant needs watering
                <br/>
                (ex. a plant needing water 3x per day has a timer set for every 8 hours (24hr/day / 3 waterings) )
                <br/>
                <br/>
                4) Your plant can live in 3 different states: 'Good', 'Struggling', or 'Dead'
                <br/>
                <br/>
                5) Keeping your plant watered and not allowing the timer to expire will keep it alive and in good health
                <br/>
                <br/>
                6) Your plant's state can alter from 'good' to 'struggling' but once it's 'dead', it's dead for good
                <br/>
                <br/>
            <h1> Good luck and keep those plants alive! </h1>

        </div>
    );
};

export default About;