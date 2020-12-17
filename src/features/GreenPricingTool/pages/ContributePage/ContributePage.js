import React from 'react';
import './ContributePage.scss';

import Donate from './Donate';
import Newsletter from './Newsletter';
import SocialMedia from './SocialMedia';

const ContributePage = () => {
  const test = () => {
    console.log('test');
  };
  return (
    <div>
      <h1 id="header">Contribute</h1>
      <button type="submit" onClick={test}>TEST (remove me)</button>
      <SocialMedia />
      <Newsletter />
      <Donate />
    </div>
  );
};

export default ContributePage;
