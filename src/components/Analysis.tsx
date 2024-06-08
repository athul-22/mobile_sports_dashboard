import React, { useEffect, useState } from 'react';
import { gql, request } from 'graphql-request';
import './Analysis.css';
import NAVIGATION from '../assets/NAVIGATION.png';
import GRAPH from '../assets/GRAPH.png';
import FLAG from '../assets/flag.png';

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';
const GITHUB_TOKEN = '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'; 

const REPO_QUERY = gql`
{
  viewer {
    repositories(first: 100) {
      totalCount
      nodes {
        stargazers {
          totalCount
        }
      }
    }
  }
}
`;

const Analysis: React.FC = () => {
  const [repoCount, setRepoCount] = useState<number | null>(null);
  const [starCount, setStarCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request(GITHUB_GRAPHQL_API, REPO_QUERY, {}, {
          Authorization: `Bearer ${GITHUB_TOKEN}`
        });
        
        const { totalCount, nodes } = response.viewer.repositories;
        const totalStars = nodes.reduce((acc: number, repo: any) => acc + repo.stargazers.totalCount, 0);
        
        setRepoCount(totalCount);
        setStarCount(totalStars);
      } catch (error) {
        console.error("Error fetching data from GitHub API:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="analysis-container">
        <p className="analysis-header">
          <img src={NAVIGATION} height="20px" width="20px" style={{ marginRight: '5px' }} />
          Today's Highlights
        </p>
        <p className="analysis-subheader">1.6 Hours | 10 K.M</p>
        <img src={GRAPH} alt='' height="50px" width="50px" style={{ marginTop: '10px' }} />
      </div>
      <div className="columns-container">
        <div className="column column-1">
          <div style={{ display: 'inline-flex', justifyContent: 'center' }}>
            <img src={FLAG} height="20px" width="20px" style={{ marginRight: '5px', marginTop: '5px' }} />
            <p style={{ color: '#10a71a', fontSize: '30px' }}>8</p>
          </div>
          <p style={{ fontSize: '12px' }}>Goal In a Week</p>
        </div>
        <div className="column column-2">
          <p style={{ fontSize: '30px', }}>{repoCount !== null ? repoCount : ''}</p>
          <p style={{ fontSize: '12px' }}>Total Repositories</p>
        </div>
        <div className="column column-3">
          <p style={{ fontSize: '30px' }}>{starCount !== null ? starCount : ''}</p>
          <p style={{ fontSize: '12px' }}>Total Stars</p>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
