import React from 'react';
import Table from './components/Table';
import { usePractitioners } from '../../../hooks/query/usePractitoners';

const PractionerList = () => {
  const { data } = usePractitioners();
  console.log(data);
  return <Table data={data} />;
};

export default PractionerList;
