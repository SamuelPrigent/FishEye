// Function Création de Card
function picsFactory(pictures) {
  //
  // All Picture
  // console.log("All pics", pictures);
  //

  // Création de l'html
  function createPicsCard(index) {
    // console.log("index of the pic",index);
    // Global Div
    const mainDiv = document.createElement("a");
    mainDiv.classList.add("PicsCard");

    if (pictures[index].image) {
      const img = document.createElement("img");
      const link = `assets/photographers-pics/${pictures[index].photographerId}/${pictures[index].image}`;
      img.setAttribute("src", link);
      img.classList.add("imgPicsList");
      img.setAttribute("alt", `${pictures[index].title}`);
      img.setAttribute("lang", "en");
      mainDiv.appendChild(img);
      // TabIndex Route
      let indexCard = index + 4;
      img.setAttribute("tabindex", indexCard);
      // === Click to Open LightBox ===
      img.setAttribute("onclick", `displayLightboxMedia(${index})`);
      // ID unique
      img.setAttribute(
        "id",
        `${pictures[index].photographerId}-${pictures[index].id}`
      );
    }

    if (pictures[index].video) {
      const video = document.createElement("video");
      const link = `assets/photographers-pics/${pictures[index].photographerId}/${pictures[index].video}`;
      video.setAttribute("src", link);
      video.setAttribute("aria-label", `video, ${pictures[index].title}`);
      video.classList.add("imgPicsList");
      video.setAttribute("alt", `${pictures[index].title}`);
      video.setAttribute("lang", "angl");
      mainDiv.appendChild(video);
      // Auto play vidéo
      video.autoplay = true;
      video.loop = true;
      // Add VIDEO ICON (top left)
      const centerIcon = document.createElement("div");
      centerIcon.classList.add("video-icon-position");
      const videoIcon = document.createElement("div");
      videoIcon.classList.add("fa-solid");
      videoIcon.classList.add("fa-video");
      mainDiv.appendChild(centerIcon);
      centerIcon.appendChild(videoIcon);
      // TabIndex Route
      let indexCard = index + 4;
      video.setAttribute("tabindex", indexCard);
      // === Click to Open LightBox ===
      video.setAttribute("onclick", `displayLightboxMedia(${index})`);
      // ID unique
      video.setAttribute(
        "id",
        `${pictures[index].photographerId}-${pictures[index].id}`
      );
    }

    // Info div (title + likes)
    const info = document.createElement("div");
    info.classList.add("infoPics");

    // Info Left
    const infoLeft = document.createElement("div");
    // Info right
    const infoRight = document.createElement("div");
    infoRight.classList.add("infoPicsRight");
    infoRight.setAttribute("id", `like-${pictures[index].id}`); // id unique
    infoRight.setAttribute("onclick", `likeOnePic(${pictures[index].id})`); // Call like(id)

    // Titre
    const title = document.createElement("div");
    title.innerText = `${pictures[index].title}`;
    title.classList.add("infoPics-Text"); // pour cibler le texte via Query Selector All

    // Likes number
    const likesNumber = document.createElement("div");
    likesNumber.innerText = `${pictures[index].likes}`;
    likesNumber.classList.add("likesNumber");
    likesNumber.setAttribute("id", `likesNumber${pictures[index].id}`); // ID Unique - likesNumber

    // Likes Icon
    const likesIcon = document.createElement("div");
    likesIcon.classList.add("fa-regular");
    likesIcon.classList.add("fa-heart");
    likesIcon.classList.add("heart-icon");
    likesIcon.setAttribute("id", `heart-icon${pictures[index].id}`); // ID Unique - Heart Icon

    // Structure
    info.appendChild(infoLeft);
    info.appendChild(infoRight);

    infoLeft.appendChild(title);
    infoRight.appendChild(likesNumber);
    infoRight.appendChild(likesIcon);

    mainDiv.appendChild(info);

    return mainDiv;
  }
  return { createPicsCard };
}
