document.addEventListener("DOMContentLoaded", function () {
    const openMenuBtn = document.getElementById("openMenuBtn");
    const menu = document.getElementById("menu");
  
    // Abra o menu quando o botão for clicado
    openMenuBtn.addEventListener("click", function () {
      menu.classList.add("open");
    });
  
    // Feche o menu quando clicar em qualquer lugar fora dele
    document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && event.target !== openMenuBtn) {
        menu.classList.remove("open");
      }
    });
  });