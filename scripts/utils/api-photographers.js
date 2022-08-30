//
async function fetchData() {
  // récupère les informations des photographes dans phototographers.json
  const response = await fetch("./data/photographers.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const photographers = await response.json();
  const dataPhotographers = [...photographers.photographers];
  const dataMedias = [...photographers.media];

  return {
    photographers: dataPhotographers,
    media: dataMedias,
  };
}
