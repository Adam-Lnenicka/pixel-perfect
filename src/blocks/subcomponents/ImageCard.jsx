import React from 'react'

const ImageCard = (prop) => {
    
    return(
    <div className="image-card d-flex flex-column align-items-center center">
        <img src={prop.image} alt="placeholder"/>
        <div className="image-card__content">
        <h4>{prop.name}</h4>
        <p>{prop.description}</p>
        </div>
    </div>
    )
}

export default ImageCard