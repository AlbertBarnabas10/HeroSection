const clickableImage = document.querySelectorAll(".clickable-image");
const container = document.querySelector(".container");

clickableImage.forEach((image) => {
  image.addEventListener("click", () => {
    const newBg = image.getAttribute("data-bg");
    container.style.background = `url(${newBg}) no-repeat center center/cover`;
  });
});
