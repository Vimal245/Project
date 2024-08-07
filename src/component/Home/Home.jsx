import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import TopCarousel from './Carousel'; // Adjust the import path as necessary

const Home = () => {
  return (
    <div className='home-bg'>
      <Navbar />
      <TopCarousel />
      <section className="sec" id="about-us">
        <h2>About Us</h2>
        <div className='contain'>
          <div className='content'>
            <h3>Who are we?</h3>
            <p>
              Our mission is to provide the best quality products to our customers. We aim to provide a seamless shopping experience to our customers.
              QuickBox connects customers with local stores for fast and convenient delivery of a wide range of products. Unlike traditional models, QuickBox ensures faster and more reliable service by enabling local stores to handle their own deliveries directly to customers. Experience the future of local shopping with QuickBox's efficient and customer-centric approach. QuickBox offers a seamless online shopping experience with an intuitive platform where customers can browse, order, and track their deliveries in real-time. With QuickBox, local businesses gain a competitive edge, and customers enjoy quick access to their favorite products without the wait. Trust QuickBox to deliver not just products, but satisfaction and convenience right to your doorstep.
            </p>
          </div>
          <div className='content-vec'>
            <img src={`${process.env.PUBLIC_URL}/About img.png`} alt="Vector" />
          </div>
        </div>
      </section>
      <section className="sec" id="contact-us">
        <h2>Contact Us</h2>
        <div className='contain'>
          <div className='content'>
            <p>
              <b>Address: </b>Thika town, Naltex building, 2nd floor<br />
              <b>Phone: </b>Call us at +91 9999 8888<br />
              <b>Hours: </b>From 8 a.m To 6 p.m<br /><br />
              <i>We'd love to hear from you! Whether you have questions about our services, need assistance with an order, or simply want to provide feedback, we're here to help.
              At QuickBox, customer satisfaction is our top priority.</i>
            </p>
          </div>
          <div className='content-vec'>
            <img src={`${process.env.PUBLIC_URL}/Contact.png`} alt="Vector" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
