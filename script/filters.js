// Helper functions to generate ingredients, appliances & ustensils lists 

export function generateIngredientList(inputRecipes) {
  let ingredientList = [];
  inputRecipes.forEach(recipe => 
    recipe.ingredients.forEach(element =>
      ingredientList.push(element.ingredient)
    )
  );
  let uniqueIngredients = new Map(ingredientList.map(s => [s.toLowerCase(), s]));
  let uniqueIngredientList = [...uniqueIngredients.values()];
  return uniqueIngredientList;
}

export function generateApplianceList(inputRecipes) {
  let applianceList = [];
  inputRecipes.forEach(recipe => 
    applianceList.push(recipe.appliance)
  );
  let uniqueApplianceList = [...new Set(applianceList)];
  return uniqueApplianceList;
}
  
export function generateUstensilList(inputRecipes) {
  let ustensilList = [];
  inputRecipes.forEach(recipe => 
    recipe.ustensils.forEach(element =>
      ustensilList.push(element)
    )
  );
  let uniqueUstensilList = [...new Set(ustensilList)];
  return uniqueUstensilList;
}
