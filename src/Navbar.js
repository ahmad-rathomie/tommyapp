import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div className='container' >
       
            <ol>
            <a href="/" target="">
            <button>Home</button></a>
            <a href="serv" target="">
            <button>Services</button></a>
            <a href="contact" target="">
            <button>Contact us</button></a>
            <a href="abt" target="">
            <button className="about">About us</button></a>
            <img className='logo' src='logothrift.jpg' width={"200px"} height={"200px"}/>
            </ol>
            
        </div>
        
        </div>
        
  )
}

export default Navbar