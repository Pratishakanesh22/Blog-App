import React from 'react';
import AboutUs from './components/pages/AboutUs/AboutUs';
import Home from"./components/pages/home/Home";
import Single from "./components/pages/single/Single";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App () {
  return (
    <>
    <Router>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route exact path='/home' element = {<Home/>}/>
     </Routes>
     <Routes>
      <Route exact path='/post/:postID' element = {<Single/>}/>
     </Routes>
     <Routes>
      <Route exact path='/About' element = {<AboutUs/>}/>
     </Routes>
    </Router>
    </>

    
  );
};

export default App;
