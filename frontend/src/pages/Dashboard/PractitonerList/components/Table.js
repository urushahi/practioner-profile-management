import React from 'react';

const Table = (props) => {
  const { data } = props;

  return (
    <table className='table'>
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
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => {
          const {
            practitionerId,
            firstName,
            lastName,
            email,
            contact,
            dob,
            workingDays,
            startDate,
            endDate,
            createdDate,
            updatedDate,
          } = item;
          return (
            <tr>
              <td>{practitionerId}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{email}</td>
              <td>{contact}</td>
              <td>{dob}</td>
              <td>{workingDays}</td>
              <td>{startDate}</td>
              <td>{endDate}</td>
              <td>{createdDate}</td>
              <td>{updatedDate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    // data
  );
};

export default Table;
