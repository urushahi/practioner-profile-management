import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { showSideBarAction } from '../../../../slices/ui/sidebarSlice';
import { deletePractitionerById } from '../../../../services/practitioners';
import { useQueryClient } from 'react-query';
import { useDeletePractitionersById } from '../../../../hooks/query/usePractitoners';

const Table = (props) => {
  const { data } = props;
  const disptach = useDispatch();
  const updateForm = (id) => {
    disptach(showSideBarAction({ id: id, title: 'Update Practitioner' }));
  };

  const deletePractitioner = (id) => {
    deletePractitionerById(id);
  };

  return (
    <table className='table mt-5x '>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>DOB</th>
          <th>Working days</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Created date</th>
          <th>Updated date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => {
          const {
            id,
            firstName,
            lastName,
            email,
            contact,
            dob,
            workingDays,
            startTime,
            endTime,
            createdDate,
            updatedDate,
          } = item;
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{email}</td>
              <td>{contact}</td>
              <td>{dob}</td>
              <td>{workingDays}</td>
              <td>{startTime}</td>
              <td>{endTime}</td>
              <td>{createdDate}</td>
              <td>{updatedDate}</td>
              <td>
                <div className='btn-group'>
                  <button className='btn btn__iconOnly'>
                    <MdEdit
                      size={16}
                      className='color-primary--base'
                      onClick={() => updateForm(id)}
                    />
                  </button>
                  <button className='btn btn__iconOnly'>
                    <MdDelete
                      size={16}
                      className='color-danger--base'
                      onClick={(e) => deletePractitioner(e, id)}
                    />
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    // data
  );
};

export default Table;
