import { createNetworkStatusNotifier } from 'react-apollo-network-status';

const {
  link: notifierLink,
  useApolloNetworkStatus,
} = createNetworkStatusNotifier();

const useGlobalNotifier = (): void => {
  const status = useApolloNetworkStatus();
};

export { notifierLink, useGlobalNotifier };
