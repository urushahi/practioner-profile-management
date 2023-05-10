import { useQuery } from 'react-query';
import { fetchAllPractitioners } from '../../services/practitioners';

export const usePractitioners = () => {
  const queryKey = ['practitioners-list'];
  const query = useQuery(queryKey, () => fetchAllPractitioners());

  console.log(query);
  return {
    ...query,
  };
};
