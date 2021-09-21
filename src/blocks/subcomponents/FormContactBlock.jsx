import React, {useState} from 'react'

const FormContactBlock = (prop) => {

    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
    setActive(!isActive);
    };
    return(
    <div onMouseOver={handleToggle} className={isActive ? "contact-zoom-in" : null}>
        <div className="form-contact-block d-flex align-items-center center">
            <div className="form-contact-block__icon" style={{backgroundColor: prop.color}}>{prop.icon}</div>
            <div>
               <p><strong>{prop.description}</strong></p>
                <p>{prop.action}</p>
            </div>
        </div>      
    </div>
    )
}

export default FormContactBlock
