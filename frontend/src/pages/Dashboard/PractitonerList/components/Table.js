import React, { useMemo } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { showSideBarAction } from '../../../../slices/ui/sidebarSlice';
import { WorkingDays } from '../../../../constants/constants';
import Badge from '../../../../components/common/Badge';
import { deletePractitionerById } from '../../../../services/practitioners';
import ReactTable from '../../../../components/common/ReactTable/ReactTable';

const Table = (props) => {
  const { data } = props;
  const disptach = useDispatch();

  const updateForm = (id) => {
    disptach(showSideBarAction({ id: id, title: 'Update Practitioner' }));
  };

  const deletePractitioner = (id) => {
    deletePractitionerById(id);
  };

  const columns = useMemo(
    () => [
      {
        Header: 'S.N',
        Cell: (value) => {
          return <>{value.row.index + 1}</>;
        },
      },
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
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
        Header: 'Date of Birth',
        accessor: 'dob',
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
      {
        Header: 'Start Time',
        accessor: 'startTime',
      },
      {
        Header: 'End Time',
        accessor: 'endTime',
      },
      {
        Header: 'Created Date',
        accessor: 'createdDate',
      },
      {
        Header: 'Updated Date',
        accessor: 'updatedDate',
      },
      {
        Haeder: 'Actions',
        accessor: 'id',
        Cell: ({ value }) => {
          return (
            <>
              <div className='btn-group'>
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
    ],
    []
  );
  return <ReactTable data={data || []} columns={columns} />;
};

export default Table;
