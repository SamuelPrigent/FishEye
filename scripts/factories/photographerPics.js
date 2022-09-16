// Function Création de Card
function picsFactory(data) {
  //
  // console.log(data);
  //
  // Création de l'html
  function createPicsCard() {
    // Global Div
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("PicsCard");
    mainDiv.setAttribute("id", `${data.photographerId}-${data.id}`); // création d'ID unique
    //
    if (data.image) {
      const img = document.createElement("img");
      const link = `assets/photographers-pics/${data.photographerId}/${data.image}`;
      img.setAttribute("src", link);
      img.classList.add("imgPicsList");
      mainDiv.appendChild(img);
      // === Click to Open LightBox ===
      // img.setAttribute("onclick", `displayLightboxImg(${data.id})`); // Call lightbox en fonction de l'id
      img.setAttribute("onclick", `displayLightboxMedia(${data.id})`); // Call lightbox en fonction de l'id
    }
    if (data.video) {
      const video = document.createElement("video");
      const link = `assets/photographers-pics/${data.photographerId}/${data.video}`;
      video.setAttribute("src", link);
      video.classList.add("imgPicsList");
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
      // === Click to Open LightBox ===
      // video.setAttribute("onclick", `displayLightboxVideo(${data.id})`); // Call lightbox en fonction de l'id
      video.setAttribute("onclick", `displayLightboxMedia(${data.id})`); // Call lightbox en fonction de l'id
    }

    // Info div (title + likes)
    const info = document.createElement("div");
    info.classList.add("infoPics");

    // Info Left
    const infoLeft = document.createElement("div");
    // Info right
    const infoRight = document.createElement("div");
    infoRight.classList.add("infoPicsRight");
    infoRight.setAttribute("id", `like-${data.id}`); // id unique ?
    infoRight.setAttribute("onclick", `likeOnePic(${data.id})`); // Call like(id) avec paramètre personnalisé

    // Titre
    const title = document.createElement("div");
    title.innerText = `${data.title}`;
    // Likes number
    const likesNumber = document.createElement("div");
    likesNumber.innerText = `${data.likes}`;
    likesNumber.classList.add("likesNumber");
    likesNumber.setAttribute("id", `likesNumber${data.id}`); // ID Unique - likesNumber

    // Likes Icon
    const likesIcon = document.createElement("div");
    likesIcon.classList.add("fa-regular");
    likesIcon.classList.add("fa-heart");
    likesIcon.classList.add("heart-icon");
    likesIcon.setAttribute("id", `heart-icon${data.id}`); // ID Unique - Heart Icon

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
