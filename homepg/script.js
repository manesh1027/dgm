//image sliders
const images = [
    ["../stock/carbday.jpg", "../stock/giftbox.jpg"],
    ["../stock/beachdinner.jpg", "../stock/movie.jpg"],
    ["../stock/marryme.jpg", "../stock/carbday.jpg"]
];

const sliders = document.querySelectorAll(".slider-img");

let index = 0;
function changeImages() {
    sliders.forEach((img, i) => {
        img.style.opacity = 0; // Fade out
        setTimeout(() => {
            img.src = images[i][index % images[i].length]; // Change image
            img.style.opacity = 1; // Fade in
        }, 500); // Halfway through transition
    });
    index++;
}

setInterval(changeImages, 3000);


//dropdown menu
document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const dropbtn = document.querySelector(".dropbtn");

    dropbtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent page jump
        dropdown.classList.toggle("active");
    });

    // Close dropdown if clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("active");
        }
    });
});


//redirecting to diffrent pages when clicked on images or divs!
document.getElementById("d1").onclick = function () {
    window.location.href = "../contact/index.html";
};

document.getElementById("d2").onclick = function () {
    window.location.href = "../contact/index.html";
};

document.getElementById("d3").onclick = function () {
    window.location.href = "../contact/index.html";
};

document.getElementById("d4").onclick = function () {
    window.open("../contact/index.html");
};

document.getElementById("insta").onclick = function () {
    window.open("https://www.instagram.com/twilightmoments.goa/","_blank");
};

document.getElementById("whatsapp").onclick = function () {
    window.open("https://wa.me/9356960835?text=Hello there!","_blank");
};

document.getElementById("phone").onclick = function () {
    window.location.href="tel:+919834061531";
};