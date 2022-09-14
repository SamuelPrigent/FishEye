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

  // Get The Object of the Pics Target
  const objectData = data.find((element) => element.id === id);
  // console.log(data);

  // Get Img
  const picDiv = document.querySelector("#lightbox-img");
  const link = `assets/photographers-pics/${objectData.photographerId}/${objectData.image}`;
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
