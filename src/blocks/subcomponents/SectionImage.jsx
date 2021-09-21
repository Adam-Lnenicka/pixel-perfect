import React, {useState} from 'react'

const Description = () => <div className="description"> Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</div>;

const SectionImage = (prop) => {

    const [rotate, setRotate] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    const handleToggle = () => {
    setRotate(!rotate);
    };

    const appearDescription = () => setShowDescription(!showDescription);

    return(
    <div className="section-image">
        <img src={prop.image} alt="placeholder"/>
        <div onClick={appearDescription} className={rotate ? "scroll" : null} >
            <div className="section-image__box image d-flex justify-content-between align-items-center">
                    <h3>Lorem Ipsum</h3>
                    <div onClick={handleToggle} className={rotate ? "rotate image" : null} >
                        <i class="fas fa-chevron-right"></i>
                    </div>
                </div>
            <div className="overlay">{showDescription ? <Description /> : null}</div> 
        </div>
    </div>
    )
}

export default SectionImage