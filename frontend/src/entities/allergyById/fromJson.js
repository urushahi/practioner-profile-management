import { WorkingDays } from '../../constants/constants';
import { getFormattedDate } from '../../utils/date';

export default function fromJson(payload) {
  const { id, allergy } = payload;
  return {
    id,
    allergy,
  };
}
