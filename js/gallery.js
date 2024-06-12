import { images } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");
const imagesMarkup = ({ original, preview, description }) => {
  return `
  <li class="gallery-item">
  <a class="gallery-link" href="${original}">
  <img class="gallery-image" src="${preview}" data-source="${original}" alt="${description}"/>
  </a>
  </li>
  `;
};
const createImagesList = images.map(imagesMarkup).join("");
galleryEl.insertAdjacentHTML("afterbegin", createImagesList);
galleryEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (!e.target.dataset.source) {
    return;
  }
  console.log(e.target.src);
  const instance = basicLightbox.create(
    `
    <img width="100%" height="100%" src="${e.target.dataset.source}">
  `,
    {
      onShow: () => document.addEventListener("keydown", handleKeydown),
      onClose: () => document.removeEventListener("keydown", handleKeydown),
    }
  );
  instance.show();
  function handleKeydown(e) {
    if (e.code === "Escape") instance.close();
  }
});
