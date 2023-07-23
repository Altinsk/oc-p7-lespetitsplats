import { generateIngredientList } from "./filters.js";
import { generateApplianceList } from "./filters.js";
import { generateUstensilList } from "./filters.js";


// Card creation
function renderRecipeGrid(inputRecipes) { 
  // Get the container element where the cards will be displayed
  const cardContainer = document.getElementById("card-container");

  // Remove recipe container children
  cardContainer.replaceChildren();

  // Generate the grid of cards
  inputRecipes.forEach((recipe) => {
    // Create card column 
    const cardColumn = document.createElement("div");
    cardColumn.classList.add("col", "mb-5");
    cardColumn.style.borderRadius = "2em 2em 0 0";

    // Create a card element
    const cardElement = document.createElement("div");
    cardElement.classList.add("card", "h-100", "border-0");
    cardElement.style.maxWidth = "20em";
    cardElement.style.marginTop = "3em";
    cardElement.style.borderRadius = "2em 2em 2em 2em";

    // Create the card image
    const cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top");
    cardImage.src = `css/media/${recipe.image}`;
    cardImage.alt = "recipe picture";
    cardImage.style.borderRadius = "2em 2em 0 0";

    // Create the card body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Create the card title
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title", "fs-4", "fw-bolder", "mb-5");
    cardTitle.textContent = recipe.name;

    // Create the description title
    const cardDescriptionTitle = document.createElement("p");
    cardDescriptionTitle.classList.add("card-title", "fs-5", "fw-light");
    cardDescriptionTitle.textContent = "RECETTE";

    // Create the card description
    const cardContent = document.createElement("p");
    cardContent.classList.add("card-text", "cuttoff-text", "fs-5", "mb-5");
    cardContent.textContent = recipe.description;

    // Create the Ingredient title
    const cardIngredientTitle = document.createElement("p");
    cardIngredientTitle.classList.add("card-title", "fs-5", "fw-light");
    cardIngredientTitle.textContent = "INGRÉDIENTS";

    // Create the card ingredients
    const ingredientContainer = document.createElement("div");
    ingredientContainer.classList.add("row", "row-cols-1", "row-cols-md-2", "g-4");

    // Populate ingredient list
    const ingredientUl = document.getElementById("ingredient-filter");
    ingredientUl.style.paddingLeft = "0";
    ingredientUl.replaceChildren();
    let ingredientList =  generateIngredientList(inputRecipes);
    // console.log(ingredientList);
    ingredientList.forEach((ingredient) => {
      const ingredientTags = document.createElement("li");
      ingredientTags.style.listStyle =  "none";
      ingredientTags.style.textAlign = "left";
      ingredientTags.style.marginTop = "0.3em";
      ingredientTags.style.paddingTop = "0.3em";
      ingredientTags.style.paddingBottom = "0.3em";
      ingredientTags.style.textIndent = "0.8em";
      ingredientTags.textContent = ingredient;
      ingredientUl.appendChild(ingredientTags);
    });

    // Populate appliance list
    const applianceUl = document.getElementById("appliance-filter");
    applianceUl.style.paddingLeft = "0";
    applianceUl.replaceChildren();
    let applianceList =  generateApplianceList(inputRecipes);
    applianceList.forEach((appliance) => {
      const applianceTags = document.createElement("li");
      applianceTags.style.listStyle =  "none";
      applianceTags.style.textAlign = "left";
      applianceTags.style.marginTop = "0.3em";
      applianceTags.style.paddingTop = "0.3em";
      applianceTags.style.paddingBottom = "0.3em";
      applianceTags.style.textIndent = "0.8em";
      applianceTags.textContent = appliance;
      applianceUl.appendChild(applianceTags);
    });
  
    // Populate ustensil list
    const ustensilsUl = document.getElementById("ustensils-filter");
    ustensilsUl.style.paddingLeft = "0";
    ustensilsUl.replaceChildren();
    let ustensilList =  generateUstensilList(inputRecipes);
    ustensilList.forEach((ustensil) => {
      const ustensilsTags = document.createElement("li");
      ustensilsTags.style.listStyle =  "none";
      ustensilsTags.style.textAlign = "left";
      ustensilsTags.style.marginTop = "0.3em";
      ustensilsTags.style.paddingTop = "0.3em";
      ustensilsTags.style.paddingBottom = "0.3em";
      ustensilsTags.style.textIndent = "0.8em";
      ustensilsTags.textContent = ustensil;
      ustensilsUl.appendChild(ustensilsTags);
    });






  

    recipe.ingredients.forEach((ingredient) => {

      // // Ingredient filter tags <li> into <ul>
      // recipe.ingredients.map(item => {
      //   // console.log(item);
      //   const ingredientTags = document.createElement("li");
      //   ingredientTags.style.listStyle =  "none";
      //   ingredientTags.style.textAlign = "left";
      //   ingredientTags.textContent = item.ingredient;
      //   const ingredientUl = document.getElementById("ingredient-filter");
      //   ingredientUl.style.paddingLeft = "0";
      //   ingredientUl.appendChild(ingredientTags);
      // });

      // // Appliances filter tags <li> into <ul>
      // recipe.ustensils.map(item => {
      // const ustensilsTags = document.createElement("li");
      // ustensilsTags.style.listStyle =  "none";
      // ustensilsTags.style.textAlign = "left";
      // ustensilsTags.style.marginTop = "0.3em";
      // ustensilsTags.style.paddingTop = "0.3em";
      // ustensilsTags.style.paddingBottom = "0.3em";
      // ustensilsTags.style.textIndent = "0.8em";
      // ustensilsTags.textContent = item;
      // const UstensilsUl = document.getElementById("ustensils-filter");
      // UstensilsUl.style.paddingLeft = "0";
      // UstensilsUl.appendChild(ustensilsTags);
      // });

      // // Appliance filter tags <li> into <ul>
      //   const applianceTags = document.createElement("li");
      //   applianceTags.style.listStyle =  "none";
      //   applianceTags.style.textAlign = "left";
      //   applianceTags.style.marginTop = "0.3em";
      //   applianceTags.style.paddingTop = "0.3em";
      //   applianceTags.style.paddingBottom = "0.3em";
      //   applianceTags.style.textIndent = "0.8em";
      //   applianceTags.textContent = recipe.appliance;
      //   const applianceUl = document.getElementById("appliance-filter");
      //   applianceUl.style.paddingLeft = "0";
      //   applianceUl.appendChild(applianceTags);

      // Create the ingredient body
      const ingredientElement = document.createElement("div");

      // Create the ingredient label
      const ingredientLabel = document.createElement("p");
      ingredientLabel.textContent = ingredient.ingredient;
      ingredientLabel.classList.add("card-text", "fs-5", "m-0", "ps-3");

      // Create the ingredient quantity
      const ingredientQuantity = document.createElement("p");
      ingredientQuantity.classList.add("card-text", "fs-5", "fw-light", "ps-3");
      let unitLabel = "";
      if ("unit" in ingredient) {
        switch (ingredient.unit) {
          case "grammes":
            unitLabel = "g";
            break;
          default:
            unitLabel = ingredient.unit;
        }
      }
      ingredientQuantity.textContent = ingredient.quantity + unitLabel;

      // Append the ingredient label and quanity to the ingredient element
      ingredientElement.appendChild(ingredientLabel);
      ingredientElement.appendChild(ingredientQuantity);

      // Append the ingredient element the ingredient container
      ingredientContainer.appendChild(ingredientElement);
    });

    // Append the card image to the card element
    cardElement.appendChild(cardImage);

    // Append the title, content and ingredient container to the card body
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescriptionTitle);
    cardBody.appendChild(cardContent);
    cardBody.appendChild(cardIngredientTitle);
    cardBody.appendChild(ingredientContainer);

    // Append the card body to the card column
    cardElement.appendChild(cardBody);

    // Append the card column to the card element
    cardColumn.appendChild(cardElement);

    // Append the card element to the container
    cardContainer.appendChild(cardColumn);
  });
}

// Capture the input elements
const inputSearchBar = document.getElementById("input-search");
const inputSearchIngredients = document.getElementById("input-search-ingredients");

// Add input elements event listeners
inputSearchBar.addEventListener("input", filterRecipes);
inputSearchIngredients.addEventListener("input", filterRecipes);

// Filter recipes
function filterRecipes() {
  let searchBarText = inputSearchBar.value;
  let searchIngredientsText = inputSearchIngredients.value;
  // console.log(searchBarText.length);
  // console.log(searchIngredientsText);

  // if (searchBarText.length >= 3){
  //   console.log("rr")
  // }
  let filteredRecipes = recipes.filter(recipe => 
    // Meet main search criteria
    (
      recipe.name.includeCaseInsensitive(searchBarText) || 
      recipe.description.includeCaseInsensitive(searchBarText) ||
      recipe.ingredients.some(element => 
        element.ingredient.includeCaseInsensitive(searchBarText)
      )
    ) &&
    // Meet ingredient search criteria
    (
      recipe.ingredients.some(element => 
        element.ingredient.includeCaseInsensitive(searchIngredientsText)
      )
    ) 
      // &&
      // // Meet appliance search criteria
      // (
      // ) &&
      // // Meet ustensils search criteria
      // (
      // )
    


        
    //     let filteredRecipes = recipes.filter(recipe => 
    // recipe.name.includeCaseInsensitive(searchBarText) || 
    // recipe.description.includeCaseInsensitive(searchBarText) ||
    // recipe.ingredients.some(element => 
    //   element.ingredient.includeCaseInsensitive(searchBarText) && 
    //   element.ingredient.includeCaseInsensitive(searchIngredientsText)
    // )
  );
  renderRecipeGrid(filteredRecipes);
}

renderRecipeGrid(recipes);








