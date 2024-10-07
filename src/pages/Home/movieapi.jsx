import React, {useRef, useState, useEffect} from 'react'
import "./movieapi.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
const Movieapi = () => {
  const [movies, setMovies]  = useState([]);
  const titleRef = useRef();
  const yearRef = useRef();
  const detailRef = useRef();
  const durationRef = useRef();
  const imageRef = useRef();
  const inputRef = useRef();
  const yearIntRef = useRef();
  const movieDisplayRef = useRef();
  
  useEffect(() => {
    fetchMovies()
  }, [movies])

  const fetchMovies = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZWUxZWZjN2M4OGU2Nzg0NDdiOTAyYzFjODI4MjU3NSIsIm5iZiI6MTcyODIyNzY0MS41MTgwMzUsInN1YiI6IjY2YTU2MWQ3NmVmOGZmODg5YmI0Yzg0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K4LTbgRYFNDUXkGmBiV0Uych4BboYPObQvsCAMoXfF0'
      }
    };
    
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    const data = await response.json();
    setMovies(data.results); 
  }

  async function checkMovie() {
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
      <div className="movie-listing">
            <h2 className="subtitle">Top movie picks this year</h2>
            <ul className="movie-list">
              {movies.map((movie, index) => {
                  return (
                    <li key={index} className='movie-card'>
                      <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} className="movie-poster"/>
                      <h2 className="subtitle">{movie.title}</h2>
                    </li>
                  )
              })}
            </ul>
      </div>
    </div>
  )
}

export default Movieapi
