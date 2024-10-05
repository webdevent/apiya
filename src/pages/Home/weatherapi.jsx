import React, {useRef} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import cloudsImage from "../pictures/clouds.png"
import stormImage from "../pictures/storm.png"
import sunnyImage  from "../pictures/sunny.png"
import rainyImage from "../pictures/rainy.png"
import snowyImage from "../pictures/snowing.png"
import "./weatherapi.css"

const Weatherapi = () => {
    const searchInput = useRef(null)
    const tempRef =  useRef(null)
    const windRef =  useRef(null)
    const stateRef  =  useRef(null)
    const imageRef  = useRef(null)


    async function checkWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${input.value}&appid=91c7f3413f4a542d17a8b390c9b2108e`)
        const data = await response.json()
        if(response.status == 404) { 
            window.alert("Please enter a valid city")
        } else {
            stateRef.current.innerHTML = `${data.name}`
            tempRef.current.innerHTML = `${data.main.temp}°C`
            windRef.current.innerHTML = `${data.wind.speed}km/h`
            switch(data.weather[0].main) {
                case "Rain":
                    imageRef.current.src = rainyImage;
                    break;
                case  "Snow":
                    imageRef.current.src = snowyImage;
                    break;
                case  "Clouds":
                    imageRef.current.src = cloudsImage;
                    break;
                case   "Clear":
                    imageRef.current.src = sunnyImage;
                    break;
                case    "Thunderstorm":
                    imageRef.current.src = stormImage;
                    break;
                case "sunny":
                    imageRef.current.src = sunnyImage;
                    break;
            }
        }
    }

  return (
    <div className='weather-api'>
      <h1 className="subtitle">Welcome to Weather</h1>
      <div className="info-int">
        <div className="searchbar">
            <input type='text' id='input'/>
            <button className='sendbtn'onClick={checkWeather}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
     </div>
     <div className="flex justify-center w-full align-middle">
        <div className="weather-display">
            <img src='https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png?rf=1024' alt='' ref={imageRef} className='weather-icon'/>
            <h2 className="states" id='states' ref={stateRef}></h2>
            <div className="sub-conditions">
                <span className='wind-speed' id='wind-speed' ref={windRef}></span>
                <span className="temp" id='temp'  ref={tempRef}></span>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Weatherapi
