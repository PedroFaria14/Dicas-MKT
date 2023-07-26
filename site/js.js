
  document.addEventListener("DOMContentLoaded", function () {
    const dropdownCategorias = document.getElementById("dropdown-categorias");
    const subMenu = document.querySelector(".sub-menu");

    dropdownCategorias.addEventListener("click", function () {
      subMenu.classList.toggle("active");
    });
  });

