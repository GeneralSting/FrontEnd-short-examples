document.querySelectorAll('.box').forEach(element => element.addEventListener('mouseover', event => {
    let imgTextCopy = element.children[1].innerText;
    element.children[1].innerText += " added description"
    element.addEventListener('mouseout', secondEvent => {
        element.children[1].innerText = imgTextCopy;
    })
}));