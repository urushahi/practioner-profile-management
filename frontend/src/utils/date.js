import moment from 'moment';

export const getTimeStampFromTime = (time) => {
  const timestamp = moment().startOf('day').add(moment.duration(time));
  return timestamp;
};

// Example usage
// const time = '12:34:56';
// const timestamp = getTimeStampFromTime(time);

// convertTimeStamp to date
export const getFormattedDate = (timestamp) => {
  const date = moment(timestamp).format('YYYY-MM-DD');
  return date;
};

// convertTimeStamp to time
export const getFormattedTime = (timestamp) => {
  const time = moment(timestamp).format('HH : MM a');
  return time;
};

// convertTimeStamp to time
export const getFormattedTimeOnly = (timestamp) => {
  const time = moment(timestamp).format('HH:MM');
  return time;
};
