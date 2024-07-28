import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY;
      document.getElementById('text').style.marginTop = value * 2.5 + 'px';
      document.getElementById('leaf').style.top = value * -1.5 + 'px';
      document.getElementById('leaf').style.left = value * 1.5 + 'px';
      document.getElementById('hill5').style.left = value * 1.5 + 'px';
      document.getElementById('hill4').style.left = value * -1.5 + 'px';
      document.getElementById('hill1').style.top = value * 1 + 'px';
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header>
        <div className="logo">Logo</div>
        <nav className="navigation">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <section className="Parallax">
        <img src={`${process.env.PUBLIC_URL}/Picsart_24-07-28_01-39-41-683.png`} id="hill1" alt="hill1" />
        <img src={`${process.env.PUBLIC_URL}/Picsart_24-07-28_01-36-45-294.png`} id="hill5" alt="hill5" />
        <img src={`${process.env.PUBLIC_URL}/Picsart_24-07-28_01-29-15-214.png`} id="hill4" alt="hill4" />
        <h2 id="text">Welcome</h2>
        <img src={`${process.env.PUBLIC_URL}/Frame 1 (1).png`} id="leaf" alt="leaf" />
      </section>
      <section className="sec">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
    </div>
  );
};

export default Home;
