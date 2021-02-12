import React from 'react'
import {useSelector} from 'react-redux';

function ParamsDisplay() {
  const {symbols,sec,text} = useSelector(state => state.type)

  const wpm = (symbols/5) / (sec/60);
  const speed = 5;
  
  if(symbols !== 0 && sec !== 0){
    
    return (
      <div className="params d-flex">
        <div className="speed d-flex flex-column">
          <h5>Speed</h5>
          <span>{wpm} wpm</span>
        </div>
        <div className="accuracy flex-column ml-5">
          <h5>Accuracy</h5>
          <span>{speed}</span>
        </div>
      </div>
    )
  }
  return null;
}

export default ParamsDisplay
