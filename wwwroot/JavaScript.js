//Find theme wwitch
const _themeSwitch = document.querySelector(".bo-theme-switch-input");
//Save theme storage name
const _themeStorageName = "bo-theme";
//Store current theme
let _theme = "light";

//Get Preference (return=light|dark)
function GetThemePreference() {
    //Get localStorage value
    const _storageValue = localStorage.getItem(_themeStorageName);
    //Return either: _storageTheme or matchMedia query
    return _storageValue ?
        _storageValue :
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

//Set preference (localStorage)
function SetThemePreference(s) {
    localStorage.setItem(_themeStorageName, s);
    UpdateTheme();
}

//Update UI with new theme
function UpdateTheme() {
    document.documentElement.setAttribute("data-theme", _theme);
    _themeSwitch.checked = _theme === "dark" ? true : false;
}

//Set theme early
_theme = GetThemePreference();
UpdateTheme();

window.onload = () => {
    UpdateTheme();
    _themeSwitch.addEventListener("change", () => {
        _theme = _theme === "light" ? "dark" : "light";
        SetThemePreference(_theme);
    });
};

/*window.addEventListener("load", () => {
    _themeSwitch.addEventListener("change", () => {
        let _theme = _themeSwitch.checked ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", _theme);
        localStorage.setItem("bo-theme", _theme);
    });
});*/