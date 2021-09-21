import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import React, {useState} from 'react';
import Navigation from './blocks/Navigation.jsx';
import Hero from './blocks/Hero.jsx';
import Benefits from './blocks/Benefits.jsx';
import Footer from './blocks/Footer.jsx';
import TwoImageSection from './blocks/TwoImageSection.jsx';
import SixCards from './blocks/SixCards.jsx';
import Testimonials from './blocks/Testimonials.jsx';
import ThreeImageCards from './blocks/TheeImageCards.jsx';
import FormSection from './blocks/FormSection.jsx';
import ThreeBlogs from './blocks/TheeBlogs.jsx';
import PopUpSignUp from './blocks/PopUpSignUp';

function App() {

  const [isActive, setActive] = useState(false);
  const [close, setClose] = useState(false);
  const [textToggle, textToggleState] = useState(true);

  const handleToggle = () => {
  setActive(!isActive);
  textToggleState(!textToggle);
  };

  const handleClose = () => {
    setClose(!close);
  };

  

  return (
    
    <div className={isActive ? "large-text" : null}>
      <div  className={close ? "close" : null}>
        <div className="change-text-size-table d-flex flex-column align-items-center justify-content-center ">
          <div onClick={handleClose}><i class="fas fa-times"></i></div>
          <button className="bttn" onClick={handleToggle}>Customise your text size</button>
          {
            textToggle ?
              <h3>large text</h3>
            :
              <h3>small text</h3>
          }
        </div>
      </div>
      
      <Navigation/>
      <Hero/>
      <Benefits/>
      <TwoImageSection/>
      <SixCards/>
      <ThreeImageCards/>
        <div className="sticky" data-aos="zoom-in" data-aos-delay="3000">
          <PopUpSignUp/>
        </div>
      <Testimonials/>
      <ThreeBlogs/>
      <FormSection/> 
      <Footer/>
    </div>
  );
}

export default App;
