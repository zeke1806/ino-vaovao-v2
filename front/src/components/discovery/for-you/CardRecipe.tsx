import * as React from 'react';
import CardCategory from './CardCategory';
import { useRecipie } from '../../../external-api/edamam/recipie';

const CardRecipe: React.FC = () => {
  const { loading, recipe } = useRecipie();

  const categoryItemTitle = ((): string => {
    return recipe ? recipe.recipe.label : '';
  })();

  const categoryItemContent = ((): string => {
    if (!recipe) return '';
    const r = recipe.recipe;
    return `${r.ingredients.length} ingredients\n${Math.floor(
      r.calories,
    )} calories`;
  })();

  const categoryItemSideContent = ((): string => {
    if (!recipe) return '';
    return `${recipe.recipe.totalTime} min de preparation`;
  })();

  const image = recipe ? recipe.recipe.image : '';

  return (
    <CardCategory
      categoryTitle="Recipe"
      categoryItemTitle={categoryItemTitle}
      categoryItemContent={categoryItemContent}
      categoryItemSideContent={categoryItemSideContent}
      image={image}
    />
  );
};

export default CardRecipe;
