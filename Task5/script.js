document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.getElementsByClassName("colorButton");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            var color = this.getAttribute("data-color");
            document.body.style.backgroundColor = color;
        });
    }
});