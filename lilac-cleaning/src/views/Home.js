import React, { useState }  from 'react';

import "./Home.css";

const Home = () => {

  const [heroInput, setHeroInput] = useState('');

  const handleHeroInputChange = (event) => {
    setHeroInput(event.target.value);
  };

  const handleHeroSubmit = (event) => {
    event.preventDefault();
    // Perform any desired action with the submitted text
    console.log('Submitted Text:', heroInput);
    // Reset the text input field
    setHeroInput('');
  };

  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-image">
          <img src={"https://picsum.photos/150"} alt="PLACEHOLDER" />
        </div>
        <div className="hero-content">
          <h1>Multilingual Cleaning Services in Stockholm</h1>
          <p></p>
          <form onSubmit={handleHeroSubmit} className='hero-form'>
            <input type='text' id='text-input' placeholder="Postal Code" value={heroInput} onChange={handleHeroInputChange}/>
            <button type="submit" className="cta-button">Get Started</button>
          </form>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <div className="feature-icon">
            {/* Add your feature icon here */}
          </div>
          <h2>Feature 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            {/* Add your feature icon here */}
          </div>
          <h2>Feature 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            {/* Add your feature icon here */}
          </div>
          <h2>Feature 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>

      <section className="testimonial">
        <div className="testimonial-text">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
          <p>- John Doe</p>
        </div>
        <div className="testimonial-image">
          {/* Add your testimonial image here */}
        </div>
      </section>
    </div>
  );
};

export default Home;

