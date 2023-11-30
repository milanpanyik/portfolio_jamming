import Results from "./Results";
import React, { useState } from "react";

const Searching = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(inputValue);
    setInputValue("");
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Help me I'm stuck!"
        />
      </div>
      <button onClick={handleSearch}>Searchyboi</button>
      <div></div>
    </div>
  );
};

export default Searching;
