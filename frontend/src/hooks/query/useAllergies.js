import { useQuery } from 'react-query';
import {} from '../../services/practitioners';
import { fetchAllergies } from '../../services/allergies';

export const useAllergies = () => {
  const queryKey = ['allergies-list'];
  const query = useQuery(queryKey, () => fetchAllergies());
  return {
    ...query,
  };
};
