async function getPhotographers() {
  // Données récupérées dans le json
  try {
    const response = await fetch("./data/photographers.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const photographers = await response.json();
    // console.log("Photographers =", photographers);

    return photographers;
  } catch (error) {
    console.error(error);
  }

  // Retourne le tableau photographers
  return {
    photographers: [...photographers],
  };
}

async function displayData(photographers) {
  // div ou l'on injecte les card
  const photographersSection = document.querySelector(".photographer_section");

  // forEach Objet array [photographer] => 1 Card
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  try {
    // Récupère les datas des photographes et les affiche
    const { photographers } = await getPhotographers();
    displayData(photographers);
  } catch (error) {
    console.error(error);
  }
}
init();
