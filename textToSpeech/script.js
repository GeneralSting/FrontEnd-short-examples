let convertParagraph = document.querySelectorAll("p");
convertParagraph.forEach(paragraph => {
    paragraph.addEventListener("click", () => {
        let utterance = new SpeechSynthesisUtterance(paragraph.innerText);
        speechSynthesis.speak(utterance);
    })
})
