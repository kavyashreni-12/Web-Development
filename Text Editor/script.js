function toggleBold() {
    var textarea = document.getElementById("textarea1");
    var currentWeight = textarea.style.fontWeight;
    if (currentWeight === "bold") {
        textarea.style.fontWeight = "normal";
    } else {
        textarea.style.fontWeight = "bold";
    }
}

function toggleItalic() {
    var textarea = document.getElementById("textarea1");
    var currentStyle = textarea.style.fontStyle;
    if (currentStyle === "italic") {
        textarea.style.fontStyle = "normal";
    } else {
        textarea.style.fontStyle = "italic";
    }
}

function alignLeft() {
    var textarea = document.getElementById("textarea1");
    textarea.style.textAlign = "left";
}

function alignCenter() {
    var textarea = document.getElementById("textarea1");
    textarea.style.textAlign = "center";
}

function alignRight() {
    var textarea = document.getElementById("textarea1");
    textarea.style.textAlign = "right";
}

function toUpperCase() {
    var textarea = document.getElementById("textarea1");
    textarea.style.textTransform = "uppercase";
}

function toLowerCase() {
    var textarea = document.getElementById("textarea1");
    textarea.style.textTransform = "lowercase";
}

function capitalize() {
    var textarea = document.getElementById("textarea1");
    textarea.style.textTransform = "capitalize";
}

function clearText() {
    var textarea = document.getElementById("textarea1");
    textarea.classList.remove("bold", "italic");
    textarea.style.textAlign = "left";
    textarea.style.textTransform = "none";
    textarea.value = "";
}

function saveAsFile() {
    var textToSave = document.getElementById("textarea1").value;

    // Prompt the user for file name and location
    var fileName = prompt("Enter file name:", "text_file.txt");
    if (fileName === null) {
        // User canceled the prompt
        return;
    }

    // Create a Blob with the text content
    var blob = new Blob([textToSave], { type: "text/plain;charset=utf-8" });

    // Create a download link
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);

    // Set the download attribute with the specified file name
    link.download = fileName;

    // Trigger the download
    link.click();
}

function changeFontSize(selectObject) {
    var textarea = document.getElementById("textarea1");
    textarea.style.fontSize = selectObject.value;
}

function changeFontFamily(selectObject) {
    var textarea = document.getElementById("textarea1");
    textarea.style.fontFamily = selectObject.value;
}

function changeTextColor(selectObject) {
    var textarea = document.getElementById("textarea1");
    textarea.style.color = selectObject.value;
}
