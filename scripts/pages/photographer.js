// Personnalisation de la page via l'ID

// ============ Get photographer ID in Params =============
function getIdPhotographer() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  return id;
}
// Define ID const for all function
const idPhotographer = getIdPhotographer();

// ============ HEADER =============

// ====== Get Data for (Header) ======
async function getOnePhotographer() {
  // Données récupérées dans le json
  const response = await fetch("./data/photographers.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const photographers = await response.json();
  // console.log(photographers.photographers);

  return photographers.photographers.find(
    (element) => element.id === parseInt(idPhotographer)
  );
}

// ====== Création HTML (Header) ======
async function getUserHeader() {
  const data = await getOnePhotographer();
  //   console.log("data =", data);

  // Div gauche
  const leftDiv = document.createElement("div");
  leftDiv.classList.add("leftDiv");
  // H2
  const title = document.createElement("h2");
  title.textContent = `${data.name}`;
  title.classList.add("leftDiv-title");
  // Location
  const location = document.createElement("div");
  location.innerText = `${data.city}, ${data.country}`;
  location.classList.add("leftDiv-location"); // class à changer
  // phrase
  const quote = document.createElement("div");
  quote.innerText = `${data.tagline}`;
  quote.classList.add("leftDiv-tagLine"); // class à changer
  // Info
  const info = document.createElement("div");
  info.classList.add("infoText");

  // Left Div
  leftDiv.appendChild(title);
  leftDiv.appendChild(location);
  leftDiv.appendChild(quote);

  // Div droite
  const rightDiv = document.createElement("div");
  // Img
  const img = document.createElement("img");
  img.classList.add("imgHeader");
  const picture = `assets/photographers/${data.portrait}`;
  img.setAttribute("src", picture);
  // Right Div
  rightDiv.appendChild(img);

  // On inject à gauche
  const headerLeft = document.getElementById("headerLeft");
  headerLeft.appendChild(leftDiv);
  // On inject à droite
  const headerRight = document.getElementById("headerRight");
  headerRight.appendChild(rightDiv);

  // === MODAL CONTACT ===

  // Injecter le nom dans le header du formulaire
  const photographerName = document.getElementById("modal-photographer-name");
  photographerName.innerText = `${data.name}`;
}

getUserHeader();

// ====== Bottom Right (Info) ======
async function getBottomInfo() {
  const data = await getOnePhotographer();
  // console.log(data);
  const picsData = await getPhotographerPics();
  // console.log("pics Data", picsData);

  let totalLikes = 0;

  // Calcul du nombre de likes total
  picsData.forEach((data) => {
    totalLikes = totalLikes + data.likes;
    // console.log("New Total", totalLikes);
    return totalLikes;
  });
  // Div Cible
  const bottomInfo = document.querySelector(".bottomRightInfo");
  bottomInfo.innerHTML = `
  <div class="total-likes">${totalLikes} ♥︎</div>
  <div>${data.price}€ / jour</div>
  `;
}

getBottomInfo();

// ============ photographerPics =============

// ====== Get Data for (photographerPics) ======

async function getPhotographerPics() {
  // Fetch in phototographers.json
  const response = await fetch("./data/photographers.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const photographers = await response.json();

  // Selection photographer Pics
  const photographerPics = photographers.media.filter(
    (element) => element.photographerId === parseInt(idPhotographer)
  );

  // // Popularity - Likes Number (by Default)
  photographerPics.sort((a, b) => b.likes - a.likes);
  // // Date
  // photographerPics.sort((a, b) => new Date(a.date) - new Date(b.date));
  // // Title
  // photographerPics.sort((a, b) => (a.title > b.title ? 1 : -1));
  // //

  return photographerPics;
}

// ====== Creation HTML (Pics) ======

// === Create .forEach ===
async function displayPics(photographerPics) {
  const ConteneurPics = document.querySelector(".conteneur-pics"); // Div ou l'on place les Card
  //
  // Picture Index in the Array of photographerPics
  let pictureIndex = 0;
  // console.log("all  pics =", photographerPics);

  // forEach.Object => Create 1 Card
  photographerPics.forEach((picture) => {
    const CreatePic = picsFactory(photographerPics); // All pics
    const NewPic = CreatePic.createPicsCard(pictureIndex); // Index for target one Picture
    ConteneurPics.appendChild(NewPic); // Injecte la card
    // Index of the Next Picture
    // console.log("Max Index", pictureIndex); // Stock l'index max dans le local storage ? ou autre part ?
    pictureIndex = pictureIndex + 1;
  });
}

// === Récupère les datas avant l'éxécution de la fonction ===
async function init() {
  const photographerPics = await getPhotographerPics(); // All Pics
  displayPics(photographerPics);
}
init();

// ====== Likes A Pics (without Saving) ======
async function likeOnePic(id) {
  // Attendre la création de l'HTML
  const data = await getPhotographerPics();
  // console.log(data.filter((element) => element.id === id));

  // ==== Let DOM Elements ====
  let likeDiv = document.querySelector(`#likesNumber${id}`); // emplacement du chiffre
  let likeValue = parseInt(likeDiv.innerHTML); // parse le "" => Nombre
  let likeTotalDiv = document.querySelector(`.total-likes`);
  let likeTotalValue = parseInt(likeTotalDiv.innerHTML); // parse le "" => Nombre
  let likeIcon = document.querySelector(`#heart-icon${id}`);
  //

  // Add Like
  if (likeIcon.classList.contains("fa-regular")) {
    likeIcon.classList.remove("fa-regular");
    likeIcon.classList.add("fa-solid");
    likeIcon.classList.add("like-animation");
    let newValue = likeValue + 1;
    let newTotalValue = likeTotalValue + 1;
    likeTotalDiv.innerText = `${newTotalValue} ♥︎`;
    likeDiv.innerText = newValue;
    // console.log("Add Like =>", newValue);
  } else {
    likeIcon.classList.remove("fa-solid");
    likeIcon.classList.add("fa-regular");
    likeIcon.classList.add("like-animation");
    let newValue = likeValue - 1;
    let newTotalValue = likeTotalValue - 1;
    likeTotalDiv.innerText = `${newTotalValue} ♥︎`;
    likeDiv.innerText = newValue;
    // console.log("Remove Like =>", newValue);
  }
}

// ====== Filter  ======

async function sortPhotographerPics() {
  // Fetch in phototographers.json
  const response = await fetch("./data/photographers.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const photographers = await response.json();

  // Selection photographer Pics
  const photographerPics = photographers.media.filter(
    (element) => element.photographerId === parseInt(idPhotographer)
  );

  // Filter Button
  const filterButton = document.querySelector(".dropbtn");

  // Filter Pics When Change =>
  filterButton.addEventListener("change", () => {
    // New Filter Value
    // console.log(filterButton.value);

    // Vide l'ancienne liste
    const conteneurPics = document.querySelector(".conteneur-pics");
    conteneurPics.innerHTML = "";

    // == Réaffiche en fonction du nouveau Filtre ==

    // Popularity (likes Number)
    if (filterButton.value === "likes") {
      photographerPics.sort((a, b) => b.likes - a.likes);
      displayPics(photographerPics);
    }
    // Date (new - older)
    if (filterButton.value === "date") {
      photographerPics.sort((a, b) => new Date(b.date) - new Date(a.date));
      displayPics(photographerPics);
    }
    // Title (Abc)
    if (filterButton.value === "name") {
      photographerPics.sort((a, b) => (a.title > b.title ? 1 : -1));
      displayPics(photographerPics);
    }
  });
}

sortPhotographerPics();

// ====== Modal LightBox for Pics  ======
