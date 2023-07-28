import React, { useState } from "react";
import "./Calculator.css";
import { Box, Container } from "@mui/material";

export default function Calculator() {
  const [number,setNumber] = useState(0);

  function inputNumber(e) {
    let input= e.target.value
    if (number===0) {
     return setNumber(input);
    }
    return setNumber(number + input);
  }
  
  function clear() {
    setNumber(0)
  }


  return (
    <div>
      <Box m={10} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <h1 className="result">{number}</h1>
          <Box m={6} />
          <button onClick={clear}>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button className="btn-orange">/</button>
          <button className="btn-gray" onClick={inputNumber} value={7}>7</button>
          <button className="btn-gray" onClick={inputNumber} value={8}>8</button>
          <button className="btn-gray" onClick={inputNumber} value={9}>9</button>
          <button className="btn-orange">X</button>
          <button className="btn-gray" onClick={inputNumber} value={4}>4</button>
          <button className="btn-gray" onClick={inputNumber} value={5}>5</button>
          <button className="btn-gray" onClick={inputNumber} value={6}>6</button>
          <button className="btn-orange">-</button>
          <button className="btn-gray" onClick={inputNumber} value={1}>1</button>
          <button className="btn-gray" onClick={inputNumber} value={2}>2</button>
          <button className="btn-gray" onClick={inputNumber} value={3}>3</button>
          <button className="btn-orange">+</button>
          <button className="btn-gray" style={{ width: "10rem" }} onClick={inputNumber} value={0}>
            0
          </button>
          <button className="btn-gray">,</button>
          <button className="btn-orange">=</button>
        </div>
      </Container>
    </div>
  );
}
