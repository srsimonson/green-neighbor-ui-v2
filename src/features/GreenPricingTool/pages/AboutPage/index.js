import React from 'react';
import './AboutPage.scss';

const AboutPage = () => {
  const test = () => {
    console.log('test');
  };
  return (
    <div>
      <h1 id="header">Frequently Asked Questions</h1>
      <button type="submit" onClick={test}>TEST (remove me)</button>
    </div>
  );
};

export default AboutPage;
