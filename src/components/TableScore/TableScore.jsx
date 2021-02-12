import React from "react";
import { Table } from "react-bootstrap";

import {useSelector} from 'react-redux'

function TableScore() {
  const {theme}= useSelector(state => state.theme)
  const {results} = useSelector(state => state.results)
  return (
    <>
      <h3 align="right">Best 5 Attempts</h3>
      <Table variant = {theme  ? 'light' : 'dark'} striped bordered hover>
        <thead>
          <tr>
            <th>Attempt</th>
            <th>Speed</th>
            <th>Accuracy</th>
          </tr>
        </thead>
        <tbody>
          {results.slice().sort((a,b) => {
            if(a.speed === b.speed){
              return b.accuracy - a.accuracy
            }
            return b.speed - a.speed}
            ).slice(0,5).map((result,index) => {
            let {date,speed,accuracy} = result
            return (
              <tr key={index}>
                <td>{date}</td>
                <td>{speed}</td>
                <td>{accuracy}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default TableScore;
