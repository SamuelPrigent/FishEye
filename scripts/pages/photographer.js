// Personnalisation de la page via l'ID

//Get ID of One Photographer
function getIdPhotographer() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  return id;
}

// const idPhotographer = getIdPhotographer();

// Get Data of One Photographer
async function getOnePhotographer() {
  // Fetch dans phototographers.json
  const response = await fetch("./data/photographers.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  // const photographers = (await getData()).photographers; // méthode via utills ??

  // (response + id ) for return
  const photographers = await response.json();
  const idPhotographer = getIdPhotographer();

  return photographers.photographers.find(
    (element) => element.id === parseInt(idPhotographer)
  );
}

// Création de l'html
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

// Get Photographers Pics by PhotographerId in Media
