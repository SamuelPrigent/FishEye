// ==== Display Lightbox ====

// Open Lightbox // via Index
async function displayLightboxMedia(index) {
  await getMedia(index);
  const modal = document.getElementById("lightbox_modal");
  modal.style.display = "flex";
}

// Close Lightbox
function closeLightbox() {
  const modal = document.getElementById("lightbox_modal");
  modal.style.display = "none";
}

// ===== KEYUP Lightbox Navigation =====

// Escape => Close
document.addEventListener("keyup", (e) => {
  e.preventDefault;
  if (e.key === "Escape") {
    // console.log("Echap");
    closeLightbox();
  }
});

// Listen Arrow => Previous / Next // Utilisable seulement lorsque lightbox ouverte ???
document.addEventListener("keyup", (e) => {
  switch (e.keyCode) {
    case 37:
      // Previous
      const index1 = parseInt(localStorage.getItem("lightbox-index"));
      let newIndex1 = index1 - 1;
      getMedia(newIndex1);
      break;
    case 39:
      // Next
      const index2 = parseInt(localStorage.getItem("lightbox-index"));
      let newIndex2 = index2 + 1;
      getMedia(newIndex2);
      break;
  }
});

// ===== CLICK Lightbox Navigation =====

// Get Previous Source + Left Arrow
document
  .querySelector(".lightbox-arrow-left")
  .addEventListener("click", (e) => {
    // Previous
    const index1 = parseInt(localStorage.getItem("lightbox-index"));
    let newIndex1 = index1 - 1;
    getMedia(newIndex1);
  });

// Get Next Source + Right Arrow
document
  .querySelector(".lightbox-arrow-right")
  .addEventListener("click", (e) => {
    // Next
    const index2 = parseInt(localStorage.getItem("lightbox-index"));
    let newIndex2 = index2 + 1;
    getMedia(newIndex2);
  });

// ====== Get Lightbox Media (img / video) after clic =====
async function getMedia(index) {
  const data = await getPhotographerPics(); // GetPhotographersPics => puis on target via l'index
  console.log("Pic Index =", index);
  localStorage.setItem("lightbox-index", index); // Stock in local storage l'index

  // Image or Video ?
  //   let type1 = data[index].image;
  //   let type2 = data[index].video;
  //   console.log("type1", type1);
  //   console.log("type2", type2);

  if (data[index].image) {
    // console.log("img");
    const mediaDiv = document.querySelector("#lightbox-media");
    mediaDiv.innerHTML = "";
    const link = `assets/photographers-pics/${data[index].photographerId}/${data[index].image}`;
    // Create Img
    const newPic = document.createElement("img");
    newPic.setAttribute("src", link);
    newPic.classList.add("createdMedia"); // Css
    mediaDiv.appendChild(newPic);
  }
  if (data[index].video) {
    // console.log("video");
    const mediaDiv = document.querySelector("#lightbox-media");
    mediaDiv.innerHTML = "";
    const link = `assets/photographers-pics/${data[index].photographerId}/${data[index].video}`;
    // Create Video
    const newVideo = document.createElement("video");
    newVideo.setAttribute("src", link);
    newVideo.autoplay = true;
    newVideo.loop = true;
    newVideo.controls = true;
    newVideo.classList.add("createdMedia"); // Css
    mediaDiv.appendChild(newVideo);
  }

  // Set Title
  const mediaTitle = document.querySelector(".lightbox-text-media");
  mediaTitle.innerText = `${data[index].title}`;
}

// ======== SLIDE Lightbox ========
async function lightboxIndex() {
  const data = await getPhotographerPics();
  document.querySelectorAll(".imgPicsList").forEach((link) =>
    link.addEventListener("click", (e) => {
      e.preventDefault;

      // Listes des Object Images
      console.log("Object List =", data);

      // Listes des liens Img
      //   const picsList = Array.from(document.querySelectorAll(".imgPicsList")); // liste des liens (ou img)
      //   const gallerySrc = picsList.map((picsList) =>
      //     picsList.getAttribute("src")
      //   );
      //   console.log("Img list =", gallerySrc);

      // Listes des Titres Img
      //   const textList = Array.from(document.querySelectorAll(".infoPics-Text")); // liste des liens (ou img)
      //   const galleryText = textList.map((textList) => textList.innerHTML);
      //   console.log("Title list =", galleryText);

      // Mettre en params l'ID de la photo cliqué ?
    })
  );
}

lightboxIndex();
