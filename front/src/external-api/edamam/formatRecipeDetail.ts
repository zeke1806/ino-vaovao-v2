interface Return {
  title: string;
  content: string;
  image: string;
}

export const formatRecipeDetails = (recipe: any): Return => {
  const content = (): string => {
    return recipe.recipe.ingredientLines.join('\n\n');
  };
  return {
    title: recipe.recipe.label,
    content: content(),
    image: recipe.recipe.image,
  };
};
