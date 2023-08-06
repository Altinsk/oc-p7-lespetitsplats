// Helper functions to generate ingredients, appliances & ustensils lists 
export function generateIngredientList(inputRecipes) {
  let ingredientList = [];
  for (let i = 0; i < inputRecipes.length; i++) {
    const recipe = inputRecipes[i];
    for (let y = 0; y < recipe.ingredients.length; y++) {
      const element = recipe.ingredients[y];
      ingredientList.push(element.ingredient);
    }
  }
  let uniqueIngredients = new Map(ingredientList.map(s => [s.toLowerCase(), s]));
  let uniqueIngredientList = [...uniqueIngredients.values()];
  return uniqueIngredientList;
}

export function generateApplianceList(inputRecipes) {
  let applianceList = [];
  for (let i = 0; i < inputRecipes.length; i++) {
    const recipe = inputRecipes[i];
    applianceList.push(recipe.appliance)
  }
  let uniqueApplianceList = [...new Set(applianceList)];
  return uniqueApplianceList;
}
  
export function generateUstensilList(inputRecipes) {
  let ustensilList = [];
  for (let i = 0; i < inputRecipes.length; i++) {
    const recipe = inputRecipes[i];
    for (let y = 0; y < recipe.ustensils.length; y++) {
      const element = recipe.ustensils[y];
      ustensilList.push(element);
    }
  }
  let uniqueUstensilList = [...new Set(ustensilList)];
  return uniqueUstensilList;
}
