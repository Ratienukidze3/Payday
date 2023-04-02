const dropdownBtn = document.getElementById("dots_button");
const dropdownMenu = document.getElementById("dots_drop");
const toggleArrow = document.getElementById("dots");


const toggleDropdown = function () {
    dropdownMenu.classList.toggle("down");
    toggleArrow.classList.toggle("dots");
    };
console.log (toggleArrow.chilNodes)

dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();

  
});


document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("dots")) {
    toggleDropdown();
  }
});

