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

// // === (TEST TEST TEST TEST ===
// async function getPhotographers() {
//   // Données récupérées dans le json
//   const response = await fetch("./data/photographers.json", {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   });

//   const photographers = await response.json();
//   // console.log(photographers.photographers);

//   return photographers;
// }

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
}

getUserHeader();

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
  const photographerPics = photographers.media.filter(
    (element) => element.photographerId === parseInt(idPhotographer)
  );

  // Listes des photos du Photographe
  console.log(photographerPics);

  return photographerPics;
}

// ====== Creation HTML (Pics) ======

async function displayPics(photographer) {
  // Div ou l'on place les Card
  const picsSection = document.querySelector(".photographer-pics");

  // Each Object => 1 Card
  photographer.forEach((data) => {
    const picsModel = picsFactory(data); //
    const photographerPics = picsModel.createPicsCard(); //
    // injecte la card
    picsSection.appendChild(photographerPics);
  });
}

// Récupère les datas pour éxécuter la fonction
async function init() {
  const { photographers } = await getPhotographerPics(); // data via pic ou OnePhotographers
  displayPics(photographers);
}
init();
