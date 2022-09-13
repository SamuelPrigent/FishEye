//
async function getPhotographers() {
  // Données récupérées dans le json
  const response = await fetch("./data/photographers.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const photographers = await response.json();
  // console.log(photographers.photographers);

  return photographers;
}

// Affiche les Card Photographes sous forme le liste
async function displayData(photographers) {
  // conteneur des card
  const photographersSection = document.querySelector(".photographer_section");
  // 1 Objet => 1 Card
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

// Récupère les datas pour éxécuter la fonction
async function init() {
  const { photographers } = await getPhotographers();
  displayData(photographers);
}
init();
