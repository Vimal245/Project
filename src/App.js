import Cart from './component/Product/Cart.jsx';
import Checkout from './component/Product/Checkout.jsx';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/component/Login/Login';
import SignupForm from '../src/component/Signup/Signup';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import ProductList from './component/Product/ProductList';
import ProductDetails from './component/Product/ProductDetails';

const App = () => {
  return (
    // <Product></Product>
    
    // <Home></Home>
    //   <Navbar></Navbar>
    // <Router>
    //   <div className="App">
    //     <Routes>
    //     </Routes>
    //   </div>
    // </Router> 
    
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;


// src/App.js

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ProductDetails from './component/Product/ProductDetails.jsx';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/product/:id" element={<ProductDetails />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
