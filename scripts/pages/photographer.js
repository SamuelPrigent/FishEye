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
  <div>${totalLikes} ♥︎</div>
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
async function displayPics(photographer) {
  // Div ou l'on place les Card
  const picsSection = document.querySelector(".conteneur-pics");

  // Each Object => 1 Card
  photographer.forEach((data) => {
    const picsModel = picsFactory(data); //
    const photographerPics = picsModel.createPicsCard(); //
    // injecte la card
    picsSection.appendChild(photographerPics);
  });
}

// === Récupère les datas avant l'éxécution de la fonction ===
async function init() {
  const photographerPics = await getPhotographerPics(); // data via pic ou OnePhotographers
  displayPics(photographerPics);
  // likeOnePic();
}
init();

// ====== Likes A Pics (without Saving) ======
async function likeOnePic() {
  // Attendre la création de l'HTML
  await getPhotographerPics();
  let likesButton = document.querySelector(".infoPicsRight");

  // // ==== Like / Unlike ====
  // likesButton.addEventListener("click", () => {
  //   let likeDiv = document.querySelector(".likesNumber"); // emplacement du chiffre
  //   let likeValue = parseInt(likeDiv.innerHTML); // parse le "" => Nombre
  //   const likeIcon = document.querySelector(".heart-icon");

  //   // Add Like
  //   if (likeIcon.classList.contains("fa-regular")) {
  //     likeIcon.classList.remove("fa-regular");
  //     likeIcon.classList.add("fa-solid");
  //     likeIcon.classList.add("like-animation");
  //     let newValue = likeValue + 1;
  //     likeDiv.innerText = newValue;
  //     // console.log(newValue);
  //   }
  //   // Remove Like
  //   else {
  //     likeIcon.classList.remove("fa-solid");
  //     likeIcon.classList.add("fa-regular");
  //     likeIcon.classList.add("like-animation");
  //     let newValue = likeValue - 1;
  //     likeDiv.innerText = newValue;
  //     // console.log(newValue);
  //   }
  // });

  document.querySelectorAll(".infoPicsRight").forEach((elem) =>
    elem.addEventListener("click", () => {
      // ==== Like / Unlike ====
      // console.log(elem); // Elem target chaque element

      let likeDivTest = document.querySelectorAll(".likesNumber"); // emplacement du chiffre
      console.log(likeDivTest);

      let likeDiv = document.querySelector(".likesNumber"); // emplacement du chiffre
      let likeValue = parseInt(likeDiv.innerHTML); // parse le "" => Nombre
      let likeIcon = document.querySelector(".heart-icon");

      // Add Like
      if (likeIcon.classList.contains("fa-regular")) {
        likeIcon.classList.remove("fa-regular");
        likeIcon.classList.add("fa-solid");
        likeIcon.classList.add("like-animation");
        let newValue = likeValue + 1;
        likeDiv.innerText = newValue;
        // console.log(newValue);
      }
      // Remove Like
      else {
        likeIcon.classList.remove("fa-solid");
        likeIcon.classList.add("fa-regular");
        likeIcon.classList.add("like-animation");
        let newValue = likeValue - 1;
        likeDiv.innerText = newValue;
        // console.log(newValue);
      }
    })
  );
}

likeOnePic();

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
      likeOnePic(); // Recall de la fonction like
    }
    // Date (new - older)
    if (filterButton.value === "date") {
      photographerPics.sort((a, b) => new Date(b.date) - new Date(a.date));
      displayPics(photographerPics);
      likeOnePic(); // Recall de la fonction like
    }
    // Title (Abc)
    if (filterButton.value === "name") {
      photographerPics.sort((a, b) => (a.title > b.title ? 1 : -1));
      displayPics(photographerPics);
      likeOnePic(); // Recall de la fonction like
    }
  });
}

sortPhotographerPics();

// ====== Modal LightBox for Pics  ======

//

// ====== Modal Contact ======
