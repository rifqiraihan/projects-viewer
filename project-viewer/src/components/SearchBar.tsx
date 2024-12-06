import React, { useState, useContext } from 'react';
import { GithubContext } from '../context/GithubContext';
import { Helmet } from 'react-helmet';
import '../styles/SearchBar.css';

const SearchBar: React.FC = () => {
  const [username, setUsername] = useState('');
  const { fetchRepos, loading } = useContext(GithubContext);

  const handleSearch = () => {
    if (username.trim()) {
      fetchRepos(username);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClear = () => {
    setUsername('');
  };

  return (
    <div className="search-bar">
      <Helmet>
        <meta name="description" content={`Search for GitHub repositories for user ${username}`} />
      </Helmet>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKeyPress}
        aria-label="GitHub username"
      />
      <button
        onClick={handleSearch}
        disabled={loading || !username.trim()}
        aria-label="Search repositories"
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
      {username && (
        <button onClick={handleClear} aria-label="Clear search">
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchBar;
