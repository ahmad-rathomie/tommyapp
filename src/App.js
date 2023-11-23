import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' //json/
import "./App.css"
import Home from './Home'
import Navbar from './Navbar'
import Services from './Services'
import Aboutus from './Aboutus'
import Contactus from './Contactus'
import Footer from './Footer'

function App() {
  return (
    <div >
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='serv' element={<Services/>} />
        <Route path='contact' element={<Contactus/>} />
        <Route path='abt' element={<Aboutus/>} />
      </Routes>
      <Footer />

      </Router>

    </div>
   
  )
}

export default App