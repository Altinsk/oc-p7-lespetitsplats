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
    const ingredientItem = document.createElement("div");
    ingredientItem.style.display = "flex";
    ingredientItem.style.justifyContent = "spaceBetween";
    ingredientItem.style.alignItems = "center";
    ingredientItem.style.backgroundColor = "#FFD15B";

    const ingredientClicked = document.createElement("p");
    ingredientClicked.style.textAlign = "left";
    ingredientClicked.style.color = "black";
    ingredientClicked.style.borderRadius = "5px";
    ingredientClicked.style.padding = "5px";
    ingredientClicked.style.margin = "0";

    const ingredientX = document.createElement("button");
    ingredientX.classList.add("btn-close");
    ingredientX.style.height = "0.2em";
    // ingredientX.style.paddingLeft = "5px"
    ingredientClicked.textContent = ingredient;
    ingredientItem.appendChild(ingredientClicked);
    ingredientItem.appendChild(ingredientX);
    ingredientSelector.appendChild(ingredientItem);
  });
});