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
import { fetchText, countPress } from "./actions";
import { countCorrectSymbols } from "./countCorrectSymbols";

function Type() {
  const dispatch = useDispatch();
  const { text, userInput, started, finished } = useSelector(
    (store) => store.type
  );
  let timerID = useRef(null);

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
      clearInterval(timerID.current);
      dispatch(setFinish(true));
      dispatch(setStart(false));
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
            variant="outline-dark"
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
