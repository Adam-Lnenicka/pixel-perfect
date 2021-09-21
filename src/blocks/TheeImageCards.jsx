import React from 'react'
import ImageCard from './subcomponents/ImageCard.jsx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Computer1 from '../images/computer1.jpg';
import Computer2 from '../images/computer2.jpg';
import Computer3 from '../images/computer3.jpg';



const ThreeImageCards = () => {
    return(
    <div>
      <div className="three-image-cards__background">
      </div>
      <Container>
        <div className="three-image-cards__content">
          <div className=" block-header text-center">
            <p>At vero eos accusamus</p>
            <h2>Pixem harum quidem</h2>
          </div>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <ImageCard  image={Computer1}  name="A. Doe" description="Sed ut perspiciatis"/>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <ImageCard  image={Computer2} name="A. Doe" description="Ipsum ut perspiciatis"/>
            </Col>
            <Col xs={12} sm={{ span: 6, offset: 3 }} md={{ span: 4, offset: 0 }}>
              <ImageCard  image={Computer3} name="A. Doe" description="Ut pers ipsumrebpoyh"/>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
    )
}

export default ThreeImageCards