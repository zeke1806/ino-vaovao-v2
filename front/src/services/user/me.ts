import { useQuery } from '@vue/apollo-composable'
import { ME, MeData } from 'src/api/user'

export const useMe = () => {
  const { result, loading } = useQuery<MeData>(ME);
  return {
    result: result,
    loading
  }
}
