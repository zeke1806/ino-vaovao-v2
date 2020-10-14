import * as React from 'react';
import { EDAMAM_URL } from '../../configs';
import axios from 'axios';
import { getRandomInt } from '../../utils/getRandomInt';

function selectRecipe(total: number): number {
  return Math.floor(Math.random() * Math.floor(total));
}

export const useRecipie = (
  recipieId?: string,
): {
  loading: boolean;
  recipe: any;
} => {
  const [loading, setLoading] = React.useState(true);
  const [recipe, setRecipie] = React.useState<any>(null);

  React.useEffect(() => {
    const url = recipieId
      ? `${EDAMAM_URL}&q=chicken`
      : `${EDAMAM_URL}&q=chicken`;

    const asyncF = async (): Promise<any> => {
      setLoading(true);
      const result = await axios.get(url);
      const hits = result.data.hits;
      setRecipie(hits[getRandomInt(hits.length)]);
    };
    asyncF();
  }, []);

  return {
    loading,
    recipe,
  };
};
