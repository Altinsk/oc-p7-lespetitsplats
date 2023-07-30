export let ingredientFilters = [];

// Get the clicked element name into an array
let ingredientFilter = document.getElementById("ingredient-filter");
let ingredientSelector = document.getElementById("ingredient-selector");

ingredientFilter.addEventListener('click', e => {
  let ingredientFilterContent = e.target.textContent;
  if (!ingredientFilters.includes(ingredientFilterContent)) {
    ingredientFilters.push(ingredientFilterContent);
  }
  // creating Tags for each category ingredient, appliance or ustensils
  ingredientSelector.replaceChildren();
  ingredientFilters.forEach((ingredient) => {
    const ingredientClicked = document.createElement("p");
    ingredientClicked.style.textAlign = "left";
    ingredientClicked.style.color = "black";
    ingredientClicked.style.backgroundColor = "#FFD15B";
    ingredientClicked.style.borderRadius = "5px";
    ingredientClicked.style.padding = "5px";

    const ingredientX = document.createElement("button");
    ingredientX.classList.add("btn-close");
    ingredientX.style.height = "0.5em";
    ingredientX.style.paddingLeft = "5px"
    ingredientClicked.textContent = ingredient;
    ingredientClicked.appendChild(ingredientX);
    ingredientSelector.appendChild(ingredientClicked);
  });
});