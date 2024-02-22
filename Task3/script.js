document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("toggleButton");
    var content = document.getElementById("content");

    button.addEventListener("click", function() {
        content.classList.toggle("hidden");
    });
});