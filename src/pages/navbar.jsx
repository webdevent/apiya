import React from 'react'
import {Link} from 'react-router-dom'

import "./navbar.css"

const Navbar = () => {
    
  return (
    <nav className='navbar'>
      <img/>
      <h1 className="title text-10xl font-bold">Welcome to  APIYA</h1>
      <div className="api-type">
        <ul className='routes'>
          <li><Link to={`/moviesapi`}>Movie API</Link></li>
          <li><Link to={`/pokeapi`}>Pokemon API</Link></li>
          <li><Link to={`/weatherapi`}>Weather API</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
