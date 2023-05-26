import React, { useMemo, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { showSideBarAction } from '../../../../slices/ui/sidebarSlice';
import { WorkingDays } from '../../../../constants/constants';
import Badge from '../../../../components/common/Badge';
import { deletePractitionerById } from '../../../../services/practitioners';
import ReactTable from '../../../../components/common/ReactTable/ReactTable';
import {
  hideModalAction,
  showModalAction,
} from '../../../../slices/ui/modalSlice';
import { useQueryClient } from 'react-query';
import { BsEyeFill } from 'react-icons/bs';
import { useNavigate } from 'react-router';
import * as toast from '../../../../utils/toast';

const Table = (props) => {
  const { data } = props;
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const viewDetail = (id) => {
    navigate(`/practitioner/${id}`);
  };

  const updateForm = (id) => {
    dispatch(showSideBarAction({ id: id, title: 'Update Practitioner' }));
  };

  const deletePractitioner = (id) => {
    const deleteModal = (
      <>
        <p className='modal__content'>
          Are you sure you want to delete practitioner?
        </p>
        <div className='btn-group justify-content-end'>
          <button
            className='btn btn-danger'
            onClick={async () => {
              dispatch(hideModalAction());
              await deletePractitionerById(id);
              queryClient.invalidateQueries('practitioners-list');
              toast.deleted({
                title: 'Deleted',
                message: 'Practitioner deleted successfully',
              });
            }}
          >
            Delete
          </button>
        </div>
      </>
    );
    dispatch(
      showModalAction({
        title: 'Confirm Delete',
        content: deleteModal,
      })
    );
  };

  const columns = useMemo(() => [
    {
      Header: 'S.N',
      Cell: (value) => {
        return <>{value.row.index + 1}</>;
      },
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Contact',
      accessor: 'contact',
    },
    {
      Header: () => {
        return <p className='font-14 text-right w--100'> Date of Birth</p>;
      },
      accessor: 'dob',
      Cell: ({ value }) => {
        return <p className='font-14 text-right w--100'>{value}</p>;
      },
    },
    {
      Header: 'Working days',
      accessor: 'workingDays',
      Cell: ({ value }) => {
        const formattedWorkingDays = value?.map(
          (item) => WorkingDays[item.day]
        );
        return <>{formattedWorkingDays.join(', ')}</>;
      },
    },
    {
      Header: 'ICU Specialist',
      accessor: 'isIcuSpecialist',
      Cell: ({ value }) => {
        return <Badge value={value} />;
      },
    },
    {
      Header: 'Allergies',
      accessor: 'allergies',
      Cell: ({ value }) => {
        const formattedAllergies =
          value.length > 0
            ? value?.map((item) => item.allergy.allergy).join(', ')
            : '-';
        return <>{formattedAllergies}</>;
      },
    },
    // {
    //   Header: 'Start Time',
    //   accessor: 'startTime',
    // },
    // {
    //   Header: 'End Time',
    //   accessor: 'endTime',
    // },
    // {
    //   Header: 'Created Date',
    //   accessor: 'createdDate',
    // },
    // {
    //   Header: 'Updated Date',
    //   accessor: 'updatedDate',
    // },
    {
      Haeder: 'Actions',
      accessor: 'id',
      Cell: ({ value }) => {
        return (
          <>
            <div className='btn-group'>
              <button className='btn btn__iconOnly'>
                <BsEyeFill
                  size={16}
                  className='color-blue--1'
                  onClick={() => viewDetail(value)}
                />
              </button>
              <button className='btn btn__iconOnly'>
                <MdEdit
                  size={16}
                  className='color-primary--base'
                  onClick={() => updateForm(value)}
                />
              </button>
              <button className='btn btn__iconOnly'>
                <MdDelete
                  size={16}
                  className='color-danger--base'
                  onClick={() => deletePractitioner(value)}
                />
              </button>
            </div>
          </>
        );
      },
    },
  ]);
  return <ReactTable data={data || []} columns={columns} />;
};

export default Table;
