const dropdown3Button = document.getElementById("dots3_button");
const dropdown3Menu = document.getElementById("dots3_drop");

const toggleDropdown3 = function () {
  dropdown3Menu.classList.toggle("see3");
  };
dropdown3Button.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown3();
});

document.documentElement.addEventListener("click", function () {
  if (dropdown3Menu.classList.contains("see3")) {
    toggleDropdown3();
  }
});

