// ===== DISPLAY MODAL =====

// Open Lightbox
async function displayLightboxMedia(id) {
  await getMedia(id);
  const modal = document.getElementById("lightbox_modal3");
  modal.style.display = "flex";
}

// Close Lightbox
function closeLightbox3() {
  const modal = document.getElementById("lightbox_modal3");
  modal.style.display = "none";
}

// ====== Get Media (img / video) =====
async function getMedia(id) {
  const data = await getPhotographerPics(); // Get All Photographers Pics
  const objectData = data.find((element) => element.id === id); // Pic selected
  //   console.log(objectData);

  if (objectData.image) {
    // console.log("img");
    const mediaDiv = document.querySelector("#lightbox-media");
    mediaDiv.innerHTML = "";
    const link = `assets/photographers-pics/${objectData.photographerId}/${objectData.image}`;
    // Create Img
    const newPic = document.createElement("img");
    newPic.setAttribute("src", link);
    newPic.classList.add("createdMedia"); // Css
    mediaDiv.appendChild(newPic);
  }
  if (objectData.video) {
    // console.log("video");
    const mediaDiv = document.querySelector("#lightbox-media");
    mediaDiv.innerHTML = "";
    const link = `assets/photographers-pics/${objectData.photographerId}/${objectData.video}`;
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
  mediaTitle.innerText = `${objectData.title}`;
}
