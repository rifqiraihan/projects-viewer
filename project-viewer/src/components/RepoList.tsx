import React from 'react';
import { useGithubContext } from '../context/GithubContext';
import { useGithubAPI } from '../hooks/useGithubAPI';

const RepoList: React.FC = () => {
  const { username, repos, setRepos, setReadme } = useGithubContext();
  const { loading, error, fetchReadme } = useGithubAPI(username);

  const handleSelectRepo = (repo: string) => {
    fetchReadme(repo);
  };

  return (
    <div className="repo-list">
      {loading && <div>Loading Repositories...</div>}
      {error && <div>{error}</div>}
      {repos && repos.length > 0 ? (
        <ul>
          {repos.map((repo: any) => (
            <li key={repo.id} onClick={() => handleSelectRepo(repo.name)}>
              {repo.name}
            </li>
          ))}
        </ul>
      ) : (
        <div>No repositories found</div>
      )}
    </div>
  );
};

export default RepoList;
