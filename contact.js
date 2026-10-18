var form = document.querySelector("form")
var menuToggle = document.getElementById("three")
var sideMenu = document.getElementById("four")
var sideMenuClose = document.getElementById("five")

form.addEventListener("submit", function (event) {
    event.preventDefault()
    alert("SUBMITTED")
    form.reset()
})

menuToggle.addEventListener("click", function () {
    sideMenu.classList.toggle("is-open")
})

sideMenuClose.addEventListener("click", function () {
    sideMenu.classList.remove("is-open")
})

