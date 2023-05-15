import React from 'react';
import Table from './components/Table';
import { usePractitioners } from '../../../hooks/query/usePractitoners';
import { showSideBarAction } from '../../../slices/ui/sidebarSlice';
import { useDispatch } from 'react-redux';

const PractionerList = () => {
  const { data } = usePractitioners();
  const disptach = useDispatch();
  const showSidebar = () => {
    disptach(showSideBarAction());
  };
  return (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <h1 className='title font-16'>Pratitioner's List</h1>
        <div>
          <button className='btn btn-secondary' onClick={showSidebar}>
            Add Practitioners
          </button>
        </div>
      </div>
      <div>
        <Table data={data} />
      </div>
    </>
  );
};

export default PractionerList;
