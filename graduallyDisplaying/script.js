const container = document.querySelector(".container");
container.addEventListener("click", removeFrontImage);

function removeFrontImage() {
  const img = document.querySelector("#hiddenImage");
  img.style.clipPath =
    "polygon(49% 48%, 100% 0, 49% 48%, 100% 100%, 49% 48%, 49% 48%, 49% 48%, 0 100%, 49% 48%, 0 0)";
  container.removeEventListener("click", removeFrontImage);

  setTimeout(() => {
    container.addEventListener("click", clearImage);
  }, 500);
}

function clearImage() {
  const scanner = document.querySelector("#scanner");
  const scannerFrame = document.querySelector("#frame");
  scanner.style.display = "block";
  scannerFrame.style.display = "block";

  setTimeout(() => {
    scanner.style.transform = "rotateY(270deg)";
    setTimeout(() => {
      scanner.style.display = "none";
      scannerFrame.style.display = "none";
      container.style.setProperty("--blur-value", "0px");
    }, 3000);
  }, 200);

  container.removeEventListener("click", clearImage);
}
