import * as React from 'react';

import { EDAMAM_URL } from '../../configs';
import axios from 'axios';
import { getRandomInt } from '../../utils/getRandomInt';
import { useDiscoveryState } from '../../providers/discovery/discovery.consumer';

const nbItem = 100;

export const useRandomRecipie = (): {
  loading: boolean;
  recipe: any;
} => {
  const [loading, setLoading] = React.useState(true);
  const [recipe, setRecipie] = React.useState<any>(null);
  const { categories } = useDiscoveryState();

  React.useEffect(() => {
    const url = `${EDAMAM_URL}&q=chicken&to=${nbItem}`;

    const asyncF = async (): Promise<any> => {
      setLoading(true);
      const result = await axios.get(url);
      const hits = result.data.hits;
      setRecipie(hits[getRandomInt(hits.length)]);
    };

    if (categories.includes('recipe')) asyncF();
  }, [categories]);

  return {
    loading,
    recipe,
  };
};
