import React, { useState } from 'react';
import { useGithubContext } from '../context/GithubContext';

const SearchBar: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const { setUsername } = useGithubContext();

  const handleSearch = () => {
    setUsername(input);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter GitHub Username"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
