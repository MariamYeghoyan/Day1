document.addEventListener("DOMContentLoaded", function() {
    var inputField = document.getElementById("inputField");
    var displayButton = document.getElementById("displayButton");
    var displayParagraph = document.getElementById("displayParagraph");

    displayButton.addEventListener("click", function() {
        var inputValue = inputField.value;
        displayParagraph.textContent = "Input value: " + inputValue;
    });
});