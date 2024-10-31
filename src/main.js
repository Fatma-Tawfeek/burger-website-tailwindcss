/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/

const humburger = document.getElementById("humburger");
const navMenu = document.getElementById("nav-menu");
const closeBtn = document.getElementById("close-btn");
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        navMenu.classList.add("hidden");
    })
);

humburger.addEventListener("click", () => {
    navMenu.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
    navMenu.classList.add("hidden");
});

/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/

const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll(".all");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        /* tabs */
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tab.classList.add("active");

        /* items */
        all.forEach((item) => {
            item.style.display = "none";
        });

        const tabval = tab.getAttribute("data-tabs");
        const items = document.querySelectorAll(`.${tabval}`);
        items.forEach((item) => {
            item.style.display = "block";
        });
    });
});

/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/

const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

const darkMode = () => {
    html.classList.add("dark");
    themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("mode", "dark");
};

const lightMode = () => {
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("mode", "light");
};

if (localStorage.getItem("mode") == "dark") {
    darkMode();
}

themeBtn.addEventListener("click", (e) => {
    if (localStorage.getItem("mode") == "light") {
        darkMode();
    } else {
        lightMode();
    }
});
/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/

const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    /* scroll up */
    if (this.scrollY >= 250) {
        scrollUp.classList.remove("-bottom-1/2");
        scrollUp.classList.add("bottom-4");
    } else {
        scrollUp.classList.add("-bottom-1/2");
        scrollUp.classList.remove("bottom-4");
    }
};

window.addEventListener("scroll", scrollUp);

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/

const scrollHeader = () => {
    const header = document.getElementById("header");
    /* scroll up */
    if (this.scrollY >= 250) {
        header.classList.add("border-b", "border-secondaryColor");
    } else {
        header.classList.remove("border-b", "border-secondaryColor");
    }
};

window.addEventListener("scroll", scrollHeader);

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
