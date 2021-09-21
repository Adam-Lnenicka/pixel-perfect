import React, {useState} from 'react'

const Text = () => <div>Welcome to the blog section</div>;


const Blog = (prop) => {
    const [showText, setShowText] = useState(false);
    const onMouseOver = () => setShowText(!showText);

    return(
    <div className="blog">
        <img src={prop.image} alt="placeholder"/>
        <div onClick={onMouseOver} className="blog__line d-flex center justify-content-between">
            <div><i class="fas fa-user-alt"></i><span>{prop.user}</span></div>
            <div><i class="fas fa-comments"></i><span>{prop.comments}</span></div>
        </div>
            {showText ? <Text /> : null}    
        <div className="p-2 mb-2 ml-2 blog__description">
            <h4>{prop.date}</h4>
            <div className="blog__text">
                <p>{prop.description}</p>
            </div>
        </div>
    </div>
    )
}

export default Blog