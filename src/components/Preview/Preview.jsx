import React from 'react'
import {useDispatch,useSelector} from 'react-redux';

function Preview() {
  const {userInput,text} = useSelector(state => state.type)
  return (
    <div className="border rounded p-3 mb-4">
      {text}
    </div>
  )
}

export default Preview
