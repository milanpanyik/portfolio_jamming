import logo from "./logo.svg";
import "./App.css";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    console.log('button clicked!');
    console.log('Search term:', inputValue);
    setSearchTerm(inputValue);
  };

  return (
    <div className="App">
      {/*Body*/}
      <div>
        <h1>Jammming</h1>
      </div>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="text here" />
        <button onClick={handleSearch} >Search </button>
      </div>
      <div className="columns">
        <div>
          <Results searchTerm={searchTerm} />
        </div>
        <div>
          <input placeholder="playlist name "></input>
        </div>
      </div>
    </div>
  );
}

export default App;
