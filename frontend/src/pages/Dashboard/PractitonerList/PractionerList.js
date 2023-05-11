import React, { useState } from 'react';
import Table from './components/Table';
import { usePractitioners } from '../../../hooks/query/usePractitoners';
import CreatePractioner from '../../CreatePractitioner/CreatePractioner';

const PractionerList = () => {
  const [visibleSideForm, setToggleForm] = useState(false);
  const toggleSideForm = () => setToggleForm(!visibleSideForm);
  const { data } = usePractitioners();
  return (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <h1 className='title font-16'>Pratitioner's List</h1>
        <div>
          <button className='btn btn-primary' onClick={toggleSideForm}>
            Add Practitioners
          </button>
        </div>
      </div>
      <div>
        <Table data={data} />
      </div>
      <CreatePractioner
        className={`sideform ${visibleSideForm ? 'show' : ''}`}
        toggleForm={visibleSideForm}
        toggleSideForm={toggleSideForm}
      />
    </>
  );
};

export default PractionerList;
