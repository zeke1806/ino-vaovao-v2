import * as React from 'react';
import { DISCOVERY_CATEGORIES, DISCOVERY_CAT_SELECTED } from '../../configs';
import {
  useDiscoveryDispatch,
  useDiscoveryState,
} from '../../providers/discovery/discovery.consumer';
import AsyncStorage from '@react-native-community/async-storage';

export const useSaveCategory = (): void => {
  const { categories } = useDiscoveryState();
  const discoveryDispatch = useDiscoveryDispatch();

  React.useEffect(() => {
    const asyncF = async (): Promise<void> => {
      const result = await AsyncStorage.getItem(DISCOVERY_CAT_SELECTED);
      if (result) {
        const storedCateg: Array<DISCOVERY_CATEGORIES> = JSON.parse(result);
        storedCateg.forEach((category) =>
          discoveryDispatch({ type: 'TOOGLE', category }),
        );
      }
    };
    asyncF();
  }, []);

  React.useEffect(() => {
    const asyncF = async (): Promise<void> => {
      if (categories.length) {
        await AsyncStorage.setItem(
          DISCOVERY_CAT_SELECTED,
          JSON.stringify(categories),
        );
      } else {
        await AsyncStorage.removeItem(DISCOVERY_CAT_SELECTED);
      }
    };
    asyncF();
  }, [categories]);
};
