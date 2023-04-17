import React from 'react'
import Bottone from './components/Bottoni'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'
import './App.css';
//we import the fontawesome sinle component

function App() {

  return (
    <div className='fondo'>
      
      <div className="m-auto text-center header d-flex align-items-center flex-column">
        <h1 className="w-75 text-center my-3 my-sm-4 m-auto">
          <span>Rule of Three Timer </span>
          <FontAwesomeIcon icon={faStopwatch} />
        </h1>
        <p className="w-75 text-center m-auto">
          In this game you check if each number is divisible by three, on a timer.<br/>
          Press the stop botton to give up and get a +1 in the score.
        </p>
      </div>

      <Bottone />

      <footer className="bg-dark p-1 text-white foot text-center position-fixed bottom-0 w-100">
        <span>Code made by Angelo Zarate, check his </span>
        <span><a href="https://codepen.io/misterlinux" className="text-warning">codepen</a></span>
        <span> and his in </span>
        <span><a href="https://github.com/Misterlinux?tab=repositories" className="text-warning">Github</a></span>
      </footer>

    </div>
  );

//we need extra <span> for the a to keep the <a> link effect
}

export default App;
