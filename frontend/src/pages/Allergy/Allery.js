import React from 'react';
import Table from './components/Table';
import { showSideBarAction } from '../../slices/ui/allergySidebarSlice';
import { useDispatch } from 'react-redux';
import { useAllergies } from '../../hooks/query/useAllergies';

const Allergy = () => {
  const { data, isLoading } = useAllergies();
  const disptach = useDispatch();
  const showSidebar = () => {
    disptach(showSideBarAction());
  };
  return (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <h1 className='title'>Allergy's List</h1>
        <div>
          <button className='btn btn-secondary' onClick={showSidebar}>
            Add Allergy
          </button>
        </div>
      </div>
      <div className='table-wrapper'>
        <Table data={data} isLoading={isLoading} />
      </div>
    </>
  );
};

export default Allergy;
