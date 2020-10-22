import * as React from 'react';

import { EDAMAM_URL, MIN_LIST_ITEM } from '../../configs';

import Axios from 'axios';
import { useDiscoveryState } from '../../providers/discovery/discovery.consumer';

interface UseRecipes {
  loading: boolean;
  recipes: Array<any>;
  more: () => void;
}

export const useRecipes = (): UseRecipes => {
  const { searchRecipe } = useDiscoveryState();
  const [loading, setLoading] = React.useState(false);
  const [recipes, setRecipes] = React.useState<Array<any>>([]);
  const [to, setTo] = React.useState(MIN_LIST_ITEM);
  const [from, setFrom] = React.useState(0);

  const url = `${EDAMAM_URL}&q=${
    searchRecipe || 'chicken'
  }&from=${from}&to=${to}`;

  React.useEffect(() => {
    setFrom(0);
    setTo(MIN_LIST_ITEM);
    fetchRecipes(false);
  }, [searchRecipe]);

  React.useEffect(() => {
    fetchRecipes(true);
  }, [from, to]);

  const fetchRecipes = async (more: boolean): Promise<void> => {
    try {
      setLoading(true);
      const result = await Axios.get(url);
      const hits = result.data.hits;

      if (more) {
        setRecipes([...recipes, ...hits]);
      } else {
        setRecipes(hits);
      }

      setLoading(false);
    } catch (error) {
      // 429 error
      setLoading(false);
    }
  };

  const more = (): void => {
    setFrom(to + 1);
    setTo(to + MIN_LIST_ITEM);
  };

  return {
    recipes,
    loading,
    more,
  };
};
