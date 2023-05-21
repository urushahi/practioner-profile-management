import React from 'react';
import Badge from '../../components/common/Badge';

const DetailList = (payload) => {
  const { data } = payload;
  console.log(data);
  const formattedWorkingDays = data?.workingDays?.map((item) => item.label);
  const formattedAllergies =
    data?.allergies?.length > 0
      ? data?.allergies?.map((item) => item.label).join(', ')
      : '-';
  const tableValue = [
    {
      Id: data?.id,
    },
    {
      Name: data?.firstName + '' + data?.lastName,
    },
    {
      Contact: data?.contact,
    },
    {
      ' Date Of Birth': data?.dob,
    },
    {
      Email: data?.email,
    },
    { 'Start Time': data?.startTime },
    {
      'End Time': data?.endTime,
    },
    {
      'ICU specialists': <Badge value={data?.isIcuSpecialists} sm={true} />,
    },
    {
      'Working days': formattedWorkingDays?.join(', '),
    },

    {
      Allergy: formattedAllergies,
    },
    {
      'Created Date': data?.createdDate,
    },
    {
      'Updated Date': data?.updatedDate,
    },
  ];

  return (
    <>
      {tableValue.map((item) => {
        return (
          <>
            <li key={item?.keys}>
              <div className='label'>
                {Object.keys(item).map((item) => item)}
              </div>
              <div className='detail'>
                {Object.values(item).map((item) => item)}
              </div>
            </li>
          </>
        );
      })}
    </>
  );
};

export default DetailList;
