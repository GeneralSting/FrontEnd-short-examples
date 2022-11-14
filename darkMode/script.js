let darkMode = false;
document.getElementById('switch').addEventListener('mouseover', event => {
    darkMode ? document.getElementById('switch').childNodes[0].nodeValue = "Click for light" : document.getElementById('switch').childNodes[0].nodeValue = "Click for dark";
    if (darkMode) {
        document.body.classList = "";
        document.body.classList.add("preview-light");
    } else {
        document.body.classList = "";
        document.body.classList.add("preview-dark");
    }
})

document.getElementById('switch').addEventListener('mouseleave', event => {
    document.getElementById('switch').childNodes[0].nodeValue = "Hover for preview";
    if (darkMode) {
        document.body.classList = "";
        document.body.classList.add("dark");
    } else {
        document.body.classList = "";
        document.body.classList.add("light");
    }
})

document.getElementById('switch').addEventListener('click', event => {
    darkMode ? darkMode = false : darkMode = true;
    darkMode ? document.getElementById('switch').childNodes[0].nodeValue = "Click for light" : document.getElementById('switch').childNodes[0].nodeValue = "Click for dark";
    if (darkMode) {
        document.body.classList = "";
        document.body.classList.add("dark");
    } else {
        document.body.classList = "";
        document.body.classList.add("light");
    }
})