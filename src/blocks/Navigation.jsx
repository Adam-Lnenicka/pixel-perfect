import React from 'react'
import Container from 'react-bootstrap/Container';


import {BrowserRouter as Router,  Link,} from "react-router-dom";


const Navigation = () => {
    return(
    <div className="navigation__background">
      <Container>
        <div className="navigation">
          <h3>DarkCloud</h3>
          <Router>
            <div className="d-flex navigation__links">
                <Link to="/">Home </Link>
              <div className="navigation__mobile-hidden">
                <Link to="/pages">Pages </Link>
                <Link to="/dropdown">Dropdown</Link>
                <Link to="/linktext">Link Text</Link>
                <Link to="/linktext">Link Text</Link>
                <Link to="/linktext">Link Text</Link>
              </div>
            </div>
          </Router>
        </div>
      </Container>
    </div>
    )
}

export default Navigation