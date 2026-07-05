// =========================
// ELEMENTS
// =========================

const sidebar = document.getElementById("sidebar");
const menuBtn = document.getElementById("menuBtn");

// =========================
// LOAD SAVED STATE
// =========================

if (localStorage.getItem("sidebar") === "collapsed") {
    sidebar.classList.add("collapsed");
}

// =========================
// TOGGLE SIDEBAR
// =========================

menuBtn.addEventListener("click", function () {

    sidebar.classList.toggle("collapsed");

    if (sidebar.classList.contains("collapsed")) {
        localStorage.setItem("sidebar", "collapsed");
    } else {
        localStorage.setItem("sidebar", "expanded");
    }

});

// =========================
// ACTIVE MENU
// =========================

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        links.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});

// =========================
// SEARCH BAR
// =========================

const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("keyup", function () {

    console.log("Searching:", this.value);

});

// =========================
// PROFILE MENU
// =========================

const profile = document.querySelector(".profile");

profile.addEventListener("click", function () {

    alert("Profile menu coming soon.");

});

// =========================
// NOTIFICATION
// =========================

const notification = document.querySelector(".notification");

notification.addEventListener("click", function () {

    alert("You have 4 new notifications.");

});