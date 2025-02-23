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

