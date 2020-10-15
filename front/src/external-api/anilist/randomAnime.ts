import * as React from 'react';
import { ANILIST_URL } from '../../configs';
import Axios from 'axios';
import { getRandomInt } from '../../utils/getRandomInt';

const nbPerPage = 100;
const GQL = `
query {
  Page(page: 1, perPage: ${nbPerPage}) {
    media {
      title {
        romaji
        english
        native
        userPreferred
      }
      bannerImage
      coverImage {
        extraLarge
        large
        medium
        color
      }
      type
      episodes
      startDate {
        year
        month
        day
      }
    }
  }
}`;

export const useRandomAnime = (): {
  loading: boolean;
  media: any;
} => {
  const [loading, setLoading] = React.useState(false);
  const [media, setMedia] = React.useState<null | any>(null);

  React.useEffect(() => {
    const asyncF = async (): Promise<void> => {
      setLoading(true);
      const result = await Axios({
        url: ANILIST_URL,
        method: 'POST',
        data: {
          query: GQL,
        },
      });
      setMedia(result.data.data.Page.media[getRandomInt(nbPerPage)]);
      setLoading(false);
    };
    asyncF();
  }, []);

  return {
    loading,
    media,
  };
};
