import React, {useRef} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import "./pokeapi.css"
const Pokeapi = () => {

  const inputRef = useRef();
  const nameRef = useRef();
  const imageRef = useRef();
  const displayRef = useRef();
  async function checkPoke() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputRef.current.value}`)
    const data = await response.json();
    if(data.Response == "False") {
      window.alert(`sorry we can't find ${inputRef.current.value}`)
    } else {
      displayRef.current.style.display = "block";
      nameRef.current.innerHTML = data.name;
      imageRef.current.src = data.sprites.front_default;
    }
  }
  return (
    <div className='pokemon-api'>
      <h1 className="subtitle">Welcome to Pokemon API</h1>
      <div className="info-int">
        <div className="searchbar">
            <input type='text' id='input' ref={inputRef}/>
            <button className='sendbtn' onClick={checkPoke}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
     </div>
     <div className="pokemon-display" ref={displayRef}>
      <div className="innerpoke">
            <img src='' className='pokemon-img' ref={imageRef}/>
            <h2 className="pokemon-name" ref={nameRef}></h2>
      </div>
      </div>
    </div>
  )
}

export default Pokeapi
