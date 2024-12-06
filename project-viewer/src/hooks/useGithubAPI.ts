// In useGithubAPI.ts

import { useState, useEffect } from 'react';
import { useGithubContext } from '../context/GithubContext';

export const useGithubAPI = (username: string) => {
  const { setRepos, setReadme } = useGithubContext();  // Make sure this is getting the context
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!username) return;
    setLoading(true);
    setError('');
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);  // Update the context with the repo data
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching repositories');
        setLoading(false);
      });
  }, [username, setRepos]);

  const fetchReadme = (repo: string) => {
    fetch(`https://api.github.com/repos/${username}/${repo}/readme`)
      .then((response) => response.json())
      .then((data) => setReadme(atob(data.content)))
      .catch(() => setReadme('Error fetching readme'));
  };

  return { loading, error, fetchReadme };
};
