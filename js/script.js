// Dark / Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");


// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.checked = true;
}


// Toggle theme
themeToggle.addEventListener("change", () => {

    if (themeToggle.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");

    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }

});


// Smooth Scrolling

document.querySelectorAll('a[href^="#"]')
.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();


        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });


    });

});