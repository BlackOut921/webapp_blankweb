const _themeSwitch = document.querySelector(".bo-theme-switch-input");
const _themeStoreName = "bo-theme";
let _themeGet = localStorage.getItem(_themeStoreName);

document.documentElement.setAttribute("data-theme", _themeGet ? _themeGet : "light");
_themeSwitch.checked = _themeGet === "dark" ? true : false;

window.addEventListener("load", () => {
    _themeSwitch.addEventListener("change", () => {
        let _theme = _themeSwitch.checked ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", _theme);
        localStorage.setItem(_themeStoreName, _theme);
    });
});