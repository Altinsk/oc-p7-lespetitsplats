// remapping the blocks with the screen width
const getTheRow = document.getElementById("card-container");
let screenWidth = window.screen.width;
addingClass();

// Measuring the screen width
function addingClass() {
  // getting the actual screen width
  if(screenWidth > 991.98) {
    getTheRow.classList.remove("row-cols-1");
    getTheRow.classList.remove("row-cols-2");
    getTheRow.classList.add("row-cols-md-3");
  } else if (screenWidth > 705.98 && screenWidth < 991.98) {
    getTheRow.classList.remove("row-cols-md-3");
    getTheRow.classList.remove("row-cols-1");
    getTheRow.classList.add("row-cols-2");
  } else if (screenWidth > 505.98 && screenWidth < 705.98) {
    getTheRow.classList.remove("row-cols-md-3");
    getTheRow.classList.remove("row-cols-1");
    getTheRow.classList.add("row-cols-2");
  } else if (screenWidth < 505.98) {
    getTheRow.classList.remove("row-cols-md-3");
    getTheRow.classList.remove("row-cols-2");
    getTheRow.classList.add("row-cols-1");
  }
}