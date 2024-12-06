import React from 'react';
import { useGithubContext } from '../context/GithubContext';

const RepoReadme: React.FC = () => {
  const { readme } = useGithubContext();

  return (
    <div className="repo-readme">
      {readme ? <div dangerouslySetInnerHTML={{ __html: readme }} /> : <div>Select a repo to view README</div>}
    </div>
  );
};

export default RepoReadme;
