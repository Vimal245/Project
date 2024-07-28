import React from 'react';
import './Home.css';
// import effect from'./Home.js';
// import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div>
        <div className="Parallax">
          <img src="C:\Users\LENOVO\Desktop\New folder (2)\sample\src\Assets\Picsart_24-07-28_01-39-41-683.png" id="hill1" alt="Hill 1" />
          <img src="C:\Users\LENOVO\Desktop\New folder (2)\sample\src\Assets\Picsart_24-07-28_01-36-45-294.png" id="hill4" alt="Hill 4" />
          <img src="C:\Users\LENOVO\Desktop\New folder (2)\sample\src\Assets\Picsart_24-07-28_01-29-15-214.png" id="hill5" alt="Hill 5" />
          <h6 id="text">GET YOUR DAY2DAY <br />THINGS WITHIN MINUTES</h6>
          <img src="C:\Users\LENOVO\Desktop\New folder (2)\sample\src\Assets\Frame 1 (1).png" id="leaf" alt="Leaf" />
        </div>

        <section className="sec">
          <h2>Scroll</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>
        <script src="Home.js"></script>
      </div>
    </div>
  );
};

export default Home;
