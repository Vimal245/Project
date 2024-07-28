import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/component/Login/Login';
import SignupForm from '../src/component/Signup/Signup';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';

const App = () => {
  return (
    <Home></Home>
      // <Navbar></Navbar>
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<Login />} />
    //       <Route path="/signup" element={<SignupForm />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
};

export default App;
