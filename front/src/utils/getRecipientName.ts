import { useMe } from '../api/user/me/me.service';

export const useGetRecipientName = (compositeName: string): string => {
  const { meData } = useMe();
  if (!meData) return compositeName;
  const meName = meData.me.username;
  return compositeName.split('-').find((n) => n !== meName) || 'not found';
};
