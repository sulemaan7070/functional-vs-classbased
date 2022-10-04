import React, { useState } from "react";
import "./counter.css";

function FunctionalCounter() {
  const [num, setNum] = useState(0);
  function handleAdd() {
    setNum(num + 1);
  }
  function handleMinus() {
    setNum(num - 1);
  }
  return (
    <div>
  
        
        <h1>{num}</h1>

      
      <button onClick={handleAdd}>+</button>
      <button onClick={handleMinus}>-</button>

    </div>
  );
}

export default FunctionalCounter;
