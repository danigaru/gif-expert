import React, { Fragment, useState } from 'react';
import { AddCategory } from './AddCategory';
import GifGrid from './GifGrid';

const GitExpertApp = () => {

  const [category, setCategories] = useState('Dragon ball');

  return (
    <Fragment>
      <h2>Git Expert</h2>
      <AddCategory setCategories={setCategories} />
      <GifGrid category={category} key={category} />
    </Fragment>
  );
}

export default GitExpertApp;