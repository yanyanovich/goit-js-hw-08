import { galleryItems } from "./gallery-items.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryEl = document.querySelector(".gallery");
const imagesMarkup = ({ original, preview, description }) => {
  return `
  <div class="gallery-item">
  <a class="gallery-link" href="${original}">
  <img class="gallery-image" src="${preview}" data-source="${original}" alt="${description}" width="340"/>
  </a>
  </div>
  `;
};
const createImagesList = galleryItems.map(imagesMarkup).join("");
galleryEl.insertAdjacentHTML("afterbegin", createImagesList);
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
