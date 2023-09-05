import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const listEl = document.querySelector(".gallery");

galleryItems.forEach((item) => {
    const listItemEl = document.createElement("li");
    listItemEl.classList.add("gallery__item");
    listItemEl.innerHTML = `<a class ="gallery__link" href="${item.original}"  >
    <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.origina}"
        alt="${item.description}"
    />
    </a>`;
    listEl.append(listItemEl)
});
   
let lightboxInstance = null; 

listEl.addEventListener("click", openImageinLightbox);

function openImageinLightbox(event) {
    const clickedOn = event.target;
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    lightboxInstance = basicLightbox.create(
        `<img width="1400" height="900" src="${clickedOn.src}" />`
    );

    lightboxInstance.show();

    document.addEventListener("keydown", closeImageinLightbox);
}

function closeImageinLightbox(event) {
    if (event.key === "Escape" && lightboxInstance) {
        lightboxInstance.close();
        lightboxInstance = null;
    }
}
