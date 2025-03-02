//dropdown menu
document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const dropbtn = document.querySelector(".dropbtn");

    dropbtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent page jump
        event.stopPropagation(); // Stop event from propagating to document
        dropdown.classList.toggle("active");
    });

    // Close dropdown if clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target) && !dropbtn.contains(event.target)) {
            dropdown.classList.remove("active");
        }
    });
});

document.getElementById("d1").onclick = function () {
    window.location.href = "../dates/movienight.html";
};
document.getElementById("d2").onclick = function () {
    window.location.href = "../dates/camping.html";
};
document.getElementById("d3").onclick = function () {
    window.location.href = "../dates/lantern.html";
};
document.getElementById("d4").onclick = function () {
    window.location.href = "../dates/beachdinner.html";
};
document.getElementById("d5").onclick = function () {
    window.location.href = "../dates/hiltop.html";
};
document.getElementById("d6").onclick = function () {
    window.location.href = "../dates/rooftop.html";
};
