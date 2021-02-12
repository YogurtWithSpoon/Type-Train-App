import React from "react";
import Preview from "../Preview/Preview";
import ParamsDisplay from '../ParamsDisplay/ParamsDisplay'
//bootstrap
import { FormControl, Button } from "react-bootstrap";

function Type() {
  return (
    <div className="type_app">
      <Preview />
      <FormControl as="textarea" placeholder="Start type to begin" />
      <ParamsDisplay />
      <div className="text-right">
        <Button variant="outline-dark">Restart</Button>
      </div>
    </div>
  );
}

export default Type;
