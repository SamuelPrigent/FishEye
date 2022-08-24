// Function Création => 1 card Photographe
function photographerFactory(data) {
  const { name, portrait } = data;

  // Liens vers l'images
  const picture = `assets/photographers/${portrait}`;

  // Création de l'html
  function getUserCardDOM() {
    const article = document.createElement("article"); // div globale
    const img = document.createElement("img"); // div img
    img.setAttribute("src", picture); // attribue liens
    const h2 = document.createElement("h2"); // div titre
    h2.textContent = name; // attribue le titre
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
    //
    const info = document.createElement("div");
    info.classList.add("infoText");

    console.log(data);
    // Put div in Article
    article.appendChild(img);
    article.appendChild(h2);
    // info
    article.appendChild(info);
    // info text
    info.appendChild(location);
    info.appendChild(quote);
    info.appendChild(price);

    return article;
  }
  return { name, picture, getUserCardDOM };
}
