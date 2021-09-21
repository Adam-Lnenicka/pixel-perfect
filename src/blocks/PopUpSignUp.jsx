import React, {useEffect, useState} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

const PopUpSignUp = () => {
    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
    setActive(!isActive);
    };

    useEffect(() =>{
        Aos.init({duration: 1000})
    }, [])
    return(     
        <div  className={isActive ? "close" : null}>
            <div className="sign-up d-flex flex-column align-items-center center">
                <h2>Use Promocode below for 50% discount</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                <h3>DISCOUNT</h3>
                <div onClick={handleToggle}>
                    <button className="bttn">close</button>
                </div>
            </div>
        </div>
    )
}

export default PopUpSignUp