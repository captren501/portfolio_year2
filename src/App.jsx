import React from 'react'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        
            <Route exact path="/" >
              <Home />
              </Route>
            <Route path="/About" >
              <About />
            </Route>
            <Route path="/Contact" >
              <Contact />
            </Route>

       
    </BrowserRouter>
  )
}

export default App