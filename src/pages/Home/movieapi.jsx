import React, {useRef, useState} from 'react'
import "./movieapi.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
const Movieapi = () => {
  const titleRef = useRef()
  const yearRef = useRef()
  const detailRef = useRef()
  const durationRef = useRef()
  const imageRef = useRef()
  const inputRef = useRef()
  const yearIntRef = useRef()
  const movieDisplayRef = useRef()
  
  async function checkMovie(selected) {
      const response = await fetch(`http://www.omdbapi.com/?t=${inputRef.current.value}&y=${yearIntRef.current.value}&apikey=279ca011`)
      const data = await response.json()
      if(data.Response == "False") {
        window.alert("Cant find this movie")
      } else {
        movieDisplayRef.current.style.display = "flex"
        imageRef.current.src = data.Poster;
        titleRef.current.innerHTML = data.Title;
        detailRef.current.innerHTML = data.Plot;
        durationRef.current.innerHTML = data.Runtime;
        yearRef.current.innerHTML = data.Year;
      }

  }
 
  return (
    <div className='movies-api' >
      <h1 className="subtitle">Welocme to Movies API</h1>
      <div className="info-int">
        <div className="searchbar">
            <input type='text' id='input' placeholder='Enter Movie Name here' ref={inputRef}/>
            <button className='sendbtn' onClick={checkMovie}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
        <input type="number" className='year-int' ref={yearIntRef} min="1818" placeholder='Year'/>
      </div>
      <div className="movie-display" ref={movieDisplayRef}>
        <img src='' ref={imageRef} className='movie-poster'/>
        <div className="details">
          <h2 className="subtitle" ref={titleRef}></h2>
          <span className="" ref={yearRef}></span>
          <span className="" ref={durationRef}></span>
          <p className="description" ref={detailRef}></p>
          <span className="credits">The api used was taken from <a href="https://www.omdbapi.com/">OMDB API</a></span>
        </div>
      </div>
    </div>
  )
}

export default Movieapi
