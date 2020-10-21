import * as React from 'react';

import CardCategory from '../discovery/for-you/CardCategory';
import { formatRecipeCardData } from '../../external-api/edamam/recipeCardData';

interface CardRecipeProp {
  recipe: any;
  onPress?: () => void;
}

const CardRecipe: React.FC<CardRecipeProp> = ({ recipe, onPress }) => {
  const {
    categoryItemTitle,
    categoryItemContent,
    categoryItemSideContent,
    image,
  } = formatRecipeCardData(recipe);

  return (
    <CardCategory
      categoryTitle="Recipe"
      categoryItemTitle={categoryItemTitle}
      categoryItemContent={categoryItemContent}
      categoryItemSideContent={categoryItemSideContent}
      image={image}
      onPress={onPress}
    />
  );
};

export default CardRecipe;
