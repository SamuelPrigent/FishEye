//
async function getData() {
  // récupère les informations des photographes dans phototographers.json
  let url = "./data/photographers.json";
  let response = await fetch(url);
  let data = await response.json();

  const dataPhotographers = [...data.photographers];
  const dataMedias = [...data.media];

  return {
    photographers: dataPhotographers,
    media: dataMedias,
  };
}
