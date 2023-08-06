import { generateIngredientList } from "./filters.js";
import { generateApplianceList } from "./filters.js";
import { generateUstensilList } from "./filters.js";

// Global variables
let ingredientFilters = [];
let applianceFilters = [];
let ustensilFilters = [];
let recipeCount;

  // Get the container element where the cards will be displayed
  const cardContainer = document.getElementById("card-container");
// Capture the input elements
const inputSearchBar = document.getElementById("input-search");
const inputSearchIngredients = document.getElementById("input-search-ingredients");
const xIconIngredient = document.getElementById("x-icon-ingredient");
const ingredientFilter = document.getElementById("ingredient-filter");
const ingredientSelector = document.getElementById("ingredient-selector");
const inputSearchAppliances = document.getElementById("input-search-appliances");
const xIconAppliance = document.getElementById("x-icon-appliance");
const applianceFilter = document.getElementById("appliance-filter");
const applianceSelector = document.getElementById("appliance-selector");
const inputSearchUstensils = document.getElementById("input-search-ustensils");
const xIconUstensil = document.getElementById("x-icon-ustensil");
const ustensilFilter = document.getElementById("ustensil-filter");
const ustensilSelector = document.getElementById("ustensil-selector");

// Add event listeners
inputSearchBar.addEventListener("input", filterRecipes);
inputSearchIngredients.addEventListener("input", filterRecipes);
xIconIngredient.addEventListener("click", clearIngredientSearchBar);
ingredientFilter.addEventListener('click', ingredientSelection);
inputSearchAppliances.addEventListener("input", filterRecipes);
xIconAppliance.addEventListener("click", clearApplianceSearchBar);
applianceFilter.addEventListener('click', applianceSelection);
inputSearchUstensils.addEventListener("input", filterRecipes);
xIconUstensil.addEventListener("click", clearUstensilSearchBar);
ustensilFilter.addEventListener('click', ustensilSelection);

// Event callback functions
function ingredientSelection(e) {
  if (e.target.className !== 'ingredientLi') return;
  let filterContent = e.target.textContent;
  if (!ingredientFilters.includes(filterContent)) {
    ingredientFilters.push(filterContent);
  }
  ingredientSelector.replaceChildren();
  for (let i = 0; i < ingredientFilters.length; i++) {
    const ingredient = ingredientFilters[i];
    let item = ingredient[i];
    item = document.createElement("div");
    item.style.display = "flex";
    item.style.justifyContent = "space-between";
    item.style.alignItems = "center";
    item.style.backgroundColor = "#FFD15B";
    item.style.marginTop = "5px";

    let clicked = ingredient[i];
    clicked = document.createElement("p");
    clicked.style.textAlign = "left";
    clicked.style.color = "black";
    clicked.style.borderRadius = "5px";
    clicked.style.padding = "5px";
    clicked.style.margin = "0";

    let clearButton = ingredient[i];
    clearButton = document.createElement("button");
    clearButton.addEventListener('click', e => {
      ingredientFilters = ingredientFilters.filter(item => item !== ingredient);
      item.remove();
      filterRecipes();
    })
    clearButton.classList.add("btn-close");
    clearButton.style.height = "0.2em";
    clicked.textContent = ingredient;
    item.appendChild(clicked);
    item.appendChild(clearButton);
    ingredientSelector.appendChild(item);
  }
  filterRecipes();
}

function applianceSelection(e) {
  if (e.target.className !== 'applianceLi') return;
  let filterContent = e.target.textContent;
  if (!applianceFilters.includes(filterContent)) {
    applianceFilters.push(filterContent);
  }
  applianceSelector.replaceChildren();
  for (let i = 0; i < applianceFilters.length; i++) {
    const appliance = applianceFilters[i];
    let item = appliance[i];
    item = document.createElement("div");
    item.style.display = "flex";
    item.style.justifyContent = "space-between";
    item.style.alignItems = "center";
    item.style.backgroundColor = "#FFD15B";
    item.style.marginTop = "5px";

    let clicked = appliance[i];
    clicked = document.createElement("p");
    clicked.style.textAlign = "left";
    clicked.style.color = "black";
    clicked.style.borderRadius = "5px";
    clicked.style.padding = "5px";
    clicked.style.margin = "0";

    let clearButton = appliance[i];
    clearButton = document.createElement("button");
    clearButton.addEventListener('click', e => {
      applianceFilters = applianceFilters.filter(item => item !== appliance);
      item.remove();
      filterRecipes();
    })
    clearButton.classList.add("btn-close");
    clearButton.style.height = "0.2em";
    // ingredientX.style.paddingLeft = "5px"
    clicked.textContent = appliance;
    item.appendChild(clicked);
    item.appendChild(clearButton);
    applianceSelector.appendChild(item);
  }
  filterRecipes();
}

function ustensilSelection(e) {
  if (e.target.className !== 'ustensilLi') return;
  let filterContent = e.target.textContent;
  if (!ustensilFilters.includes(filterContent)) {
    ustensilFilters.push(filterContent);
  }
  ustensilSelector.replaceChildren();
  for (let i = 0; i < ustensilFilters.length; i++) {
    const ustensil = ustensilFilters[i];
    let item = ustensil[i];
    item = document.createElement("div");
    item.style.display = "flex";
    item.style.justifyContent = "space-between";
    item.style.alignItems = "center";
    item.style.backgroundColor = "#FFD15B";
    item.style.marginTop = "5px";

    let clicked = ustensil[i];
    clicked = document.createElement("p");
    clicked.style.textAlign = "left";
    clicked.style.color = "black";
    clicked.style.borderRadius = "5px";
    clicked.style.padding = "5px";
    clicked.style.margin = "0";

    let clearButton = ustensil[i];
    clearButton = document.createElement("button");
    clearButton.addEventListener('click', e => {
      ustensilFilters = ustensilFilters.filter(item => item !== ustensil);
      item.remove();
      filterRecipes();
    })
    clearButton.classList.add("btn-close");
    clearButton.style.height = "0.2em";
    // ingredientX.style.paddingLeft = "5px"
    clicked.textContent = ustensil;
    item.appendChild(clicked);
    item.appendChild(clearButton);
    ustensilSelector.appendChild(item);
  }
  filterRecipes();
}

function clearIngredientSearchBar() {
  inputSearchIngredients.value = "";
  xIconIngredient.style.visibility = "hidden";
  filterRecipes();
};

function clearApplianceSearchBar() {
  inputSearchAppliances.value = "";
  xIconAppliance.style.visibility = "hidden";
  filterRecipes();
};

function clearUstensilSearchBar() {
  inputSearchUstensils.value = "";
  xIconUstensil.style.visibility = "hidden";
  filterRecipes();
};

// Card creation index home page
function renderRecipeGrid(inputRecipes) {
  // Remove recipe container children
  cardContainer.replaceChildren();

  // Generate the grid of cards
  for (let i = 0; i < inputRecipes.length; i++) {
    const recipe = inputRecipes[i];
    // Create card column 
    let cardColumn = recipe[i];
    cardColumn = document.createElement("div");
    cardColumn.classList.add("col", "mb-5");
    cardColumn.style.borderRadius = "2em 2em 0 0";

    // Create a card element
    let cardElement = recipe[i];
    cardElement = document.createElement("div");
    cardElement.classList.add("card", "h-100", "border-0");
    cardElement.style.maxWidth = "20em";
    cardElement.style.marginTop = "3em";
    cardElement.style.borderRadius = "2em 2em 2em 2em";

    // Create the card image
    let cardImage = recipe[i];
    cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top");
    cardImage.src = `css/media/${recipe.image}`;
    cardImage.alt = "recipe picture";
    cardImage.style.borderRadius = "2em 2em 0 0";

    // Create the time span
    let timeSpan = recipe[i];
    timeSpan = document.createElement("span");
    timeSpan.classList.add("time-span");
    timeSpan.textContent = recipe.time + "min";
    timeSpan.style.backgroundColor = "#FFD15B";
    timeSpan.style.color = "black";
    timeSpan.style.padding = "0.1em 0.5em"
    timeSpan.style.position = "absolute";
    timeSpan.style.right = "10%";
    timeSpan.style.top = "3%";
    timeSpan.style.borderRadius = "0.5em";

    // Create the card body
    let cardBody = recipe[i];
    cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // Create the card title
    let cardTitle = recipe[i];
    cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title", "fs-4", "fw-bolder", "mb-5");
    cardTitle.textContent = recipe.name;

    // Create the description title
    let cardDescriptionTitle = recipe[i];
    cardDescriptionTitle = document.createElement("p");
    cardDescriptionTitle.classList.add("card-title", "fs-5", "fw-light");
    cardDescriptionTitle.textContent = "RECETTE";

    // Create the card description
    let cardContent = recipe[i];
    cardContent = document.createElement("p");
    cardContent.classList.add("card-text", "cuttoff-text", "fs-5", "mb-5");
    cardContent.textContent = recipe.description;

    // Create the Ingredient title
    let cardIngredientTitle = recipe[i];
    cardIngredientTitle = document.createElement("p");
    cardIngredientTitle.classList.add("card-title", "fs-5", "fw-light");
    cardIngredientTitle.textContent = "INGRÉDIENTS";

    // Create the card ingredients
    let ingredientContainer = recipe[i];
    ingredientContainer = document.createElement("div");
    ingredientContainer.classList.add("row", "row-cols-1", "row-cols-md-2", "g-4");

    // Populate ingredient list
    let ingredientUl = recipe[i];
    ingredientUl = document.getElementById("ingredient-filter");
    ingredientUl.style.paddingLeft = "0";
    ingredientUl.replaceChildren();
  
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

    // Create ingredient list items
    for (let i = 0; i < ingredientList.length; i++) {
      const ingredient = ingredientList[i];
      let ingredientTags = ingredient[i];
      ingredientTags = document.createElement("li");
      ingredientTags.classList.add("ingredientLi");
      ingredientTags.style.listStyle =  "none";
      ingredientTags.style.textAlign = "left";
      ingredientTags.style.marginTop = "0.3em";
      ingredientTags.style.paddingTop = "0.3em";
      ingredientTags.style.paddingBottom = "0.3em";
      ingredientTags.style.textIndent = "0.8em";
      ingredientTags.textContent = ingredient;
      ingredientUl.appendChild(ingredientTags);
    };

    // Populate appliance list
    const applianceUl = document.getElementById("appliance-filter");
    applianceUl.style.paddingLeft = "0";
    applianceUl.replaceChildren();
    const applianceSearch = document.getElementById("input-search-appliances");

    // Appliance list fot all appliance tags
    let applianceList =  generateApplianceList(inputRecipes);
    let applianceSearchInput = applianceSearch.value;
    // Filter the appliances in the appliance search bar
    let applianceSearchResult = applianceList.filter(applianceSeachFunction);

      function applianceSeachFunction(applianceList) {
        return applianceList.toLowerCase().includes(applianceSearchInput);
      }

    // Return appliance results when using search bar
    applianceList = applianceSearchResult;

    // Populate appliance list
    for (let i = 0; i < applianceList.length; i++) {
      const appliance = applianceList[i];
      let applianceTags = appliance[i];
      applianceTags = document.createElement("li");
      applianceTags.classList.add("applianceLi");
      applianceTags.style.listStyle =  "none";
      applianceTags.style.textAlign = "left";
      applianceTags.style.marginTop = "0.3em";
      applianceTags.style.paddingTop = "0.3em";
      applianceTags.style.paddingBottom = "0.3em";
      applianceTags.style.textIndent = "0.8em";
      applianceTags.textContent = appliance;
      applianceUl.appendChild(applianceTags);
    };

    // Populate ustensil list
    const ustensilsUl = document.getElementById("ustensil-filter");
    ustensilsUl.style.paddingLeft = "0";
    ustensilsUl.replaceChildren();
    const ustensilSearch = document.getElementById("input-search-ustensils");
    
    // Ustensil list for all ustensil tags
    let ustensilList =  generateUstensilList(inputRecipes);
    // ustensilSearch.addEventListener("input", function() {});
    let ustensilSearchInput = ustensilSearch.value;
    // Filter the ustensil in the ustensil search bar
    let ustensilSearchResult = ustensilList.filter(ustensilSeachFunction);
  
      function ustensilSeachFunction(ustensilList) {
        return ustensilList.toLowerCase().includes(ustensilSearchInput);
      }
      // Return ustensil results when using search bar
      ustensilList = ustensilSearchResult;
  
    // Populate ustensil list
    for (let i = 0; i < ustensilList.length; i++ ) {
      const ustensil = ustensilList[i];
      let ustensilsTags = ustensil[i];
      ustensilsTags = document.createElement("li");
      ustensilsTags.classList.add("ustensilLi");
      ustensilsTags.style.listStyle =  "none";
      ustensilsTags.style.textAlign = "left";
      ustensilsTags.style.marginTop = "0.3em";
      ustensilsTags.style.paddingTop = "0.3em";
      ustensilsTags.style.paddingBottom = "0.3em";
      ustensilsTags.style.textIndent = "0.8em";
      ustensilsTags.textContent = ustensil;
      ustensilsUl.appendChild(ustensilsTags);
    };

    // Constructing the cards body and elements
    for (let i = 0; i < recipe.ingredients.length; i++) {
      const ingredient = recipe.ingredients[i];
      let ingredientElement = ingredient[i]
      ingredientElement = document.createElement("div");

      // Create the ingredient label
      let ingredientLabel = recipe.ingredients[i];
      ingredientLabel = document.createElement("p");
      ingredientLabel.textContent = ingredient.ingredient;
      ingredientLabel.classList.add("card-text", "fs-5", "m-0", "ps-3");

      // Create the ingredient quantity
      let ingredientQuantity = recipe.ingredients[i];
      ingredientQuantity = document.createElement("p");
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
    };

    // Append the card image to the card element
    cardElement.appendChild(cardImage);
    cardElement.appendChild(timeSpan);

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
  }

  // Recipe count number
  recipeCount = inputRecipes.length;
  const recipeCounter = document.getElementById("recipe-count");
  recipeCounter.innerHTML = `${recipeCount} ${recipeCount > 1 ? "Recetes" : "Recette"} `;
}

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

  let searchBarInput = "";
  let filteredRecipes = [];

  if (searchBarText.length >= 3) {
    searchBarInput = searchBarText;
  }

  filteredRecipes = recipes.filter(recipe => 
    (
      recipe.name.includeCaseInsensitive(searchBarInput)
      || recipe.description.includeCaseInsensitive(searchBarInput) 
      || recipe.ingredients.some(element => element.ingredient.includeCaseInsensitive(searchBarInput))
    )
  )
  filteredRecipes = filteredRecipes.filter(recipe =>
    containsAllStrings(recipe.ingredients.map(element => element.ingredient), ingredientFilters)
  )
  filteredRecipes = filteredRecipes.filter(recipe =>
    containsAllStrings([recipe.appliance], applianceFilters)
  )
  filteredRecipes = filteredRecipes.filter(recipe =>
    containsAllStrings(recipe.ustensils, ustensilFilters)
  )
  renderRecipeGrid(filteredRecipes);
  if (filteredRecipes.length === 0) {
    cardContainer.innerHTML = `Aucune recette ne contient "${searchBarText}" vous pouvez chercher « tarte aux pommes », « poisson », etc.`;
  }
}

renderRecipeGrid(recipes);

