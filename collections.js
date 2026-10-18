var announcement = document.getElementById("one")
var announcementClose = document.getElementById("two")
var menuToggle = document.getElementById("three")
var sideMenu = document.getElementById("four")
var sideMenuClose = document.getElementById("five")
var filterBoxes = document.querySelectorAll(".six")
var products = document.querySelectorAll(".seven")

announcementClose.addEventListener("click", function () {
    announcement.style.display = "none"
})

menuToggle.addEventListener("click", function () {
    sideMenu.classList.toggle("is-open")
})

sideMenuClose.addEventListener("click", function () {
    sideMenu.classList.remove("is-open")
})

filterBoxes.forEach(function (box) {
    box.addEventListener("change", function () {
        var checked = []

        filterBoxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                checked.push(checkbox.value)
            }
        })

        products.forEach(function (product) {
            var occasion = product.dataset.occasion
            var color = product.dataset.color
            var arrival = product.dataset.arrivals

            if (
                checked.length === 0 ||
                checked.includes(occasion) ||
                checked.includes(color) ||
                checked.includes(arrival)
            ) {
                product.style.display = "block"
            }
            else {
                product.style.display = "none"
            }
        })

    })
})

