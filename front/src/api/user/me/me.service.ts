import { ME, MeData } from './me.gql';
import { useQuery } from '@apollo/client';

export interface UseMe {
  meData: MeData | undefined;
  meLoading: boolean;
}

export const useMe = (): UseMe => {
  const { data: meData, loading: meLoading } = useQuery<MeData>(ME);
  return {
    meData,
    meLoading,
  };
};
