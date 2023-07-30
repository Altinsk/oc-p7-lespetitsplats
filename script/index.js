import { generateIngredientList } from "./filters.js";
import { generateApplianceList } from "./filters.js";
import { generateUstensilList } from "./filters.js";
import { ingredientFilters } from "./selectors/ingredient.js";

// Global vraibales 
let recipeCount;

// // Capture the input elements
const inputSearchBar = document.getElementById("input-search");
const inputSearchIngredients = document.getElementById("input-search-ingredients");
const xIconIngredient = document.getElementById("x-icon-ingredient");
const inputSearchAppliances = document.getElementById("input-search-appliances");
const xIconAppliance = document.getElementById("x-icon-appliance");
const inputSearchUstensils = document.getElementById("input-search-ustensils");
const xIconUstensil = document.getElementById("x-icon-ustensil");
  
inputSearchBar.addEventListener("input", filterRecipes);
inputSearchIngredients.addEventListener("input", filterRecipes);
inputSearchAppliances.addEventListener("input", filterRecipes);
inputSearchUstensils.addEventListener("input", filterRecipes);

// Card creation index home page
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
    // const ingredientSearch = document.getElementById("input-search-ingredients");
  
    // Ingredient list for all ingredient tags
    let ingredientList =  generateIngredientList(inputRecipes);
    // ingredientSearch.addEventListener("input", function() {});
    let ingredientSearchInput = inputSearchIngredients.value;
    // Filter the ingredients in the ingredient search bar
    let ingredientSearchResult = ingredientList.filter(ingredientSeachFunction);

    function ingredientSeachFunction(ingredientList) {
      return ingredientList.toLowerCase().includes(ingredientSearchInput);
    }

    // Return ingredient results when using search bar
    ingredientList = ingredientSearchResult;

    // inputSearchIngredients.addEventListener("input", clicked);
    xIconIngredient.addEventListener("click", clicked);
    console.log(ingredientSearchInput.length);


    function clicked() {
      ingredientSearchInput.textContent = "hh";
      xIconIngredient.style.visibility = "hidden"
      console.log(ingredientSearchInput.length);
    };  

    // Create ingredient list items
    ingredientList.forEach((ingredient) => {
      const ingredientTags = document.createElement("li");
      ingredientTags.classList.add("ingredientLi");
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
    const applianceSearch = document.getElementById("input-search-appliances");

    // Appliance list fot all appliance tags
    let applianceList =  generateApplianceList(inputRecipes);
    applianceSearch.addEventListener("input", function() {});
    let applianceSearchInput = applianceSearch.value;
    // Filter the appliances in the appliance search bar
    let applianceSearchResult = applianceList.filter(applianceSeachFunction);

      function applianceSeachFunction(applianceList) {
        return applianceList.toLowerCase().includes(applianceSearchInput);
      }

    // Return appliance results when using search bar
    applianceList = applianceSearchResult;

    // Populate appliance list
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
    const ustensilSearch = document.getElementById("input-search-ustensils");
    
    // Ustensil list for all ustensil tags
    let ustensilList =  generateUstensilList(inputRecipes);
    ustensilSearch.addEventListener("input", function() {});
    let ustensilSearchInput = ustensilSearch.value;
    // Filter the ustensil in the ustensil search bar
    let ustensilSearchResult = ustensilList.filter(ustensilSeachFunction);
  
      function ustensilSeachFunction(ustensilList) {
        return ustensilList.toLowerCase().includes(ustensilSearchInput);
      }
      // Return ustensil results when using search bar
      ustensilList = ustensilSearchResult;
  
    // Populate ustensil list
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

    // Constructing the cards body and elements
    recipe.ingredients.forEach((ingredient) => {

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

  // Recipe count number
  recipeCount = inputRecipes.length;
  const recipeCounter = document.getElementById("recipe-count");
  recipeCounter.innerHTML = `${recipeCount} Recettes`;
}

let ingredientFilterEmpty;
console.log(ingredientFilterEmpty)

  function arrayEmpty(array) {
    if (array.length == 0) 
      ingredientFilterEmpty = true;
  }

  arrayEmpty(ingredientFilters);
  console.log("filters", ingredientFilters.length);






// inputSearchIngredients.addEventListener("input", function(){
//   let searchIngredientsText = inputSearchIngredients.value;
//       // Show/remove X icone in the ingredient, appliance & ustensil search bar
//       console.log(searchIngredientsText);
//       if (searchIngredientsText.length > 0 ) {
//         xIconIngredient.style.visibility = "visible"
//       } else if (searchIngredientsText.length <= 0 ) {
//         xIconIngredient.style.visibility = "hidden"
//       }
// });





function filterRecipes() {

  let searchBarText = inputSearchBar.value;
  let searchIngredientsText = inputSearchIngredients.value;
  let searchAppliancesText = inputSearchAppliances.value;
  let searchUstensilsText = inputSearchUstensils.value; 

    // Show/remove X icone in the ingredient, appliance & ustensil search bar
    if (searchIngredientsText.length > 0 ) {
      xIconIngredient.style.visibility = "visible"
    } else if (searchIngredientsText.length <= 0 ) {
      xIconIngredient.style.visibility = "hidden"
    }

    if (searchAppliancesText.length > 0 ) {
      xIconAppliance.style.visibility = "visible"
    } else if (searchAppliancesText.length <= 0 ) {
      xIconAppliance.style.visibility = "hidden"
    }

    if (searchUstensilsText.length > 0 ) {
      xIconUstensil.style.visibility = "visible"
    } else if (searchUstensilsText.length <= 0 ) {
      xIconUstensil.style.visibility = "hidden"
    }

    if (searchBarText.length >= 3) {
      console.log("got into the function 1");
      let filteredRecipes = recipes.filter(recipe => 
        // Meet main search criteria
        (
          recipe.name.includeCaseInsensitive(searchBarText) || 
          recipe.description.includeCaseInsensitive(searchBarText) 
          ||
          recipe.ingredients.some(element => 
            element.ingredient.includeCaseInsensitive(searchBarText)
          )
        ) 
      )
      renderRecipeGrid(filteredRecipes);
      } 
      else if (searchBarText.length < 3) {
        renderRecipeGrid(recipes);
      } else if ((!ingredientFilterEmpty) && (searchBarText.length <= 0)) {
      console.log("got into the function 2");
      console.log(filterRecipes);
      console.log(ingredientFilters);
      let filteredRecipes = recipes.filter(recipe => 
        // Meet ingredient search criteria
        recipe.ingredients.some(element => ingredientFilters.includes(element))
      )
      renderRecipeGrid(filteredRecipes);
  }
}
  
  // let filteredRecipes = recipes.filter(recipe => 
  //   // Meet main search criteria
  //   (
  //     recipe.name.includeCaseInsensitive(searchBarText) || 
  //     recipe.description.includeCaseInsensitive(searchBarText) ||
  //     recipe.ingredients.some(element => 
  //       element.ingredient.includeCaseInsensitive(searchBarText)
  //     )
  //   ) &&
  //   // Meet ingredient search criteria
  //   (
  //     recipe.ingredients.some(element => 
  //       element.ingredient.includeCaseInsensitive(searchIngredientsText)
  //     )
  //   ) 
  //     // &&
  //     // // Meet appliance search criteria
  //     // (
  //     // ) &&
  //     // // Meet ustensils search criteria
  //     // (
  //     // )
    


        
    //     let filteredRecipes = recipes.filter(recipe => 
    // recipe.name.includeCaseInsensitive(searchBarText) || 
    // recipe.description.includeCaseInsensitive(searchBarText) ||
    // recipe.ingredients.some(element => 
    //   element.ingredient.includeCaseInsensitive(searchBarText) && 
    //   element.ingredient.includeCaseInsensitive(searchIngredientsText)
    // )
  // );
  // renderRecipeGrid(filteredRecipes);
// }

renderRecipeGrid(recipes);








