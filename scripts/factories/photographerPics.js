// Function Création de Card
function picsFactory(data) {
  //
  console.log(data);
  // Liens Media vers Images ou Vidéo
  const link = `assets/photographers-pics/${data.photographerId}/${data.image}`;

  //   if (data.image.indexOf(".jpg") >= 0) {
  //     const picture = `assets/photographers-pics/${data.photographerId}/${data.image}`;
  //   }
  //   if (data.image.indexOf(".mp4") >= 0) {
  //     const picture = `assets/photographers-pics/${data.photographerId}/${data.image}`;
  //   }

  // Création de l'html
  function createPicsCard() {
    // Global Div
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("PicsCard");
    // Media
    if (data.image) {
      const img = document.createElement("img");
      const link = `assets/photographers-pics/${data.photographerId}/${data.image}`;
      img.setAttribute("src", link);
      img.classList.add("imgPicsList");
      mainDiv.appendChild(img);
    }
    if (data.video) {
      const video = document.createElement("mp4");
      const link = `assets/photographers-pics/${data.photographerId}/${data.video}`;
      video.setAttribute("src", link);
      video.classList.add("imgPicsList");
      mainDiv.appendChild(video);
    }
    // Info div (title + likes)
    const info = document.createElement("div");
    info.classList.add("infoPics");

    // Info Left
    const infoLeft = document.createElement("div");
    // Info right
    const infoRight = document.createElement("div");
    infoRight.classList.add("infoPics-right");

    // Titre
    const title = document.createElement("div");
    title.innerText = `${data.title}`;
    // Likes number
    const likesNumber = document.createElement("div");
    likesNumber.innerText = `${data.likes}`;
    // Likes Icon
    const likesIcon = document.createElement("div");
    likesIcon.innerText = "♥︎";

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
