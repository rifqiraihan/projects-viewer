import React, { Suspense, lazy } from 'react';
import { GithubProvider } from './context/GithubContext';
import './styles/App.css';

const SearchBar = lazy(() => import('./components/SearchBar'));
const RepoList = lazy(() => import('./components/RepoList'));

const App: React.FC = () => {
  return (
    <GithubProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="app-container">
        <h1 className="app-title">GitHub Projects Viewer</h1>
          <SearchBar />
          <RepoList />
        </div>
      </Suspense>
    </GithubProvider>
  );
};

export default App;
