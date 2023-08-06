// Changing the menu arrow direction when opened (ingredient)
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

// Changing the menu arrow direction when opened (appliance)
let applianceMenu = document.querySelector(".appliance-filter-btn");
let applianceDropdown = document.getElementById('appliance-dropdown');

applianceDropdown.addEventListener('shown.bs.dropdown', applianceMenuExpandedFun);
applianceDropdown.addEventListener('hidden.bs.dropdown', applianceMenuExpandedFun);

function applianceMenuExpandedFun() {
  const arrowUp = document.getElementById("appliance-arr-up");
  const arrowDown = document.getElementById("appliance-arr-down");
  let applianceMenuExpanded = applianceMenu.getAttribute("aria-expanded"); 

  if (applianceMenuExpanded === "true") {
    arrowUp.style.display = "inline";
    arrowDown.style.display = "none";
  } else {
    arrowUp.style.display = "none";
    arrowDown.style.display = "inline";
  }
}

// Changing the menu arrow direction when opened (ustensils)
let ustensilMenu = document.querySelector(".ustensil-filter-btn");
let ustensilDropdown = document.getElementById('ustensil-dropdown');

ustensilDropdown.addEventListener('shown.bs.dropdown', ustensilMenuExpandedFun);
ustensilDropdown.addEventListener('hidden.bs.dropdown', ustensilMenuExpandedFun);

function ustensilMenuExpandedFun() {
  const arrowUp = document.getElementById("ustensil-arr-up");
  const arrowDown = document.getElementById("ustensil-arr-down");
  let ustensilMenuExpanded = ustensilMenu.getAttribute("aria-expanded"); 

  if (ustensilMenuExpanded === "true") {
    arrowUp.style.display = "inline";
    arrowDown.style.display = "none";
  } else {
    arrowUp.style.display = "none";
    arrowDown.style.display = "inline";
  }
}
