import React, {useEffect} from 'react'
import Benefit from './subcomponents/Benefit.jsx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Benefits = () => {
    useEffect(() =>{
        Aos.init({duration: 1000})
    }, [])
    return(
    <Container>
        <div className="benefits"  >
        <Row>
          <Col xs={12} sm={6} md={3} data-aos="fade-right" data-aos-once='true'>
            <Benefit  icon={<i class="fas fa-hand-rock"></i>} benefit ="Plan" description="Planning is everything in life, we help with the strategy" color="#724c33"/>
          </Col>
          <Col xs={12} sm={6} md={3} data-aos="fade-right" data-aos-once='true'>
            <Benefit icon={<i class="fas fa-dove"></i>} benefit ="Execute" description="We Can Help With SEO, design or anything else" color="#3d4e61"/>
          </Col>
          <Col xs={12} sm={6} md={3} data-aos="fade-right" data-aos-once='true'>
            <Benefit icon={<i class="fas fa-history"></i>} benefit ="Resolve" description="When you get stuck it is time to rethink and move on." color="#53836c"/>
          </Col>
          <Col xs={12} sm={6} md={3} data-aos="fade-right" data-aos-once='true'>
            <Benefit icon={<i class="fas fa-heartbeat"></i>} benefit ="Repeat" description="We will be with you till the end, we will alwas have your back" color="#635785"/>
          </Col>
        </Row>
        </div>
    </Container>
    )
}

export default Benefits