import React, { Suspense, lazy } from 'react';
import { GithubProvider } from './context/GithubContext';
import './styles/App.css';

const SearchBar = lazy(() => import('./components/SearchBar'));
const RepoList = lazy(() => import('./components/RepoList'));
const RepoReadme = lazy(() => import('./components/RepoReadme'));

const App: React.FC = () => {
  return (
    <GithubProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="app-container">
          <SearchBar />
          <RepoList />
          <RepoReadme />
        </div>
      </Suspense>
    </GithubProvider>
  );
};

export default App;
