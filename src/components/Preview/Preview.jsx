import React from 'react'
import {useSelector} from 'react-redux';

function Preview() {
  const {text,userInput} = useSelector(state => state.type)
  const {theme} = useSelector(state => state.theme)
  const prepareText = text.split('')
  
  return (
    <div className="rounded p-3 mb-4" style={{background: theme ? 'grey': '#dee2e6'}}>
      { text ?
        prepareText.map((letter,index) => {
          let color;
          if(index < userInput.length){
            color = letter === userInput[index] ? '#28a745' : '#dc3545'
          }
          return <span key={index} style={{background: color}}>{letter}</span>
        }) : <span>Loading</span>
      }
    </div>
  )
}

export default Preview
