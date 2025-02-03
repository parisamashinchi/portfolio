import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Home from './components/home/index.jsx';
import { navBar,getInTouch} from './assets/config.js'

const App = () => {
  return (
    <BrowserRouter>
      {navBar.show && <Navbar/>}
      <Routes>
        <Route path="/"  element={<Home />} />
      </Routes>
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>      
    </BrowserRouter>
  );
};

export default App;
