// ==== Display Lightbox ====

// Open Lightbox // via Index
async function displayLightboxMedia(index) {
  await getMedia(index);
  const modal = document.getElementById("lightbox_modal");
  modal.style.display = "flex";
}

// ==== Enter in 2 step ====

// Focus => Get Media
async function displayLightboxMediaKeypress(index) {
  await getMedia(index);
}

// Enter => Open Lightbox
document.addEventListener("keyup", (e) => {
  e.preventDefault;
  switch (e.keyCode) {
    case 13:
      // console.log("enter");
      const modal = document.getElementById("lightbox_modal");
      modal.style.display = "flex";
      document.activeElement.blur(); // cancel focus still execute focus and keyup
      break;
  }
});

// Close Lightbox
function closeLightbox() {
  const modal = document.getElementById("lightbox_modal");
  modal.style.display = "none";
}

// ===== KEYUP Lightbox Navigation =====

// Escape : Close
document.addEventListener("keyup", (e) => {
  e.preventDefault;
  if (e.key === "Escape") {
    // console.log("Echap");
    closeLightbox();
  }
});

// Left : Previous / Right : Next
document.addEventListener("keyup", (e) => {
  // Dom elements // Var
  const arrowLeft = document.querySelector(".lightbox-arrow-left");
  const arrowRight = document.querySelector(".lightbox-arrow-right");
  const index = parseInt(localStorage.getItem("lightbox-index"));
  const indexMax = parseInt(localStorage.getItem("lightbox-indexMax"));
  let newIndexPrevious = index - 1;
  let newIndexNext = index + 1;

  switch (e.keyCode) {
    case 37:
      // Get Previous Media
      if (index > 0) {
        getMedia(newIndexPrevious);
      }
      // Opacity 0 - Left Arrow / if First picture
      if (newIndexPrevious == 0) {
        arrowLeft.classList.add("lightbox-arrow-none");
      }
      // Opacity 1 - Right Arrow / if not Last picture
      if (newIndexPrevious < indexMax) {
        arrowRight.classList.remove("lightbox-arrow-none");
      }

      break;
    case 39:
      // Get Next Media
      if (index < indexMax) {
        getMedia(newIndexNext);
      }
      // Opacity 0 - Right Arrow - if Last picture
      if (newIndexNext == indexMax) {
        arrowRight.classList.add("lightbox-arrow-none");
      }
      // Opacity 1 - Left Arrow if not First picture
      if (newIndexNext > 0) {
        arrowLeft.classList.remove("lightbox-arrow-none");
      }
      break;
  }
});

// ===== CLICK Lightbox Navigation =====

// Get Previous Source + Left Arrow
document
  .querySelector(".lightbox-arrow-left")
  .addEventListener("click", (e) => {
    // Dom elements // Var
    const arrowLeft = document.querySelector(".lightbox-arrow-left");
    const arrowRight = document.querySelector(".lightbox-arrow-right");
    const index = parseInt(localStorage.getItem("lightbox-index"));
    const indexMax = parseInt(localStorage.getItem("lightbox-indexMax"));
    let newIndexPrevious = index - 1;

    // Previous
    if (index > 0) {
      getMedia(newIndexPrevious);
    }
    // Opacity 0 - Left Arrow / if First picture
    if (newIndexPrevious == 0) {
      arrowLeft.classList.add("lightbox-arrow-none");
    }
    // Opacity 1 - Right Arrow / if not Last picture
    if (newIndexPrevious < indexMax) {
      arrowRight.classList.remove("lightbox-arrow-none");
    }
  });

// Get Next Source + Right Arrow
document
  .querySelector(".lightbox-arrow-right")
  .addEventListener("click", (e) => {
    // Dom elements // Var
    const arrowLeft = document.querySelector(".lightbox-arrow-left");
    const arrowRight = document.querySelector(".lightbox-arrow-right");
    const index = parseInt(localStorage.getItem("lightbox-index"));
    const indexMax = parseInt(localStorage.getItem("lightbox-indexMax"));
    let newIndexNext = index + 1;

    // Next
    if (index < indexMax) {
      getMedia(newIndexNext);
    }
    // Opacity 0 - Right Arrow - if Last picture
    if (newIndexNext == indexMax) {
      arrowRight.classList.add("lightbox-arrow-none");
    }
    // Opacity 1 - Left Arrow if not First picture
    if (newIndexNext > 0) {
      arrowLeft.classList.remove("lightbox-arrow-none");
    }
  });

// ====== Get Lightbox Media (img / video) after clic =====
async function getMedia(index) {
  const data = await getPhotographerPics(); // AllPics => puis on target via index

  // === Refresh Index List by Filter ===
  const filterButton = document.querySelector(".dropbtn");

  // Popularity (likes Number)
  if (filterButton.value === "likes") {
    data.sort((a, b) => b.likes - a.likes);
  }
  // Date (new - older)
  if (filterButton.value === "date") {
    data.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  // Title (Abc)
  if (filterButton.value === "name") {
    data.sort((a, b) => (a.title > b.title ? 1 : -1));
  }

  //   console.log("Pic Index =", index);
  localStorage.setItem("lightbox-index", index); // Stock in local storage l'index

  // === Lightbox Nav Arrow Display ===
  const arrowLeft = document.querySelector(".lightbox-arrow-left");
  const arrowRight = document.querySelector(".lightbox-arrow-right");
  const indexMax = parseInt(localStorage.getItem("lightbox-indexMax"));

  // Left arrow
  if (index == 0) {
    arrowLeft.classList.add("lightbox-arrow-none");
  }
  if (index > 0) {
    arrowLeft.classList.remove("lightbox-arrow-none");
  }
  // Right arrow
  if (index == indexMax) {
    arrowRight.classList.add("lightbox-arrow-none");
  }
  if (index < indexMax) {
    arrowRight.classList.remove("lightbox-arrow-none");
  }

  // ===== GET MEDIA Code =====

  if (data[index].image) {
    const mediaDiv = document.querySelector("#lightbox-media");
    mediaDiv.innerHTML = "";
    const link = `assets/photographers-pics/${data[index].photographerId}/${data[index].image}`;
    // Create Img
    const newPic = document.createElement("img");
    newPic.setAttribute("src", link);
    newPic.setAttribute("alt", `${data[index].title}`);
    newPic.classList.add("createdMedia");
    mediaDiv.appendChild(newPic);
  }
  if (data[index].video) {
    const mediaDiv = document.querySelector("#lightbox-media");
    mediaDiv.innerHTML = "";
    const link = `assets/photographers-pics/${data[index].photographerId}/${data[index].video}`;
    // Create Video
    const newVideo = document.createElement("video");
    newVideo.setAttribute("src", link);
    newVideo.setAttribute("alt", `${data[index].title}`);
    newVideo.autoplay = true;
    newVideo.loop = true;
    newVideo.controls = true;
    newVideo.classList.add("createdMedia");
    mediaDiv.appendChild(newVideo);
  }

  // Set Title
  const mediaTitle = document.querySelector(".lightbox-text-media");
  mediaTitle.innerText = `${data[index].title}`;
}
