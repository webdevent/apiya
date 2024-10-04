import React from 'react'
import {Link} from 'react-router-dom'
import MovieapiImage from './pictures/posters.jpg'
import PokeapiImage from './pictures/pokeposter.webp'
import WeatherapiImage from './pictures/weather.avif'
import "./Welcome.css"
const Welcome = () => {
  return (
    <div className='welcome-page'>
      <h1 className="subtitle">APIYA home page explore our three apis</h1>
      <ul className='welcome-display'>
          <li className='card'>
            <Link to={`/moviesapi`}>
                <img src={MovieapiImage} className='poster'/>
                <span className='card-title'>Movie API</span>
            </Link>
          </li>
          <li className='card'>
            <Link to={`/pokeapi`}>
                <img src={PokeapiImage} className='poster'/> 
                <span className='card-title'>Pokemon API</span>
            </Link>
          </li>
          <li className='card'>
            <Link to={`/weatherapi`}>
                <img src={WeatherapiImage} className='poster'/> 
                <span className='card-title'>Weather API</span>
            </Link>
          </li>
      </ul>
    </div>
  )
}

export default Welcome
