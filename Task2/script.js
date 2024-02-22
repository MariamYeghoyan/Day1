document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("changeTextButton");
    var paragraph = document.getElementById("textParagraph");

    button.addEventListener("click", function() {
        paragraph.textContent = "Text changed!";
    });
});
