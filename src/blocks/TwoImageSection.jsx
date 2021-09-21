import React from 'react'
import SectionImage from './subcomponents/SectionImage.jsx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Intro1 from '../images/intro1.jpg';
import Intro3 from '../images/intro3.jpg';

const TwoImageSection = () => {
    return(
    <div>
      <Container>
          <Row>
            <Col xs={12} md={6}>
              <SectionImage  image={Intro1} description="Why Us"/>
            </Col>
            <Col xs={12} md={6}>
              <SectionImage  image={Intro3} description="Our products"/>
            </Col>     
          </Row>
      </Container>
    </div>
    )
}

export default TwoImageSection