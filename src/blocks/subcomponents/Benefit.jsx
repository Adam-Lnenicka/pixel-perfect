import React from 'react'


const Benefit = (prop) => {

    return(
    <div  className="benefit d-flex flex-column align-items-center center" style={{backgroundColor: prop.color}}>
       <div className="benefit__icon">{prop.icon}</div>
        <h3>{prop.benefit}</h3>
        <p>{prop.description}</p>
    </div>
    )
}

export default Benefit