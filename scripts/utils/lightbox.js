// ===== DISPLAY MODAL =====

// Open Lightbox
async function displayLightboxImg(id) {
  await getOnePics(id);
  const modal = document.getElementById("lightbox_modal");
  modal.style.display = "flex";
}

// Open Lightbox
async function displayLightboxVideo(id) {
  await getOneVideo(id);
  const modal = document.getElementById("lightbox_modal");
  modal.style.display = "flex";
}

// Close Lightbox
function closeLightbox() {
  const modal = document.getElementById("lightbox_modal");
  modal.style.display = "none";
  clearInputsStyle();
}

// ====== Replace by Pics =====
async function getOnePics(id) {
  // Get all photographer Pics
  const data = await getPhotographerPics();

  // Get The Object of the Pics Target
  const objectData = data.find((element) => element.id === id);
  // console.log(data);

  // Set Img Div
  const picDiv = document.querySelector(".lightbox-img");
  const link = `assets/photographers-pics/${objectData.photographerId}/${objectData.image}`;
  picDiv.setAttribute("src", link);

  // Set Title
  const picTitle = document.querySelector(".lightbox-txt");
  picTitle.innerText = `${objectData.title}`;
}

// ====== Replace by Video =====
async function getOneVideo(id) {
  // Get all photographer Pics
  const data = await getPhotographerPics();

  // Get The Object of the Video Target
  const objectData = data.find((element) => element.id === id);
  //   console.log(objectData);

  // Create Video
  const videoDiv = document.querySelector(".lightbox-img");
  const link = `assets/photographers-pics/${objectData.photographerId}/${objectData.video}`;
  videoDiv.setAttribute("src", link);
  //   videoDiv.autoplay = true;
  //   videoDiv.loop = true;

  // Set Title
  const videoTitle = document.querySelector(".lightbox-txt");
  videoTitle.innerText = `${objectData.title}`;
}
