import { WorkingDays } from '../../constants/constants';
import { getFormattedDate } from '../../utils/date';

export default function fromJson(payload) {
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
    image,
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
    image,
    dob: getFormattedDate(dob),
    isIcuSpecialist,
    workingDays: mapArray(workingDays),
    allergies: mapAllergiesArray(allergies),
    startTime,
    endTime,
    createdDate: getFormattedDate(createdDate),
    updatedDate: getFormattedDate(updatedDate),
  };
}

const mapArray = (data) => {
  return data?.map((item) => {
    return {
      value: item.day,
      label: WorkingDays[item.day],
    };
  });
};

const mapAllergiesArray = (data) => {
  return data?.map((item) => {
    const { allergy } = item;
    return {
      value: allergy.id,
      label: allergy.allergy,
    };
  });
};
