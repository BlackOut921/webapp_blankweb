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

    const _observer = new IntersectionObserver(entries => {
        entries.forEach(i => {
            //Only shows i.target
            //i.isIntersecting && i.target.classList.add("show");
            //Hides and shows i.target
            i.isIntersecting ? i.target.classList.add("show") : i.target.classList.remove("show");
        });
    });

    const _observerTargets = document.querySelectorAll(".bo-observer-target");
    _observerTargets.length > 0 && _observerTargets.forEach(i => { _observer.observe(i); });

    //Navbar
    const _navbar = document.querySelector(".bo-nav");
    const _navbarBtn = document.querySelector(".bo-nav-btn");
    //Menu btn
    _navbarBtn.addEventListener("click", () => {
        _navbar.classList.toggle("show");
        document.body.classList.add("lock");
    });
    //Nav active click
    _navbar.addEventListener("click", (e) => {
        e.target == _navbar && _navbar.classList.remove("show");
    });
};