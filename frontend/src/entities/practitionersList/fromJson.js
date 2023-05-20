import { getFormattedDate, getFormattedTime } from '../../utils/date';

export default function fromJson(payload) {
  const data = payload.map(mappedData);
  return data;
}

function mappedData(practitioner) {
  const {
    id,
    first_name: firstName,
    last_name: lastName,
    email,
    contact,
    dob,
    working_days: workingDays,
    is_ICU_Specialist: isIcuSpecialist,
    allergies,
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
    isIcuSpecialist,
    workingDays,
    allergies,
    startTime,
    endTime,
    createdDate: getFormattedDate(createdDate),
    updatedDate: getFormattedDate(updatedDate),
  };
}
