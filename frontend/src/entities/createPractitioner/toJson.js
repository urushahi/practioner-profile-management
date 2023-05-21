// import moment from 'moment';
// import { getTimeStampFromTime } from '../../utils/date';

export default function toJson(payload) {
  const {
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
  } = payload;
  return {
    first_name: firstName,
    last_name: lastName,
    email,
    contact,
    dob,
    working_days: mapArray(workingDays),
    is_ICU_Specialist: isIcuSpecialist,
    allergies: mapArray(allergies),
    start_time: startTime,
    end_time: endTime,
  };
}

const mapArray = (data) => {
  return data?.map((item) => item.value);
};
