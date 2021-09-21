import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ocean1 from '../images/ocean.jpg'


const Footer = () => {
    return(
  <footer>
    <div className="inner-footer">
      <div className="inner-footer__background">
        <Container>
            <Row>
              <Col xs={12} md={3}>
                <h3>DarkCloud</h3>    
                <p className="inner-footer__first-paragraph">At vero eos et accusamus et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga</p>
                <a href="/#"><i class="fab fa-facebook-square"></i></a>
                <a href="/#"><i class="fab fa-google-plus-g"></i></a>
                <a href="/#"><i class="fab fa-linkedin"></i></a>
                <a href="/#"><i class="fab fa-twitter"></i></a>
                <a href="/#"><i class="fab fa-vk"></i></a>
              </Col>
              <Col xs={12} md={3}>
                <h3>Inner-footer Heading</h3>
                <p><a href="/#">At vero eos et accusamus</a></p>
                <div className="inner-footer__border">
                <p><a href="/#">Ducimus qui blanditiis praesentium</a></p>
                <p><a href="/#">Odio dignissimos ducimus qui</a></p>
                <p><a href="/#">Planditiis praesentium voluptatum</a></p>
                <p><a href="/#">Iustopraesentium voluptatum</a></p>
                </div>
              </Col>
              <Col xs={12} md={3}> 
                <h3>Inner-footer Heading 2</h3>
                  <div className="inner-footer__image-grid">
                    <a href="/#"><img className="mb-2" src={Ocean1} alt="placeholder"/></a>
                    <a href="/#"><img className="mb-2" src={Ocean1} alt="placeholder"/></a>    
                    <a href="/#"><img className="mb-2" src={Ocean1} alt="placeholder"/></a>    
                  </div>

                <div className="inner-footer__image-grid">
                    <a href="/#"><img className="mb-2" src={Ocean1} alt="placeholder"/></a>
                    <a href="/#"><img className="mb-2" src={Ocean1} alt="placeholder"/></a>    
                    <a href="/#"><img className="mb-2" src={Ocean1} alt="placeholder"/></a>    
                  </div>

                <div className="inner-footer__image-grid">
                    <a href="/#"><img className="mb-2" src={Ocean1} alt="placeholder"/></a>
                    <a href="/#"><img className="mb-2" src={Ocean1} alt="placeholder"/></a>    
                    <a href="/#"><img className="mb-2" src={Ocean1} alt="placeholder"/></a>    
                  </div>
              </Col>
              <Col xs={12} md={3}> 
                <h3>Inner-footer Heading 3</h3>
                <p>At vero eos et accusamus et quas molestias excepturi sint occaecati cupiditate non provident</p>
                <div className="inner-footer__date">
                    <h4>Friday 6th April 2025</h4>
                </div>

                <div className="inner-footer__border"><p>similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et id est laborum et</p></div>
                <div className="inner-footer__date ">
                    <h4>Thursday 26th April 2025</h4>
                </div>
              </Col>
            </Row>
        </Container>
        </div>
      </div>
    <div className="outer-footer d-flex align-items-center justify-content-between">
      <p>Copyright © 2018 - All Rights Reserved - Domain Name</p>
      <i class="fas fa-chevron-up"></i>
    </div>
  </footer>
    )
}

export default Footer