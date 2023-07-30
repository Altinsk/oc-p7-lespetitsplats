// Helper functions to generate ingredients, appliances & ustensils lists 
export function generateIngredientList(inputRecipes) {
    let ingredientList = [];
    inputRecipes.forEach(recipe => 
      recipe.ingredients.forEach(element =>
        ingredientList.push(element.ingredient)
      )
    );
    // Update the array and remove duplicates
    let uniqueIngredients = new Map(ingredientList.map(s => [s.toLowerCase(), s]));
    let uniqueIngredientList = [...uniqueIngredients.values()];
    return uniqueIngredientList;
  }

export function generateApplianceList(inputRecipes) {
  let applianceList = [];
  inputRecipes.forEach(recipe => 
    applianceList.push(recipe.appliance)
  );
  // Update the array and remove duplicates
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
  // Update the array and remove duplicates
  let uniqueUstensilList = [...new Set(ustensilList)];
  return uniqueUstensilList;
}
