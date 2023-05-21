import React, { useMemo } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import ReactTable from '../../../components/common/ReactTable';
import { showSideBarAction } from '../../../slices/ui/allergySidebarSlice';
import { deleteAllergyById } from '../../../services/allergies';

const Table = (props) => {
  const { data } = props;
  const disptach = useDispatch();

  const updateForm = (value) => {
    disptach(showSideBarAction({ id: value, title: 'Update Allergy' }));
  };

  const deleteAllergy = (id) => {
    deleteAllergyById(id);
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
        Header: 'Allergy',
        accessor: 'label',
      },

      {
        Haeder: 'Actions',
        accessor: 'value',
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
                    onClick={() => deleteAllergy(value)}
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
