document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("toggleButton");

    button.addEventListener("click", function() {
        if (button.textContent === "Hello") {
            button.textContent = "Goodbye";
        } else {
            button.textContent = "Hello";
        }
    });
});