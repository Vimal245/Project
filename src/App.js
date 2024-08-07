import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/component/Login/Login';
import SignupForm from '../src/component/Signup/Signup';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import ProductList from './component/Product/ProductList';
import ProductDetails from './component/Product/ProductDetails';
import Payment from './component/Payment/Payment.jsx';
import { CartProvider } from './component/Cart/CartContext.jsx';
import CartPage from './component/Cart/CartPage.jsx';

const App = () => {
  return (
    // <Payment></Payment>
    
    // <Home></Home>
    //   <Navbar></Navbar>
    // <Router>
    //   <div className="App">
    //     <Routes>
    //     </Routes>
    //   </div>
    // </Router> 
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
    </CartProvider>


    // <Router>
    //   <Routes>
    //     <Route path="/product/:id" element={<ProductDetails />} />
    //     <Route path="/payment" element={<Payment />} />
    //   </Routes>
    // </Router>
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
