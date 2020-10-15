import * as React from 'react';
import CardCategory from './CardCategory';
import { useRandomAnime } from '../../../external-api/anilist/randomAnime';

const CardAnime: React.FC = () => {
  const { loading, media } = useRandomAnime();

  const image = media ? media.coverImage.medium : '';

  const categoryItemTitle = ((): string => {
    if (!media) return '';
    const title = media.title;
    if (title.english) return title.english;
    else if (title.romaji) return title.romaji;
    else return title.native;
  })();

  const categoryItemContent = ((): string => {
    if (!media) return '';
    return `Type ${media.type}\n${media.episodes} episodes`;
  })();

  const categoryItemSideContent = ((): string => {
    if (!media) return '';
    const startDate = media.startDate;
    return `Sortie ${startDate.day}-${startDate.month}-${startDate.year}`;
  })();

  return (
    <CardCategory
      categoryTitle="Anime"
      categoryItemTitle={categoryItemTitle}
      categoryItemContent={categoryItemContent}
      categoryItemSideContent={categoryItemSideContent}
      image={image}
    />
  );
};

export default CardAnime;
