import React from 'react';

const Table = (props) => {
  const { data } = props;

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
            </tr>
          );
        })}
      </tbody>
    </table>
    // data
  );
};

export default Table;
