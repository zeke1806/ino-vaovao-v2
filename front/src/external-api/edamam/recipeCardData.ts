type Return = {
  categoryItemTitle: string;
  categoryItemContent: string;
  categoryItemSideContent: string;
  image: any;
};

export function formatRecipeCardData(recipe: any): Return {
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

  return {
    categoryItemTitle,
    categoryItemContent,
    categoryItemSideContent,
    image,
  };
}
