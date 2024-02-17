import React, { useState } from "react";
import "./App.css";

function App() {
  const [sum, setSum] = useState([]);
  const inputs = ["", "1,2,3", "1\n2,3", "//;\n1;2;3", "//;\n1;2;3;4;5"];

  const addNumbers = () => {
    let outputs = inputs.map((input) => {
      if (input === "") return 0;
      const delimiter = getDelimiter(input);
      const formattedInput = formatInput(input);
      const total = calculateSum(getNumbers(formattedInput, delimiter));
      return total;
    });

    setSum(outputs);
  };

  const getDelimiter = (input) => {
    let matches = /^\/\/(.*)\n/.exec(input);
    if (matches && matches[1]) {
      return matches[1];
    }
    return /[\n,]/;
  };

  const formatInput = (input) => {
    const pattern = /^(\/\/.*\n)/;
    const matches = pattern.exec(input);
    if (matches && matches.length > 0) {
      return input.replace(pattern, "");
    }
    return input;
  };

  const getNumbers = (inputStr, delimiter) => {
    //1;2;3;4;5
    return inputStr
      .split(delimiter)
      .filter((n) => n !== "")
      .map(Number);
  };

  const calculateSum = (numbers) => {
    //[1, 2, 3, 4, 5]
    const negativeNums = [];
    const finalSum = numbers.reduce((sum, n) => {
      if (n < 0) {
        negativeNums.push(n);
        return 0;
      }
      return sum + n;
    }, 0);
    if (negativeNums.length > 0) {
      throw new Error(
        "Negative Numbers not allowed: " + negativeNums.join(",")
      );
    }
    return finalSum;
  };

  return (
    <div className="App">
      <header className="App-header">String Calculator</header>
      <button onClick={addNumbers}>Add</button>
      <h4>
        Output:{" "}
        {sum?.map((s, index) => (
          <p key={index}>{s}</p>
        ))}
      </h4>
    </div>
  );
}

export default App;
