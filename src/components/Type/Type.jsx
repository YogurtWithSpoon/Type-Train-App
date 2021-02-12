import React,{useEffect,useState} from "react";
import Preview from "../Preview/Preview";
import ParamsDisplay from '../ParamsDisplay/ParamsDisplay'
//bootstrap
import { FormControl, Button } from "react-bootstrap";
import {useDispatch} from 'react-redux';
import {fetchText} from './actions'

function Type() {
  const dispatch = useDispatch()
  const [userInput,setInput] = useState('');
  
  const onUserInputChange = (event) => {
    const value = event.target.value;
    setInput(value)
  }

  const onClickHandler = () => {
    setInput('')
    dispatch(fetchText());
  }

  useEffect(() => {
    dispatch(fetchText());
  },[])

  return (
    <div className="type_app">
      <Preview userInput={userInput}/>
      <FormControl 
        as="textarea" 
        placeholder="Start type to begin" 
        value={userInput}
        onChange={(event) => {onUserInputChange(event)}}
      />
      <ParamsDisplay />
      <div className="text-right">
        <Button variant="outline-dark" 
          onClick={() => {onClickHandler()}}>Restart</Button>
      </div>
    </div>
  );
}

export default Type;
