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

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
