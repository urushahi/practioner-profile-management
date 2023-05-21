import React from 'react';
import DetailList from './DetailList';
import { usePractitionersById } from '../../hooks/query/usePractitoners';
import { useNavigate, useParams } from 'react-router';
import { MdArrowBack } from 'react-icons/md';
import { routes } from '../../constants/routes';

const PractitionerDetail = () => {
  const { id } = useParams();
  const { data } = usePractitionersById(id);
  const navigate = useNavigate();
  return (
    <>
      <div className='d-flex align-items-center'>
        <button
          className='btn btn__iconOnly'
          onClick={() => navigate(routes.DASHBOARD)}
        >
          <MdArrowBack size={24} />
        </button>
        <h1 className='title ml-4x'>Practitioner's Detail</h1>
      </div>
      <div className='card mt-2x'>
        <ul className='list list-detail'>
          <DetailList data={data} />
        </ul>
      </div>
    </>
  );
};

export default PractitionerDetail;
