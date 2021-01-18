import React, { useState, useEffect } from "react";
import "./styles.css";
import Checkbox from "./Checkbox";

export default function App() {
  const [value, setValue] = useState("a");

  const handleChange = (v) => {
    setValue(v);
  };

  useEffect(() => {
    console.log("value", value);
  });

  return (
    <div className="App">
      <Checkbox id="a" label="A" value={value} onChange={handleChange} />
      <Checkbox id="b" label="B" value={value} onChange={handleChange} />
      <button onClick={() => setValue("a")}>A</button>
      <button onClick={() => setValue("b")}>B</button>
    </div>
  );
}
