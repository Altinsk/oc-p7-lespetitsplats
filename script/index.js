// Declare global variables
let filteredRecipes = recipes;

// Card creation
function renderRecipeGrid() { 
  // Get the container element where the cards will be displayed
  const cardContainer = document.getElementById("card-container");

  // Remove recipe container children
  cardContainer.replaceChildren();

  // Generate the grid of cards
  filteredRecipes.forEach((recipe) => {
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
    recipe.ingredients.forEach((ingredient) => {

      // Ingredient filter tags <li> into <ul>
      recipe.ingredients.map(obj => {
        const ingredientTags = document.createElement("li");
        ingredientTags.textContent = obj.ingredient;
        const ingredientUl = document.getElementById("ingredient-filter");
        ingredientUl.appendChild(ingredientTags);
        // console.log(ingredientTags);
      });

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

// Filter recipes
const inputSearchBar = document.getElementById("input-search");

inputSearchBar.addEventListener("input", function() {
  let inputText = document.getElementById("input-search").value;
  console.log(inputText);
  filteredRecipes = recipes.filter(recipe => 
    recipe.name.includes(inputText) || 
    recipe.description.includes(inputText) ||
    recipe.ingredients.includes(inputText)
  );
  renderRecipeGrid();
});

renderRecipeGrid();




// // global variables 
// const grid = document.querySelector(".row");
// // const ingredientItem = document.createElement("li");
// // const recipeIngredients = document.createElement("ul");





// // generate the recipes for each object
// recipes.forEach((recipe) => {
//     renderRecipeCard(recipe);
//     // generate the ingredients for each objects
//     // recipe.ingredients.forEach((ingredient) => {
//     //     console.log(typeof ingredient);
//     //     console.log(ingredient);

//     //     const ingredientItem = document.createElement("li");
//     //     const recipeIngredients = document.createElement("ul");
//     //     recipeIngredients.textContent = "Ingredients";
//     //     const allIngredients = Object.entries(ingredient);

//     //     recipeIngredients.appendChild(ingredientItem);
//     //     document.getElementById("myList").appendChild(recipeIngredients);


        
//     //     console.log(allIngredients);
//     //     // console.log(Array.from(allIngredients));
//     //     // const ingredientEntries = Object.entries(ingredient);
//     //     // console.log(ingredientEntries);
//     //     // const merge = ingredientEntries.flat(1);
//     //     // console.log(merge);
//     //     // for (let i = 0; i < ingredientEntries.length; i++ ) {
            
//     //     //     ingredientItem.innerHTML = `${ingredientEntries[i]}`;

//     //     //     recipeIngredients.appendChild(ingredientItem);
//     //     // }
//     //     // return recipeIngredients;
//     // });
// });

// // creating recipe cards using DOM 
// function renderRecipeCard(recipe) {
//         const recipeCard = document.createElement("div");
//         recipeCard.setAttribute("class" , "card");
//         recipeCard.setAttribute("class", "col-4");
//         // recipeCard.setAttribute("class", "col-sm-12");
//         // recipeCard.setAttribute("class", "col-md-6");
//         // recipeCard.style.width = "350px";
//         const recipePhoto = document.createElement("img");
//         const photo = `css/media/${recipe.image}`;
//         recipePhoto.setAttribute("src", photo);
//         recipePhoto.setAttribute("alt", "recipe picture");
//         recipePhoto.setAttribute("class" , "card-img-top");
//         const cardBody = document.createElement("div");
//         cardBody.setAttribute("class", "card-body");
//         const recipeDescriptionDiv = document.createElement("div");
//         recipeDescriptionDiv.setAttribute("class", "recipe-Description");
//         const recipeTitle = document.createElement("h2");
//         recipeTitle.innerHTML = `${recipe.name}`;
//         const recipeTag = document.createElement("p");
//         recipeTag.textContent = "RECETTE";
//         const recipeDescription = document.createElement("p");
//         recipeDescription.textContent = `${recipe.description}`;
//         const recipeTimeSpan = document.createElement("span");
//         recipeTimeSpan.setAttribute("class", "badge bg-secondary");
//         const recipeTime = document.createElement("p");
//         recipeTime.textContent = `${recipe.time}` + "min"; 
//         const recipeIngredientTitle = document.createElement("p");
//         recipeIngredientTitle.setAttribute("id", "myList");
//         recipeIngredientTitle.textContent = "Ingredients";
//         const recipeIngredientsDiv = document.createElement("div");
//         recipeIngredientsDiv.setAttribute("class", "recipe-Ingredient");
//         const recipeIngredients = document.createElement("ul");
//         recipeIngredients.textContent = "Ingredients";
//         const ingredientItem = document.createElement("li");
//         ingredientItem.innerHTML = "";
//         // recipeIngredients.innerHTML = `${recipe.ingredients}`;

//         let x = document.getElementById("myList");
//         const ingredientGrid = document.createElement("grid");
//         ingredientGrid.setAttribute("class", "col-6");



        
//         recipe.ingredients.forEach((ingredient) => {
//             console.log(typeof ingredient);
//             console.log(ingredient);
//             const ingredientEntries = Object.entries(ingredient);
//             console.log(ingredientEntries);
//             const merge = ingredientEntries.flat();
//             console.log(merge);
//             console.log("merge length", merge.length);

//             for (let i = 0; i < merge.length; i++ ) {
//                 ingredientItem[i] = merge[i];
//                 ingredientItem.innerHTML = `${merge[i]}`; 
//             }
            
//             // console.log(Array.from(allIngredients));
//             // const ingredientEntries = Object.entries(ingredient);
//             // console.log(ingredientEntries);
//             // const merge = ingredientEntries.flat(1);
//             // console.log(merge);
//             // for (let i = 0; i < ingredientEntries.length; i++ ) {
                
//             //     ingredientItem.innerHTML = `${ingredientEntries[i]}`;
    
//             //     recipeIngredients.appendChild(ingredientItem);
//             // }
//             // return recipeIngredients;
//         });
    

//         grid.appendChild(recipeCard);
//         recipeCard.appendChild(recipePhoto);
//         recipeCard.appendChild(cardBody);
//         cardBody.appendChild(recipeDescriptionDiv);
//         cardBody.appendChild(recipeIngredientsDiv);
//         recipeCard.appendChild(recipeTimeSpan);
//         recipeTimeSpan.appendChild(recipeTime);
//         recipeDescriptionDiv.appendChild(recipeTitle);
//         recipeDescriptionDiv.appendChild(recipeTag);
//         recipeDescriptionDiv.appendChild(recipeDescription);
//         recipeIngredientsDiv.appendChild(recipeIngredientTitle);
//         recipeIngredientsDiv.appendChild(recipeIngredients);
//         recipeIngredients.appendChild(ingredientItem);
        
//         return recipeCard;
// }

















