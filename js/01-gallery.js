import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryStart = document.querySelector(".gallery");

function createGallery() {
  let galleryHTML = "";

  for (let i = 0; i < galleryItems.length; i++) {
    galleryHTML += `
    <li class="gallery__item">
    <a class="gallery__link" href="${galleryItems[i].original}" onclick="event.preventDefault()">
    <img
    class="gallery__image"
    src="${galleryItems[i].preview}"
    data-source="${galleryItems[i].original}"
    alt="${galleryItems[i].description}"
    />
    </a>
    </li>
    `;
  }
  galleryStart.innerHTML = galleryHTML;
}

createGallery();
galleryStart.addEventListener("click", selectImage);
function selectImage(event) {
  const selectedImage = event.target.dataset.source;
  const instance = basicLightbox.create(`
  <img src="${selectedImage}">
`);
  instance.show();
}
