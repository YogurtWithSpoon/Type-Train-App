import React from 'react'
import {useSelector} from 'react-redux';
function ParamsDisplay() {
  const {symbols,sec,pressKey} = useSelector(state => state.type)

  const wpm = (symbols/5) / (sec/60)
  const accuracy = ((symbols/pressKey)*100).toFixed(2)
    
  return (
    <div className="params d-flex">
      <div className="speed d-flex flex-column">
        <h5>Speed</h5>
        <span>{symbols !== 0 && sec !== 0 ? Math.floor(wpm) : 0} wpm</span>
      </div>
      <div className="accuracy flex-column ml-5">
        <h5>Accuracy</h5>
        <span>{symbols !== 0 && sec !== 0 ? accuracy : 0} %</span>
      </div>
    </div>
  )
}

export default ParamsDisplay
