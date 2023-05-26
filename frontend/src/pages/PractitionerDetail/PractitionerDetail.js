import React from 'react';
import DetailList from './DetailList';
import { usePractitionersById } from '../../hooks/query/usePractitoners';
import { useNavigate, useParams } from 'react-router';
import { MdArrowBack } from 'react-icons/md';
import { routes } from '../../constants/routes';
import { FaRegUser } from 'react-icons/fa';

const PractitionerDetail = () => {
  const { id } = useParams();
  const { data } = usePractitionersById(id);
  const navigate = useNavigate();
  const imgSrc = data?.image ? (
    <img src={data?.image} alt='Test' />
  ) : (
    <FaRegUser size={150} />
  );
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
        <div className='avatar avatar--lg avatar--round'>{imgSrc}</div>

        <ul className='list list-detail mt-4x'>
          <DetailList data={data} />
        </ul>
      </div>
    </>
  );
};

export default PractitionerDetail;
