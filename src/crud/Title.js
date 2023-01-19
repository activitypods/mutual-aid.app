import React from 'react';

const Title = ({ record }) => {
  return <span>{record?.['pair:label']}</span>;
};

export default Title;
