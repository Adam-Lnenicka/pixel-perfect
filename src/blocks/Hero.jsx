import React from 'react'
import Container from 'react-bootstrap/Container';


const Hero = () => {
    return(
    <div className="hero h-100">
        <Container>
            <div className="slide-in hero__content d-flex flex-column align-items-center center h-100">
                <h1 > SOLUTIONS FOR THE FUTURE</h1>
                <p>We Focus on Making Your Dreams Come True No matter where you are or what you do</p>
                <a href="/#" className="bttn" >Enter Now</a>
            </div>
        </Container>
    </div>
    )
}

export default Hero