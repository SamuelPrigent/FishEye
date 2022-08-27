// Function Création de Card
function photographerFactory(data) {
  const { name, portrait } = data;

  // Liens vers l'images
  const picture = `assets/photographers/${portrait}`;

  // Création de l'html
  function getUserCardDOM() {
    // Global Div => article ou "a" ?
    const article = document.createElement("a");
    article.setAttribute("href", `photographer.html?id=${data.id}`); // Liens href array id produits pour nommer url
    // Img
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    // H2
    const h2 = document.createElement("h2");
    h2.textContent = name;
    // Location
    const location = document.createElement("div");
    location.innerText = `${data.city}, ${data.country}`;
    location.classList.add("locationText");
    // phrase
    const quote = document.createElement("div");
    quote.innerText = `${data.tagline}`;
    quote.classList.add("taglineText");
    // price
    const price = document.createElement("div");
    price.innerText = `${data.price}€/jour`;
    price.classList.add("priceText");
    // Info
    const info = document.createElement("div");
    info.classList.add("infoText");

    // In Article
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(info);
    // In Info
    info.appendChild(location);
    info.appendChild(quote);
    info.appendChild(price);

    return article;
  }
  return { name, picture, getUserCardDOM };
}
