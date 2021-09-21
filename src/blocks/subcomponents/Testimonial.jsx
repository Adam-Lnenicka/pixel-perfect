import React from 'react'

const Testimonial = (prop) => {
    return(
    <div className="testimonial d-flex flex-column align-items-center center">
        <div className="d-flex pt-5 mb-3 mr-1 d-flex  align-items-center center">
            <img className="testimonial__image" src={prop.image} alt="placeholder"/>
            <div className="ml-2">
                <h4>{prop.name}</h4>
                <p testimonial__description>{prop.description}</p>
            </div>
        </div>
        <div className="testimonial__text">
          <p  style={{color: "rgb(39, 39, 39)"}}>{prop.testimonial}</p>
        </div>
    </div>
    )
}

export default Testimonial