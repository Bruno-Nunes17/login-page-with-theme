const theme = document.querySelector(".botao-tema");

theme.addEventListener("click", () => {
    const content = document.querySelector(".content");
    if(content.classList.contains("theme-ligth")){
        content.classList.remove("theme-ligth");
        content.classList.add("theme-dark");

        theme.setAttribute("src", "./src/img/sun-day-weather-symbol_icon-icons.com_73146.svg");
        return;
    }

    content.classList.remove("theme-dark");
    content.classList.add("theme-ligth");
    theme.setAttribute("src", "./src/img/moon_icon_144203.svg");
});
