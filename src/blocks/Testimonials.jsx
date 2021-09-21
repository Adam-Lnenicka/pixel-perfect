import React from 'react'
import Testimonial from './subcomponents/Testimonial.jsx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Testimonials = () => {
    return(
    <div className="testimonials">
    <Container>
        <div className="block-header text-center">
          <p>At vero eos accusamus</p>
          <h2>Et harum quidem rerum</h2>
        </div>
        <Row>
          <Col xs={12} md={6}>
            <Testimonial name ="D Doe" description ="Dolor sit amet" testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80"/>
          </Col>
          <Col xs={12} md={6}>
            <Testimonial name ="D Doe" description ="Vitae Vorum ised" testimonial="Vitae Vorum ised dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRzaG90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
          </Col>
        </Row>
    </Container>
    </div>
    )
}

export default Testimonials