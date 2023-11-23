import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div><h1>Thrift Shop</h1>
            <p>Style with Us
            </p>
            <div className='shoes'>
            <img  className='shoes1' src='shoes1.jpg' width={"500px"} height={"400px"} />
            <img className='shoes1' src='shoes5.jpg' width={"500px"} height={"400px"} />
            <img className='shoes1' src='shoes6.jpg' width={"500px"} height={"400px"} />
            <p>Sneakers</p>

            <div className='shirt'>
            <img className='shirt1' src='shirt1.jpg' width={"300px"} height={"400px"} />
            <img className='shirt1' src='shirt2.jpeg' width={"300px"} height={"400px"} />
            <img className='shirt1' src='shirt3.jpg' width={"300px"} height={"400px"} />
            <p>Shirts</p>

            </div>
            </div>

        </div>



    )
}

export default Home