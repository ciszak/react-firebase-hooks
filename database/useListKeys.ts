import { database } from 'firebase';
import useList from './useList';

export type ListKeysHook = {
  error?: Object;
  loading: boolean;
  value: string[];
};

export default (query: database.Query): ListKeysHook => {
  const { error, loading, value } = useList(query);
  // @ts-ignore
  return {
    error,
    loading,
    value: value.map(snapshot => snapshot.key),
  };
};
