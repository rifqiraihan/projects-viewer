import React, { useState, useContext } from 'react';
import { GithubContext } from '../context/GithubContext';
import '../styles/SearchBar.css';

const SearchBar: React.FC = () => {
  const [username, setUsername] = useState('');
  const { fetchRepos } = useContext(GithubContext);

  const handleSearch = () => {
    if (username.trim()) {
      fetchRepos(username);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
