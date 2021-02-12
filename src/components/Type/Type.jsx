import React,{useEffect} from "react";
import Preview from "../Preview/Preview";
import ParamsDisplay from '../ParamsDisplay/ParamsDisplay'
//bootstrap
import { FormControl, Button } from "react-bootstrap";
import {useDispatch,useSelector} from 'react-redux';
import {setText} from '../../store/typeslice'

function Type() {
  const {userInput} = useSelector(state => state.type);
  const dispatch = useDispatch()

  const onUserInputChange = (event) => {
    const value = event.target.value;
    dispatch(setText(value));
  }

  const onClickHandler = () => {
    dispatch(setText(''));
  }

  useEffect(() => {

  },[])


  return (
    <div className="type_app">
      <Preview/>
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
