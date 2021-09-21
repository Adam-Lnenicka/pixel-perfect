import React, {useState} from 'react'
import FormContactBlock from './subcomponents/FormContactBlock.jsx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FormSection = () => {
    const [submitted, setSubmitted] = useState(false);
    const [values, setValues] = useState({
        name: '',
        email: '',
    });


    const handleNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            name: event.target.value,
        }));
    };
    
    const handleEmailInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return(
    <div className="form-section">
    <Container>
        <div className="block-header text-center">
          <p>At vero eos accusamus</p>
          <h2>Et harum quidem rerum</h2>
        </div>
        <Row>
            
          <Col xs={12} md={6}>
            <div className="form-section__first-column">
            <FormContactBlock icon={<i class="fas fa-phone"></i>} description ="Give Us A Call" action="00 237 893 908" color="#635785"/>
            <FormContactBlock icon={<i class="fas fa-envelope"></i>}  description ="Send Us An Email" action="support@example" color="#724c33"/>
            <FormContactBlock icon={<i class="fas fa-map-marker-alt"></i>}  description ="Come to Visit Us" action="Direction to our location" color="#53836c"/>
            </div>
          </Col>
          <Col xs={12} md={6}>

          <div className="sub-heading">
                <h3>Temporibus autem quibusdam</h3>
                <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut </p>
          </div>
          <form className='text-left d-flex flex-column align-items-start justify-content-start' onSubmit={handleSubmit}>
 
            <input
                id="name"
                className="form-section__input"
                aria-label="name"
                type="text"
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleNameInputChange}
            />
            <input
                id="email"
                aria-label="email"
                className="form-section__input"
                type="text"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleEmailInputChange}
            />

            <button type="submit" className="bttn">Submit</button>

           <h3>{submitted && <div class='form-section__success'>Thank you for contacting us, we will get back to you soon!</div>}</h3> 
            </form>
          </Col>
        </Row>
    </Container>
    </div>
    )
}

export default FormSection