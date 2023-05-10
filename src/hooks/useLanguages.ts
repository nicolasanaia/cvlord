import useSwr from 'swr'
import fetcher from '../lib/fetcher';

const useLanguages = () => {
  const { data, error, isLoading } = useSwr('/api/profile/languages', fetcher);

  return {
    data,
    error,
    isLoading
  }
};

export default useLanguages;