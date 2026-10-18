var announcement = document.getElementById("one")
var announcementClose = document.getElementById("two")
var menuToggle = document.getElementById("three")
var sideMenu = document.getElementById("four")
var sideMenuClose = document.getElementById("five")
var wishlistIcons = document.querySelectorAll(".six")
var heroImg = document.getElementById("heroImg")
var leftArrow = document.getElementById("left")
var rightArrow = document.getElementById("right")

announcementClose.addEventListener("click", function () {
    announcement.style.display = "none"
})

menuToggle.addEventListener("click", function () {
    sideMenu.classList.toggle("is-open")
})

sideMenuClose.addEventListener("click", function () {
    sideMenu.classList.remove("is-open")
})

wishlistIcons.forEach(function (icon) {

    icon.addEventListener("click", function () {

        if (icon.classList.contains("fa-solid")) {
            icon.classList.remove("fa-solid")
            icon.classList.add("fa-regular")
            icon.style.color = "rgb(22,22,22)"
        }
        else {
            icon.classList.add("fa-solid")
            icon.classList.remove("fa-regular")
            icon.style.color = "rgb(229,57,28)"
        }

    })

})

var images = [
    "./img/p26.webp",
    "./img/p17.webp",
    "./img/p27.webp"
]

var index = 0

rightArrow.addEventListener("click", function () {

    if (index < images.length - 1) {
        index++
    }

    heroImg.src = images[index]

})

leftArrow.addEventListener("click", function () {

    if (index > 0) {
        index--
    }

    heroImg.src = images[index]

})

