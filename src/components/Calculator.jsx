import React, { useState } from "react";
import "./Calculator.css";
import { Box, Container } from "@mui/material";

export default function Calculator() {
  const [number,setNumber] = useState(0);
  const [oldNumber,setOldNumber] = useState(0);
  const [operator,setOperator] = useState();

  function inputNumber(e) {
    let input= e.target.value
    
    number === 0 && input == 0 
      ? setNumber(0) 
      : number === 0 && input != 0 ? setNumber(input) : setNumber(number + input);
  }
  
  function clear() {
    setNumber(0);
  }

  function percentage() {
    setNumber(number/100);
  }

  function changeSign()
  {
      number > 0 ? setNumber(-number) : setNumber(Math.abs(number));
  }

  function calculate()
  {
    if(operator==="/"){
      return setNumber(oldNumber / number);
    }
    if (operator==="+"){
      return setNumber(parseFloat(oldNumber) + parseFloat(number));
    }
    if (operator==="X"){
      return setNumber(oldNumber * number);
    }
    if (operator==="-"){
      return setNumber(oldNumber - number);
    }
  
  }

  function operatorHandler(e)
  {
    let operatorInput=e.target.value;
    setOperator(operatorInput);
    setOldNumber(number);
    setNumber(0);
  }

  return (
    <div>
      <Box m={10} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <h1 className="result">{number}</h1>
          <Box m={6} />
          <button onClick={clear}>AC</button>
          <button onClick={changeSign}>+/-</button>
          <button onClick={percentage}>%</button>
          <button className="btn-orange" onClick={operatorHandler} value={"/"}>/</button>
          <button className="btn-gray" onClick={inputNumber} value={7}>7</button>
          <button className="btn-gray" onClick={inputNumber} value={8}>8</button>
          <button className="btn-gray" onClick={inputNumber} value={9}>9</button>
          <button className="btn-orange" onClick={operatorHandler} value={"X"}>X</button>
          <button className="btn-gray" onClick={inputNumber} value={4}>4</button>
          <button className="btn-gray" onClick={inputNumber} value={5}>5</button>
          <button className="btn-gray" onClick={inputNumber} value={6}>6</button>
          <button className="btn-orange" onClick={operatorHandler} value={"-"}>-</button>
          <button className="btn-gray" onClick={inputNumber} value={1}>1</button>
          <button className="btn-gray" onClick={inputNumber} value={2}>2</button>
          <button className="btn-gray" onClick={inputNumber} value={3}>3</button>
          <button className="btn-orange" onClick={operatorHandler} value={"+"}>+</button>
          <button className="btn-gray" style={{ width: "10rem" }} onClick={inputNumber} value={0}>
            0
          </button>
          <button className="btn-gray" onClick={inputNumber} value={"."}>,</button>
          <button className="btn-orange" onClick={calculate}>=</button>
        </div>
      </Container>
    </div>
  );
}
