import React, { useEffect, useState } from 'react';

const GITHUB_USERNAME = 'launchlayer'; // Change to your org/user
const REPO = 'launchlayer-main'; // Change to your repo

const LiveFeed = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold mb-8 text-center">Live GitHub Feed</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map(repo => (
            <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="block bg-gray-50 rounded-xl shadow p-6 hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2 text-pink-600">{repo.name}</h3>
              <p className="text-gray-700 mb-2">{repo.description}</p>
              <span className="text-xs text-gray-400">Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveFeed;
