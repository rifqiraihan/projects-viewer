import React, { createContext, useState, ReactNode } from 'react';
import axios from 'axios';

const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN; 

interface Repo { id: number; name: string; description: string; }
interface GithubContextProps {
  repos: Repo[];
  readme: string | null;
  selectedRepo: string | null;
  username: string | null;
  loading: boolean;
  loadingReadme: string | null;
  fetchRepos: (username: string) => void;
  selectRepo: (repo: string) => void;
}

export const GithubContext = createContext<GithubContextProps>({
  repos: [],
  readme: null,
  selectedRepo: null,
  username: null,
  loading: false,
  loadingReadme: null,
  fetchRepos: () => {},
  selectRepo: () => {},
});

export const GithubProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [readme, setReadme] = useState<string | null>(null);
  const [selectedRepo, setSelectedRepo] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingReadme, setLoadingReadme] = useState<string | null>(null);

  const fetchRepos = async (username: string) => {
    setUsername(username);
    setLoading(true);
    setRepos([]);
    setReadme(null);
    setSelectedRepo(null);
    try {
      const { data } = await axios.get(`https://api.github.com/users/${username}/repos`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });
      setRepos(data);
      setReadme(null);
      setSelectedRepo(null);
    } catch (error) {
      console.error('Error fetching repos:', error);
    } finally {
      setLoading(false);
    }
  };

  const selectRepo = async (repo: string) => {
    if (!username) return;
    setSelectedRepo(repo);
    setReadme(null);
    setLoadingReadme(repo);
    try {
      const { data } = await axios.get(`https://api.github.com/repos/${username}/${repo}/readme`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      });
      if (data && data.content) {
        setReadme(atob(data.content));
      } else {
        setReadme('No Readme available');
      }
    } catch (error) {
      setReadme('No Readme available');
    } finally {
      setLoadingReadme(null);
    }
  };

  return (
    <GithubContext.Provider value={{ repos, readme, selectedRepo, username, loading, loadingReadme, fetchRepos, selectRepo }}>
      {children}
    </GithubContext.Provider>
  );
};
