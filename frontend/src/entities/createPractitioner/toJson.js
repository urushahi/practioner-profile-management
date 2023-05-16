import moment from 'moment';
import { getTimeStampFromTime } from '../../utils/date';

export default function toJson(payload) {
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
  } = payload;
  return {
    practitioner_id: id,
    first_name: firstName,
    last_name: lastName,
    email,
    contact,
    dob: moment(dob),
    working_days: workingDays,
    start_time: getTimeStampFromTime(startTime),
    end_time: getTimeStampFromTime(endTime),
  };
}
