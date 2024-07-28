import React, { useEffect } from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar'

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
      <Navbar />
      <section className="Parallax">
        <img src={`${process.env.PUBLIC_URL}/Picsart_24-07-28_01-39-41-683.png`} id="hill1" alt="hill1" />
        <img src={`${process.env.PUBLIC_URL}/Picsart_24-07-28_01-36-45-294.png`} id="hill5" alt="hill5" />
        <img src={`${process.env.PUBLIC_URL}/Picsart_24-07-28_01-29-15-214.png`} id="hill4" alt="hill4" />
        <h2 id="text">Welcome</h2>
        <img src={`${process.env.PUBLIC_URL}/Frame 1 (1).png`} id="leaf" alt="leaf" />
      </section>
      <section className="sec" id="about-us">
        <h2>About Us</h2>
        <div className='contain'>
          <div className='content'><br></br>
            <h3 style={{ color: '' }}>Who are we ?</h3><br></br>
            <p style={{ color: 'black' }}>
              Our mission is to provide the best quality products to our customers. We aim to provide a seamless shopping experience to our customers.
              QuickBox connects customers with local stores for fast and convenient delivery of a wide range of products. Unlike traditional models, QuickBox ensures faster and more reliable service by enabling local stores to handle their own deliveries directly to customers. Experience the future of local shopping with QuickBox's efficient and customer-centric approach. QuickBox offers a seamless online shopping experience with an intuitive platform where customers can browse, order, and track their deliveries in real-time. With QuickBox, local businesses gain a competitive edge, and customers enjoy quick access to their favorite products without the wait. Trust QuickBox to deliver not just products, but satisfaction and convenience right to your doorstep.
            </p>
          </div>
          <div className='content-vec'>
            <img src={`${process.env.PUBLIC_URL}/About img.png`} alt="Vector" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
