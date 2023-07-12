// // global variables 
// grid = document.getElementById("grid");

// // generate the recipes for each object
// recipes.forEach((recipe) => {
//     renderRecipeCard(recipe);
//     // generate the ingredients for each objects
//     recipe.ingredients.forEach((ingredient) => {
//         console.log(ingredient);
//     // recipeCard.appendChild(ingredient);
// });
// });



// // creating recipe cards using DOM 
// function renderRecipeCard(recipe) {
//         const photo = `css/media/${recipe.image}`
//         const recipeCard = document.createElement("article");
//         recipeCard.setAttribute("class" , "recipeCard");
//         const recipePhotoSection = document.createElement("section");
//         recipePhotoSection.setAttribute("class", "sections");
//         const recipePhoto = document.createElement("img");
//         recipePhoto.setAttribute("src", photo);
//         recipePhoto.setAttribute("alt", "recipe picture");
//         recipePhoto.setAttribute("class", "photo");
//         const recipeDescriptionDiv = document.createElement("div");
//         recipeDescriptionDiv.setAttribute("class", "recipe-Description");
//         const recipeTitle = document.createElement("h2");
//         recipeTitle.innerHTML = `${recipe.name}`;
//         const recipeTag = document.createElement("p");
//         recipeTag.textContent = "RECETTE";
//         const recipeDescription = document.createElement("p");
//         recipeDescription.textContent = `${recipe.description}`;
//         const recipeTimeSpan = document.createElement("span");
//         recipeTimeSpan.setAttribute("class", "time-Span");
//         const recipeTime = document.createElement("p");
//         recipeTime.textContent = `${recipe.time}` + "min"; 
//         const recipeIngredientTitle = document.createElement("p");
//         recipeIngredientTitle.textContent = "Ingredients";
//         const recipeIngredientsDiv = document.createElement("div");
//         recipeIngredientsDiv.setAttribute("class", "recipe-Ingredient")
//         const recipeIngredients = document.createElement("p");
//         recipeIngredients.innerHTML = `${recipe.ingredients}`


//         grid.appendChild(recipeCard);
//         recipeCard.appendChild(recipePhotoSection);
//         recipePhotoSection.appendChild(recipePhoto);
//         recipePhotoSection.appendChild(recipeTimeSpan);
//         recipeTimeSpan.appendChild(recipeTime);
//         recipeCard.appendChild(recipeDescriptionDiv);
//         recipeCard.appendChild(recipeIngredientsDiv);
//         recipeDescriptionDiv.appendChild(recipeTitle);
//         recipeDescriptionDiv.appendChild(recipeTag);
//         recipeDescriptionDiv.appendChild(recipeDescription);
//         recipeIngredientsDiv.appendChild(recipeIngredientTitle);
//         recipeIngredientsDiv.appendChild(recipeIngredients);


//         return recipeCard;
// }
















