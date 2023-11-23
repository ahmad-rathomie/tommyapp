import React from 'react'
import { Link } from 'react-router-dom'

function Contactus() {
  return (
    <div><h1>Contact Us</h1>
    <Link to={""}><img className='cont' src='ws.png' width={"100px"} height={"100px"}/></Link>
    <Link to={""}><img className='cont'src='insta.png' width={"100px"} height={"100px"}/></Link>
    <Link to={""}><img className='cont'src='twt.png' width={"100px"} height={"100px"}/></Link>
    </div>
  )
  
}

export default Contactus