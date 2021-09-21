import React from 'react'



const Card = (prop) => {
    return(
    <div className="cards d-flex flex-column align-items-center center">
        <div className="cards__icon">{prop.icon}</div>
        <h3 >{prop.heading}</h3>
        <p className="cards__card-paragraph">{prop.description}</p>
    </div>
    )
}

export default Card