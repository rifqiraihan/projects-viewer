import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context data
interface GithubContextType {
  username: string;
  repos: string[];
  readme: string;
  setUsername: (username: string) => void;
  setRepos: (repos: string[]) => void;
  setReadme: (readme: string) => void;
}

// Create the context with an initial value (it will be updated later)
const GithubContext = createContext<GithubContextType | undefined>(undefined);

// Define the props for the provider
interface GithubProviderProps {
  children: ReactNode;
}

// Create the provider component
export const GithubProvider: React.FC<GithubProviderProps> = ({ children }) => {
  const [username, setUsername] = useState<string>('');
  const [repos, setRepos] = useState<string[]>([]);
  const [readme, setReadme] = useState<string>('');

  return (
    <GithubContext.Provider value={{ username, repos, readme, setUsername, setRepos, setReadme }}>
      {children}
    </GithubContext.Provider>
  );
};

// Custom hook to use the context
export const useGithubContext = () => {
  const context = useContext(GithubContext);
  if (!context) {
    throw new Error('useGithubContext must be used within a GithubProvider');
  }
  return context;
};
