import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [sum, setSum] = useState();

  const handleOnChange = (e) => {
    let value = e.target.value;
    setValue(value);
  };

  const addNumbers = () => {
    let numsArr = value.split(",").map((num) => num.match(/(\d+)/)[0]);
    let nums = numsArr.map((n) => Number(n));
    const arrSum = nums.reduce((acc, cum) => acc + cum, 0);
    setSum(arrSum);
  };

  return (
    <div className="App">
      <header className="App-header">String Calculator</header>
      <textarea rows="4" cols="50" onChange={handleOnChange} value={value} />
      <br />
      <button onClick={addNumbers}>Add</button>
      <h4>Output: {sum}</h4>
    </div>
  );
}

export default App;
