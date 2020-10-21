import * as React from 'react';

import Axios from 'axios';
import { EDAMAM_URL } from '../../configs';

interface UseRecipes {
  loading: boolean;
  recipes: Array<any>;
}

export const useRecipes = (): UseRecipes => {
  const [loading, setLoading] = React.useState(false);
  const [recipes, setRecipes] = React.useState<Array<any>>([]);

  React.useEffect(() => {
    const url = `${EDAMAM_URL}&q=chicken&to=${25}`;

    const asyncF = async (): Promise<void> => {
      setLoading(true);
      const result = await Axios.get(url);

      const hits = result.data.hits;
      setRecipes([...recipes, ...hits]);
      setLoading(false);
    };
    asyncF();
  }, []);

  return {
    recipes,
    loading,
  };
};
