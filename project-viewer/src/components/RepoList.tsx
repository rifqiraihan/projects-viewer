import React, { useContext } from 'react';
import { GithubContext } from '../context/GithubContext';
import '../styles/RepoList.css';
import { Helmet } from 'react-helmet';


const RepoList: React.FC = () => {
  const { repos, selectRepo, readme, selectedRepo, loading, loadingReadme } = useContext(GithubContext);

  return (
    <div className="repo-list-container">
      <Helmet>
        <title>{selectedRepo ? `${selectedRepo} - GitHub Projects` : 'GitHub Projects Viewer'}</title>
        <meta name="description" content={`View repositories and README for ${selectedRepo || 'GitHub user'}`} />
      </Helmet>
      {loading ? (
        <p className="loading-message">Loading repositories...</p>
      ) : repos.length === 0 ? (
        <p className="empty-message">No repositories found. Try searching for a GitHub user.</p>
      ) : (
        <div className="repo-list">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className={`repo-item ${selectedRepo === repo.name ? 'selected' : ''}`}
              onClick={() => selectRepo(repo.name)}
            >
              <h3 className="repo-name">{repo.name}</h3>
              <p className="repo-description">{repo.description || 'No description available'}</p>

              {selectedRepo === repo.name && (
                <div className="readme-section">
                  <h2 className="readme-title">README</h2>
                  {loadingReadme === repo.name ? (
                    <p className="loading-readme">Loading README...</p>
                  ) : readme ? (
                    <div className="readme-content" dangerouslySetInnerHTML={{ __html: readme }} />
                  ) : (
                    <p className="no-readme">No README available for this repository.</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RepoList;
