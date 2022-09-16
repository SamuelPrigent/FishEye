// ===== DISPLAY MODAL =====

// Open Lightbox
async function displayLightboxImg(id) {
  await getOnePics(id);
  const modal = document.getElementById("lightbox_modal");
  modal.style.display = "flex";
}

// Close Lightbox
function closeLightbox() {
  const modal = document.getElementById("lightbox_modal");
  modal.style.display = "none";
}

// Open Lightbox
async function displayLightboxVideo(id) {
  await getOneVideo(id);
  const modal = document.getElementById("lightbox_modal2");
  modal.style.display = "flex";
}

// Close Lightbox
function closeLightbox2() {
  const modal = document.getElementById("lightbox_modal2");
  modal.style.display = "none";
}

// ====== Replace by Pics =====
async function getOnePics(id) {
  // Get all photographer Pics
  const data = await getPhotographerPics();
  const objectData = data.find((element) => element.id === id);
  // console.log(data);

  // Get Img
  const link = `assets/photographers-pics/${objectData.photographerId}/${objectData.image}`;
  const picDiv = document.querySelector("#lightbox-img");
  picDiv.setAttribute("src", link);

  // Set Title
  const picTitle = document.querySelector(".lightbox-txt");
  picTitle.innerText = `${objectData.title}`;
}

// ====== Replace by Video =====
async function getOneVideo(id) {
  const data = await getPhotographerPics(); // Photographers Pics
  const objectData = data.find((element) => element.id === id); // The Pic
  //   console.log(objectData);

  // Get Video
  const link = `assets/photographers-pics/${objectData.photographerId}/${objectData.video}`;
  const videoDiv = document.querySelector("#lightbox-video");
  videoDiv.setAttribute("src", link);
  videoDiv.autoplay = true;
  videoDiv.loop = true;
  videoDiv.controls = true;

  // Set Title
  const videoTitle = document.querySelector(".lightbox-text-video");
  videoTitle.innerText = `${objectData.title}`;
}

// =================
// Open TESTTTT
async function displayLightboxMedia(id) {
  await getMedia(id);
  const modal = document.getElementById("lightbox_modal3");
  modal.style.display = "flex";
}

// Close TESTTTT
function closeLightbox3() {
  const modal = document.getElementById("lightbox_modal3");
  modal.style.display = "none";
}
// =================

// ====== Get Media (img / video) =====
async function getMedia(id) {
  const data = await getPhotographerPics(); // Get All Photographers Pics
  const objectData = data.find((element) => element.id === id); // Pic selected
  console.log(objectData);

  if (objectData.image) {
    console.log("img");
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
    console.log("video");
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
