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

  if (image && Object.keys(image).length > 0) {
    jsonPayload.image = convertToJson(image);
  }

  return jsonPayload;
}

const mapArray = (data) => {
  return data?.map((item) => item.value);
};

// Convert the FormData object to JSON
const convertToJson = (image) => {
  if (typeof image === 'object' && image !== null) {
    const jsonData = {};
    Object.entries(image).forEach(([key, value]) => {
      jsonData[key] = value;
    });
    return jsonData;
  }
};
