import * as React from 'react';

import { EDAMAM_URL, MIN_LIST_ITEM } from '../../configs';

import Axios from 'axios';

interface UseRecipes {
  loading: boolean;
  recipes: Array<any>;
  more: () => void;
}

export const useRecipes = (): UseRecipes => {
  const [loading, setLoading] = React.useState(false);
  const [recipes, setRecipes] = React.useState<Array<any>>([]);
  const [nb, setNb] = React.useState(MIN_LIST_ITEM);

  React.useEffect(() => {
    const url = `${EDAMAM_URL}&q=chicken&to=${nb}`;

    const asyncF = async (): Promise<void> => {
      setLoading(true);
      const result = await Axios.get(url);

      const hits = result.data.hits;
      setRecipes([...recipes, ...hits]);
      setLoading(false);
    };
    asyncF();
  }, [nb]);

  const more = (): void => {
    setNb(nb + MIN_LIST_ITEM);
  };

  return {
    recipes,
    loading,
    more,
  };
};
