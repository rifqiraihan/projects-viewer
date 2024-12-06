import React, { Suspense, lazy } from 'react';
import { GithubProvider } from './context/GithubContext';
import { Helmet } from 'react-helmet';
import './styles/App.css';

const SearchBar = lazy(() => import('./components/SearchBar'));
const RepoList = lazy(() => import('./components/RepoList'));

const App: React.FC = () => {
  return (
    <GithubProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>GitHub Projects Viewer</title>
          <meta name="description" content="Explore and view GitHub repositories easily" />
          <meta name="keywords" content="GitHub, repositories, React, JavaScript, open source" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://yourwebsite.com" />
        </Helmet>
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
