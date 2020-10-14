import * as React from 'react';
import { EDAMAM_URL } from '../../configs';
import axios from 'axios';

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
      ? `${EDAMAM_URL}&q=chicken&to=1`
      : `${EDAMAM_URL}&q=chicken&to=1`;

    const asyncF = async (): Promise<any> => {
      setLoading(true);
      const result = await axios.get(url);
      setRecipie(result.data.hits[0]);
    };
    asyncF();
  }, []);

  return {
    loading,
    recipe,
  };
};
