import React from 'react';
import NewsList from '../components/NewsList';

const Home = ({ news }) => {
  return (
    <div className="page-content container">
      <h1>Novosti</h1>
      <NewsList news={news} />
    </div>
  );
};

export default Home;
