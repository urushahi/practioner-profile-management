import moment from 'moment';

export const getTimeStampFromTime = (time) => {
  const timestamp = moment().startOf('day').add(moment.duration(time));
  return timestamp;
};

// Example usage
// const time = '12:34:56';
// const timestamp = getTimeStampFromTime(time);

// console.log(timestamp);

// convertTimeStamp to date
export const getFormattedDate = (timestamp) => {
  const date = moment(timestamp).format('YYYY-MM-DD');
  return date;
};

// convertTimeStamp to date
export const getFormattedTime = (timestamp) => {
  const time = moment(timestamp).format('HH : MM :SS');
  return time;
};
