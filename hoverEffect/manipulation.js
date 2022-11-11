document.querySelectorAll('.card').forEach(element => element.addEventListener('mouseover', event => {
    event.target.children[0].children[1].children[0].children[1].children[0].style.color = "#ce597c"
}));

document.querySelectorAll('.card').forEach(element => element.addEventListener('mouseout', event => {
    event.target.children[0].children[1].children[0].children[1].children[0].style.color = "#fff"
}));

document.getElementById("cards").onmousemove = e => {
    var cards = document.getElementsByClassName("card");
    for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };
}