// === MODAL 1 / Contact ===

// Open Modal
function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
}

// Close Modal
function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  clearInputsStyle();
}

// === MODAL 2 / Confirmation ===

// Open Modal
function displayModal2() {
  const modal = document.getElementById("contact_modal2");
  modal.style.display = "block";
}

// Close Modal
function closeModal2() {
  const modal = document.getElementById("contact_modal2");
  modal.style.display = "none";
  clearInputsStyle();
}

// Close Confirmation with click out the box
const ClickOut = document
  .getElementById("contact_modal2")
  .addEventListener("click", function (e) {
    e.preventDefault();
    closeModal2();
  });

// Escape : Close
document.addEventListener("keyup", (e) => {
  e.preventDefault;
  if (e.key === "Escape") {
    // console.log("Echap");
    closeModal2();
  }
});

// Const de vérification d'inputs
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

// DOM Elements Input value
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const msgText = document.getElementById("msgText");

// Let for Form Validation
let firstValidationData = false;
let lastValidationData = false;
let emailValidationData = false;
let msgTextValidationData = false;

// ==== CHECK FORMS ====

// == Check => ON CHANGE ==

// Check Prenom
const checkFirst = document
  .getElementById("first")
  .addEventListener("change", function (e) {
    e.preventDefault();

    // Error regex
    if (!first.value.match(regex)) {
      first.parentElement.setAttribute("data-error-visible", "true");
      first.parentElement.setAttribute(
        "data-error",
        "Les caractères spéciaux ne sont pas autorisés."
      );
      firstValidationData = false;
    }

    if (!first.value) {
      first.parentElement.setAttribute("data-error-visible", "true");
      first.parentElement.setAttribute(
        "data-error",
        "Veuillez renseigner un prenom."
      );
      firstValidationData = false;
    }

    if (first.value.trim().length == 1) {
      first.parentElement.setAttribute("data-error-visible", "true");
      first.parentElement.setAttribute(
        "data-error",
        "Vous devez entrer 2 caractères ou plus."
      );
      firstValidationData = false;
    }

    if (
      first.value &&
      first.value.trim().length > 1 &&
      first.value.match(regex)
    ) {
      first.parentElement.setAttribute("data-error", "");
      first.parentElement.setAttribute("data-error-visible", "false");
      first.classList.add("goodBorder");
      firstValidationData = true;
    }
  });

// Check Nom
const checkLast = document
  .getElementById("last")
  .addEventListener("change", function (e) {
    e.preventDefault();

    // Error regex
    if (!last.value.match(regex)) {
      last.parentElement.setAttribute("data-error-visible", "true");
      last.parentElement.setAttribute(
        "data-error",
        "Les caractères spéciaux ne sont pas autorisés."
      );
      lastValidationData = false;
    }

    if (!last.value) {
      last.parentElement.setAttribute("data-error-visible", "true");
      last.parentElement.setAttribute(
        "data-error",
        "Veuillez renseigner un nom."
      );
      lastValidationData = false;
    }

    if (last.value.trim().length == 1) {
      last.parentElement.setAttribute("data-error-visible", "true");
      last.parentElement.setAttribute(
        "data-error",
        "Vous devez entrer 2 caractères ou plus."
      );
      lastValidationData = false;
    }

    if (last.value && last.value.trim().length > 1 && last.value.match(regex)) {
      last.parentElement.setAttribute("data-error", "");
      last.parentElement.setAttribute("data-error-visible", "false");
      last.classList.add("goodBorder");
      lastValidationData = true;
    }
  });

// Check Email
const checkEmail = document
  .getElementById("email")
  .addEventListener("change", function (e) {
    e.preventDefault();

    if (!email.value) {
      email.parentElement.setAttribute("data-error-visible", "true");
      email.parentElement.setAttribute(
        "data-error",
        "Veuillez renseigner une adresse mail."
      );
      emailValidationData = false;
    }
    if (email.value && !email.value.includes("@")) {
      email.parentElement.setAttribute("data-error-visible", "true");
      email.parentElement.setAttribute(
        "data-error",
        "Veuillez entrer une adresse mail valide."
      );
      emailValidationData = false;
    }
    if (email.value && email.value.includes("@")) {
      email.parentElement.setAttribute("data-error", "");
      email.parentElement.setAttribute("data-error-visible", "false");
      email.classList.add("goodBorder");
      emailValidationData = true;
    }
  });

// Check Msg
const checkMsg = document
  .getElementById("msgText")
  .addEventListener("change", function (e) {
    e.preventDefault();

    if (!msgText.value) {
      msgText.parentElement.setAttribute("data-error-visible", "true");
      msgText.parentElement.setAttribute(
        "data-error",
        "Veuillez écrire un message."
      );
      msgTextValidationData = false;
    }

    if (msgText.value.trim().length < 7) {
      msgText.parentElement.setAttribute("data-error-visible", "true");
      msgText.parentElement.setAttribute(
        "data-error",
        "Vous devez entrer 7 caractères ou plus."
      );
      msgTextValidationData = false;
    }

    if (msgText.value && msgText.value.trim().length >= 7) {
      msgText.parentElement.setAttribute("data-error", "");
      msgText.parentElement.setAttribute("data-error-visible", "false");
      msgText.classList.add("goodBorder");
      msgTextValidationData = true;
    }
  });

// ============= Check ALL When Submit ===============
function validateForm() {
  // Check Prenom

  // Error regex
  if (!first.value.match(regex)) {
    first.parentElement.setAttribute("data-error-visible", "true");
    first.parentElement.setAttribute(
      "data-error",
      "Les caractères spéciaux ne sont pas autorisés."
    );
    firstValidationData = false;
  }

  if (!first.value) {
    first.parentElement.setAttribute("data-error-visible", "true");
    first.parentElement.setAttribute(
      "data-error",
      "Veuillez renseigner un prenom."
    );
    firstValidationData = false;
  }

  if (first.value.trim().length == 1) {
    first.parentElement.setAttribute("data-error-visible", "true");
    first.parentElement.setAttribute(
      "data-error",
      "Vous devez entrer 2 caractères ou plus."
    );
    firstValidationData = false;
  }

  if (
    first.value &&
    first.value.trim().length > 1 &&
    first.value.match(regex)
  ) {
    first.parentElement.setAttribute("data-error", "");
    first.parentElement.setAttribute("data-error-visible", "false");
    first.classList.add("goodBorder");
    firstValidationData = true;
  }

  // Check Nom

  // Error regex
  if (!last.value.match(regex)) {
    last.parentElement.setAttribute("data-error-visible", "true");
    last.parentElement.setAttribute(
      "data-error",
      "Les caractères spéciaux ne sont pas autorisés."
    );
    lastValidationData = false;
  }

  if (!last.value) {
    last.parentElement.setAttribute("data-error-visible", "true");
    last.parentElement.setAttribute(
      "data-error",
      "Veuillez renseigner un nom."
    );
    lastValidationData = false;
  }

  if (last.value.trim().length == 1) {
    last.parentElement.setAttribute("data-error-visible", "true");
    last.parentElement.setAttribute(
      "data-error",
      "Vous devez entrer 2 caractères ou plus."
    );
    lastValidationData = false;
  }

  if (last.value && last.value.trim().length > 1 && last.value.match(regex)) {
    last.parentElement.setAttribute("data-error", "");
    last.parentElement.setAttribute("data-error-visible", "false");
    last.classList.add("goodBorder");
    lastValidationData = true;
  }

  // Check Email

  if (!email.value) {
    email.parentElement.setAttribute("data-error-visible", "true");
    email.parentElement.setAttribute(
      "data-error",
      "Veuillez renseigner une adresse mail."
    );
    emailValidationData = false;
  }
  if (email.value && !email.value.includes("@")) {
    email.parentElement.setAttribute("data-error-visible", "true");
    email.parentElement.setAttribute(
      "data-error",
      "Veuillez entrer une adresse mail valide."
    );
    emailValidationData = false;
  }
  if (email.value && email.value.includes("@")) {
    email.parentElement.setAttribute("data-error", "");
    email.parentElement.setAttribute("data-error-visible", "false");
    email.classList.add("goodBorder");
    emailValidationData = true;
  }

  // Check Msg

  if (!msgText.value) {
    msgText.parentElement.setAttribute("data-error-visible", "true");
    msgText.parentElement.setAttribute(
      "data-error",
      "Veuillez écrire un message."
    );
    msgTextValidationData = false;
  }

  if (msgText.value.trim().length < 7) {
    msgText.parentElement.setAttribute("data-error-visible", "true");
    msgText.parentElement.setAttribute(
      "data-error",
      "Vous devez entrer 7 caractères ou plus."
    );
    msgTextValidationData = false;
  }

  if (msgText.value && msgText.value.trim().length >= 7) {
    msgText.parentElement.setAttribute("data-error", "");
    msgText.parentElement.setAttribute("data-error-visible", "false");
    msgText.classList.add("goodBorder");
    msgTextValidationData = true;
  }
}

// ==== Function Clear Inputs Style Validation ====
function clearInputsStyle() {
  // Clear first
  first.parentElement.setAttribute("data-error", "");
  first.parentElement.setAttribute("data-error-visible", "false");
  first.classList.remove("goodBorder");
  // Clear last
  last.parentElement.setAttribute("data-error", "");
  last.parentElement.setAttribute("data-error-visible", "false");
  last.classList.remove("goodBorder");
  // Clear email
  email.parentElement.setAttribute("data-error", "");
  email.parentElement.setAttribute("data-error-visible", "false");
  email.classList.remove("goodBorder");
  // Clear MsgText
  msgText.parentElement.setAttribute("data-error", "");
  msgText.parentElement.setAttribute("data-error-visible", "false");
  msgText.classList.remove("goodBorder");
}

// ============= Validation of Form Data to Submit ===============
const checkAll = document
  .getElementById("form-contact")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Appel la validation
    validateForm();
    if (
      firstValidationData &&
      lastValidationData &&
      emailValidationData &&
      msgTextValidationData
    ) {
      // Affichage données formulaire (pas de backend)
      console.log("Formulaire d'inscription :", [
        first.value,
        last.value,
        email.value,
        msgText.value,
      ]);

      // Vider le formulaire après le Submit
      first.value = "";
      first.value = "";
      last.value = "";
      email.value = "";
      msgText.value = "";

      // Reset check form to false
      firstValidationData = false;
      lastValidationData = false;
      emailValidationData = false;
      msgTextValidationData = false;

      // Clear Validation Style
      clearInputsStyle();

      // ==== Enclencher Modal de remmerciement ====

      closeModal(); // Close Modal
      displayModal2(); // Modal de Confirmation

      // Texte du modal de Confirmation
      //   modalBody2.textContent = "Merci pour votre inscription " + first.value;
    }
  });
