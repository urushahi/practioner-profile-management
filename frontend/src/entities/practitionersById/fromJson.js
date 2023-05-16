import { getFormattedDate, getFormattedTimeOnly } from '../../utils/date';

export default function fromJson(payload) {
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
  } = payload;
  return {
    id,
    firstName,
    lastName,
    email,
    contact,
    dob: getFormattedDate(dob),
    workingDays,
    startTime: getFormattedTimeOnly(startTime),
    endTime: getFormattedTimeOnly(endTime),
    createdDate: getFormattedDate(createdDate),
    updatedDate: getFormattedDate(updatedDate),
  };
}
