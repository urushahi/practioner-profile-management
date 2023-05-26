import React, { useMemo } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import ReactTable from '../../../components/common/ReactTable';
import { showSideBarAction } from '../../../slices/ui/allergySidebarSlice';
import { deleteAllergyById } from '../../../services/allergies';
import { useQueryClient } from 'react-query';
import {
  hideModalAction,
  showModalAction,
} from '../../../slices/ui/modalSlice';
import * as toast from '../../../utils/toast';

const Table = (props) => {
  const { data } = props;
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const updateForm = (value) => {
    dispatch(showSideBarAction({ id: value, title: 'Update Allergy' }));
  };

  const deleteAllergy = (id) => {
    const deleteModal = (
      <>
        <p className='modal__content'>
          Are you sure you want to delete Allergy?
        </p>
        <div className='btn-group justify-content-end'>
          <button
            className='btn btn-danger'
            onClick={async () => {
              dispatch(hideModalAction());
              await deleteAllergyById(id);
              queryClient.invalidateQueries('allergies-list');
              toast.deleted({
                title: 'Deleted',
                message: 'Allergy deleted successfully',
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
