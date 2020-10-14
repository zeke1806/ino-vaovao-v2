import * as React from 'react';
import { ANILIST_URL } from '../../configs';
import Axios from 'axios';

const GQL = `
query {
  Page(page: 1) {
    media {
      title {
        english
      }
    }
  }
}`;

export const usePage = (): void => {
  React.useEffect(() => {
    const asyncF = async (): Promise<void> => {
      const result = await Axios({
        url: ANILIST_URL,
        method: 'POST',
        data: {
          query: GQL,
        },
      });
      console.log(result.data);
    };
    asyncF();
  }, []);
};
