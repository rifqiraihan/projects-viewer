import { useState, useEffect, useContext } from 'react';
import { GithubContext } from '../context/GithubContext';

export const useGithubAPI = (username: string) => {
  const { fetchRepos, selectRepo, repos, readme, selectedRepo } = useContext(GithubContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!username) return;
    setLoading(true);
    setError('');
    fetchRepos(username);
    setLoading(false);
  }, [username, fetchRepos]);

  const fetchReadme = (repo: string) => {
    setLoading(true);
    selectRepo(repo);
    setLoading(false);
  };

  return {
    loading,
    error,
    repos,
    readme,
    selectedRepo,
    fetchReadme,
  };
};
