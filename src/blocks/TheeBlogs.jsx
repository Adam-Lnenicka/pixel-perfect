import React from 'react'
import Blog from './subcomponents/Blog.jsx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Blog1 from '../images/blog1.jpg';
import Blog2 from '../images/blog2.jpg';
import Blog3 from '../images/blog.jpg';



const ThreeBlogs = () => {
    return(
    <div className="blog__container">
      <Container>
          <div className="block-header text-center">
            <p>At vero eos accusamus</p>
            <h2>Et harum quidem rerum</h2>
          </div>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Blog image={Blog1} user ="admin" comments="Comments (3)" date="05 APR 2025" description="Et harum quidem rerumexpedita distinctio"/>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Blog image={Blog2} user ="admin" comments="Comments (6)" date="04 APR 2025" description="Nam libero tempore, cum soluta"/>
            </Col>
            <Col xs={12}  sm={{ span: 6, offset: 3 }} md={{ span: 4, offset: 0 }}>
              <Blog image={Blog3} user ="admin" comments="Comments (10)" date="03 APR 2025" description="Itaque earum rerum hic tenetur"/>
            </Col>
          </Row>
      </Container>
    </div>
    )
}

export default ThreeBlogs