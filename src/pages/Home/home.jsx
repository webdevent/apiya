import React from 'react'
import Navbar from './navbar.jsx'
import Movieapi from './movieapi.jsx'
import Pokeapi from './pokeapi.jsx'
import Weatherapi from './weatherapi.jsx'
import Welcome from './Welcome.jsx'
import { Route, Routes } from 'react-router-dom'
import "./home.css"

const Home = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/moviesapi" element={<Movieapi/>}/>
            <Route path="/pokeapi" element={<Pokeapi/>}/>
            <Route path="/weatherapi" element={<Weatherapi/>}/>
        </Routes>
    </div>
  )
}
export default Home
