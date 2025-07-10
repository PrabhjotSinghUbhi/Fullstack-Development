import React, { useState, useEffect, useCallback } from "react";
import List from "./List";

function App() {
  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "black",
  };

  const [value, setValue] = useState(1);

  const getValues = useCallback(() => {
    let arr = [value, value + 1, value + 2];
    console.log(arr);

    return arr;
  }, [value]);

  return (
    <div style={theme}>
      <input
        type="Number"
        value={value}
        placeholder="Enter Number"
        onChange={(e) => {
          setValue(Number(e.target.value));
        }}
      />

      <button
        type="button"
        onClick={() => {
          setDark((prev) => !prev);
        }}
      >
        toggle theme
      </button>

      <List getValues={getValues} />
    </div>
  );
}

export default App;
