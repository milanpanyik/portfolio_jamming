import React, { useState } from 'react';
import Searching from './components/Searching';
import Results from './components/Results';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      {/* Body */}
      <div>
        <h1 className="header">Jammming</h1>
      </div>
      <div className="Searching">
        <Searching onSearch={handleSearch} />
      </div>
      <div className="columns">
        <div className="ResultsContainer">
          <Results searchTerm={searchTerm} />
        </div>
        <div>
          <input className="inputField" placeholder="playlist name" />
        </div>
      </div>
    </div>
  );
}

export default App;
