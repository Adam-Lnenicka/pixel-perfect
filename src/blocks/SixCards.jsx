import React, {useEffect} from 'react'
import Card from './subcomponents/Card.jsx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Aos from 'aos';
import 'aos/dist/aos.css';

const SixCards = () => {
    useEffect(() =>{
        Aos.init({duration: 2500})
    }, [])
    return(

    <div className="six-cards">
      <div className="six-cards__background">
      <Container>
        <div className="block-header text-center">
          <p className="six-cards__header-paragraph">At vero eos accusamus</p>
          <h2>Et harum quidem rerum</h2>
        </div>
          <Row>
            <Col xs={12} sm={6} md={4}  data-aos="zoom-in" data-aos-once='true'>
              <Card icon={<i class="fas fa-hourglass-half"></i>} heading ="Card Heading 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            </Col>
            <Col xs={12} sm={6} md={4}  data-aos="zoom-in" data-aos-once='true'>
              <Card icon={<i class="fas fa-paw"></i>} heading ="Card Heading 2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            </Col>
            <Col xs={12} sm={6} md={4}  data-aos="zoom-in" data-aos-once='true'>
              <Card icon={<i class="fas fa-calculator"></i>} heading ="Card Heading 3" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            </Col>
            <Col xs={12} sm={6} md={4}  data-aos="zoom-in" data-aos-once='true'>
              <Card icon={<i class="fas fa-phone-alt"></i>} heading ="Card Heading 4" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            </Col>
            <Col xs={12} sm={6} md={4}  data-aos="zoom-in" data-aos-once='true'>
              <Card icon={<i class="fas fa-table"></i>} heading ="Card Heading 5" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            </Col>
            <Col xs={12} sm={6} md={4}  data-aos="zoom-in" data-aos-once='true'>
              <Card icon={<i class="fas fa-hand-holding-usd"></i>} heading ="Card Heading 6" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            </Col>
          </Row>
      </Container>
      </div>
    </div>
    )
}

export default SixCards