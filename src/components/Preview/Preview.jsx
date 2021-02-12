import React from 'react'
import {useSelector} from 'react-redux';

function Preview() {
  const {text,userInput} = useSelector(state => state.type)
  const prepareText = text.split('')

  return (
    <div className="border rounded p-3 mb-4">
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
