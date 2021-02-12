import React, { useEffect, useRef } from "react";
import Preview from "../Preview/Preview";
import ParamsDisplay from "../ParamsDisplay/ParamsDisplay";
//bootstrap
import { FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserInput,
  setSymbols,
  setStart,
  setFinish,
  setSec,
  setReset,
} from "../../store/typeslice";
import {addResult} from '../../store/resultslice';
import { fetchText, countPress } from "./actions";
import { countCorrectSymbols } from "./countCorrectSymbols";
import { getCurrentData, setResult } from '../../helpers';

function Type() {
  const dispatch = useDispatch();
  const { text, userInput, started, finished, pressKey, symbols, sec} = useSelector(
    (store) => store.type
  );

  const {theme} = useSelector(state => state.theme)
  let timerID = useRef(null);
  const wpm = Math.floor(((symbols+1)/5) / (sec/60))
  const accuracy = (((symbols+1)/pressKey)*100).toFixed(2)

  function setTimer() {
    if (!started) {
      dispatch(setStart(true));
      dispatch(setSec());
      timerID.current = setInterval(() => {
        dispatch(setSec());
      }, 1000);
    }
  }

  function onFinish(userInput) {
    if (userInput === text) {
      setResult(wpm,accuracy);
      clearInterval(timerID.current);
      dispatch(setFinish(true));
      dispatch(setStart(false));
      dispatch(addResult({date: getCurrentData(),speed:wpm,accuracy}))
    }
  }

  const onUserInputChange = (event) => {
    const value = event.target.value;
    setTimer();
    onFinish(value);
    dispatch(setUserInput(value));
    dispatch(setSymbols(countCorrectSymbols(text, value)));
  };

  const onKeyPressDown = (event) => {
    dispatch(countPress(event));
  };

  const onClickHandler = () => {
    dispatch(setReset());
    dispatch(fetchText());
  };

  useEffect(() => {
    dispatch(fetchText());
  }, []);

  useEffect(() => {
    onFinish();
  }, [userInput]);

  return (
    <div className="type_app">
      <Preview />
      <FormControl
        as="textarea"
        placeholder="Start type to begin"
        value={userInput}
        onChange={(event) => {
          onUserInputChange(event);
        }}
        readOnly={finished}
        onKeyDown={(event) => {
          onKeyPressDown(event);
        }}
      />
      <div className="options d-flex justify-content-between mt-2">
        <ParamsDisplay />
        <div className="text-right">
          <Button
            variant={theme ? "light" : "dark"}
            onClick={() => {
              onClickHandler();
            }}
          >
            Restart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Type;
