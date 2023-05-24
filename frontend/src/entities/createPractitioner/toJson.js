// import moment from 'moment';
// import { getTimeStampFromTime } from '../../utils/date';

export default function toJson(payload) {
  const {
    firstName,
    lastName,
    email,
    contact,
    dob,
    image,
    isIcuSpecialist,
    workingDays,
    allergies,
    startTime,
    endTime,
  } = payload;
  const jsonPayload = {
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

  const formData = new FormData();

  for (const key in jsonPayload) {
    if (key === 'working_days' || key === 'allergies') {
      jsonPayload[key].forEach((item) => formData.append(`${key}[]`, item));
    } else {
      formData.append(key, jsonPayload[key]);
    }
  }

  if (image instanceof FormData) {
    formData.append('image', image.get('image'));
  }

  return formData;
}

const mapArray = (data) => {
  return data?.map((item) => item.value);
};
