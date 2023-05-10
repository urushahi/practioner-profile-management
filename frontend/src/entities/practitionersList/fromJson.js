export default function fromJson(payload) {
  const data = payload.map(mappedData);
  console.log(data);

  return data;
}

function mappedData(practitioner) {
  const {
    practitioner_id: id,
    first_name: firstName,
    last_name: lastName,
    email,
    contact,
    dob,
    working_days: workingDays,
    start_time: startTime,
    end_time: endTime,
    created_date: createdDate,
    updated_date: updatedDate,
  } = practitioner;
  return {
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
  };
  // return {
  //   id: practitioner_id,
  //   firstName: first_name,
  //   lastName: last_name,
  //   email,
  //   contact,
  //   dob,
  //   workingDays: working_days,
  //   startDate: start_date,
  //   endDate: end_date,
  //   createdDate: created_date,
  //   updatedDate: updated_date,
  // };
}
