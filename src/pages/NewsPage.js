import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import Topbanner from '../components/Topbanner';

const NewsPage = ({ match }) => {
  const category = match.params.category || 'all';
  return (
    <>
      <Topbanner />
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
