// Open Modal
async function displayLightbox(id) {
  await getOnePics(id);
  const modal = document.getElementById("lightbox_modal");
  modal.style.display = "flex";
}

// Close Modal
function closeLightbox() {
  const modal = document.getElementById("lightbox_modal");
  modal.style.display = "none";
  clearInputsStyle();
}

// Display Pics Info
async function getOnePics(id) {
  // Get all photographer Pics
  const data = await getPhotographerPics();
  //   console.log("data =", data);

  // Get The Object of the Pics Target
  const objectData = data.find((element) => element.id === id);
  //
  console.log(objectData);

  // Set Img Div
  const picDiv = document.querySelector(".lightbox-img");
  const link = `assets/photographers-pics/${objectData.photographerId}/${objectData.image}`;
  picDiv.setAttribute("src", link);

  //   // Create Video Div (TO DO)
  //   const videoDiv = document.querySelector(".lightbox-video");
  //   const linkVideo = `assets/photographers-pics/${objectData.photographerId}/${objectData.image}`;
  //   picDiv.setAttribute("src", linkVideo);

  // Set Title
  const picTitle = document.querySelector(".lightbox-txt");
  picTitle.innerText = `${objectData.title}`;
}
