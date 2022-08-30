// Function Création de Card
function picsFactory(data) {
  //
  console.log("picsFactory Test");
  // Liens vers l'images
  const picture = `assets/photographers/${data.name}`;

  // Création de l'html
  function createPicsCard() {
    // Global Div => article ou "a" ?
    const mainDiv = document.createElement("div");
    mainDiv.innerText = "TEXT";

    console.log(" createPicsCard TEST");

    return mainDiv;
  }
  return createPicsCard();
}
