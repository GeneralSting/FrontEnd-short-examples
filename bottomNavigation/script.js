function change(icon) {
    const buttons = document.querySelectorAll('.icon');
    buttons.forEach(function(obj) {
        obj.classList.remove("active");
    });
    icon.classList.add("active");
}