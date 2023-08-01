// Changing the menu arrow direction when opened
let ingredientMenu = document.querySelector(".ingredient-filter-btn");
let ingredientDropdown = document.getElementById('ingredient-dropdown');

ingredientDropdown.addEventListener('shown.bs.dropdown', ingredientMenuExpandedFun);
ingredientDropdown.addEventListener('hidden.bs.dropdown', ingredientMenuExpandedFun);

function ingredientMenuExpandedFun() {
  const arrowUp = document.getElementById("ingredient-arr-up");
  const arrowDown = document.getElementById("ingredient-arr-down");
  let ingredientMenuExpanded = ingredientMenu.getAttribute("aria-expanded"); 

  if (ingredientMenuExpanded === "true") {
    arrowUp.style.display = "inline";
    arrowDown.style.display = "none";
  } else {
    arrowUp.style.display = "none";
    arrowDown.style.display = "inline";
  }
}
