let feedbackForm = document.getElementById("feedback-form");

// question 1 telephone

//satisfait
let tressfactionRadioss = document.getElementById("tres-satisfait");
let plutotsfactionRadio = document.getElementById("plutot-insatisfait");

//insatisfait
let insatisfactionRadio = document.getElementById("insatisfait");
let causesInsatisfactionDiv = document.getElementById("causes-insatisfaction");

insatisfactionRadio.addEventListener("click", function () {
  causesInsatisfactionDiv.style.display = "block";
});

tressfactionRadioss.addEventListener("click", function () {
  causesInsatisfactionDiv.style.display = "none";
});
plutotsfactionRadio.addEventListener("click", function () {
  causesInsatisfactionDiv.style.display = "none";
});

//insatisfait de question (5)
let radioInsatisfait = document.getElementById("proprete-insatisfait");
let elementSalesDiv = document.getElementById("element-sales");
let plutotressatisfait = document.getElementById("proprete-tres-satisfait");
let propreteplutotsatisfait = document.getElementById("proprete-satisfait");
let propreteplutotInsatisfait = document.getElementById(
  "proprete-plutot-insatisfait"
);

radioInsatisfait.addEventListener("click", () => {
  elementSalesDiv.style.display = "block";
});

plutotressatisfait.addEventListener("click", () => {
  elementSalesDiv.style.display = "none";
});

propreteplutotsatisfait.addEventListener("click", () => {
  elementSalesDiv.style.display = "none";
});

propreteplutotInsatisfait.addEventListener("click", () => {
  elementSalesDiv.style.display = "none";
});

// question 9 telephone
let contact = document.getElementsByName("contact");
let telephone = document.getElementById("telephone");
let numero = document.getElementById("numero");
for (let i = 0; i < contact.length; i++) {
  contact[i].addEventListener("click", function () {
    if (this.value === "oui") {
      telephone.style.display = "block";
      console.log("Option sélectionnée : oui");
      console.log("Numéro de téléphone : " + numero.value);
    } else {
      telephone.style.display = "none";
      console.log("Option sélectionnée : non");
    }
  });
}

// question 10 :
const radios = document.getElementsByName("anonymat");
let question10 = "";
radios.forEach((radio) => {
  radio.addEventListener("click", () => {
    question10 = radio.value;
  });
});

// form
feedbackForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche la soumission du formulaire

  let satisfactionRadios = document.getElementsByName("satisfaction");
  let selectedSatisfaction = "";

  for (let i = 0; i < satisfactionRadios.length; i++) {
    if (satisfactionRadios[i].checked) {
      selectedSatisfaction = satisfactionRadios[i].value;
      break;
    }
  }

  let causesCheckboxs = document.getElementsByName("causes[]");
  let selectedCauses = [];

  for (let i = 0; i < causesCheckboxs.length; i++) {
    if (causesCheckboxs[i].checked) {
      selectedCauses.push(causesCheckboxs[i].value);
    }
  }

  let autreDetailsInput = document.getElementById("autre-details");
  let autreDetails = "";

  if (selectedCauses.indexOf("autre") !== -1) {
    autreDetails = autreDetailsInput.value;
  }

  // Envoi des valeurs vers un serveur ou traitement des données
  // ...
  const porteEntree = document.querySelector(
    'input[name="porte_entree"]:checked'
  ).value;
  const sols = document.querySelector('input[name="sols"]:checked').value;
  const murs = document.querySelector('input[name="murs"]:checked').value;
  const plafonds = document.querySelector(
    'input[name="plafonds"]:checked'
  ).value;
  const sanitairesRobinetterie = document.querySelector(
    'input[name="sanitaires_robinetterie"]:checked'
  ).value;
  const prises = document.querySelector('input[name="prises"]:checked').value;
  const menuiseries = document.querySelector(
    'input[name="menuiseries"]:checked'
  ).value;

  const sysTeme = document.querySelector(
    'input[name="access_system"]:checked'
  ).value;
  const Eclairage = document.querySelector(
    'input[name="lighting"]:checked'
  ).value;
  const Signale = document.querySelector('input[name="signage"]:checked').value;
  const Ascenseur = document.querySelector(
    'input[name="elevator"]:checked'
  ).value;
  const Boites = document.querySelector(
    'input[name="mailboxes"]:checked'
  ).value;

  const Tranquility = document.querySelector(
    'input[name="tranquility"]:checked'
  ).value;

  const Voisinage = document.querySelector(
    'input[name="voisinage"]:checked'
  ).value;

  const propreteCommunes = document.querySelector(
    'input[name="proprete-communes"]:checked'
  ).value;

  const Dechets = document.querySelector('input[name="dechets"]:checked').value;

  const travauxRadios = document.getElementsByName("travaux");
  let selectedTravaux = "";

  for (let i = 0; i < travauxRadios.length; i++) {
    if (travauxRadios[i].checked) {
      selectedTravaux = travauxRadios[i].value;
      break;
    }
  }

  let travauxRealisesRadios = document.getElementsByName("travaux-realises");
  let travauxRealises = "";
  for (let i = 0; i < travauxRealisesRadios.length; i++) {
    if (travauxRealisesRadios[i].checked) {
      travauxRealises = travauxRealisesRadios[i].value;
      break;
    }
  }

  /***************************** 5 **********************************/
  let radiosProprete = document.getElementsByName("proprete");
  let Proprete = "";
  for (let i = 0; i < radiosProprete.length; i++) {
    if (radiosProprete[i].checked) {
      Proprete = radiosProprete[i].value;
      break;
    }
  }

  let autreProprete = document.getElementById("elements-sales");
  let elements = "";
  if (elements.indexOf("insatisfait") !== -1) {
    elements = autreProprete.value;
  }

  let commenTaires = document.getElementById("comment").value;

  // console.log("----------------------------- 1 -------------------");

  // console.log("Satisfaction : " + selectedSatisfaction);
  // console.log("Causes d'insatisfaction : " + selectedCauses.join(", "));
  // console.log("Autre détails : " + autreDetails);

  // console.log("-----------------------------2-------------------");

  // //   // Affichage des valeurs récupérées (pour test)
  // console.log(`Porte d'entrée et serrure : ${porteEntree}`);
  // console.log(`Sols : ${sols}`);
  // console.log(`Murs : ${murs}`);
  // console.log(`Plafonds : ${plafonds}`);
  // console.log(`Sanitaires et robinetterie : ${sanitairesRobinetterie}`);
  // console.log(`Prises de courant, de communication et télévision : ${prises}`);
  // console.log(`Menuiseries (portes, placards, fenêtres) : ${menuiseries}`);

  // console.log("----------------------------- 3 -------------------");
  // console.log("Réparations programmées : " + selectedTravaux);

  // console.log("----------------------------- 4 -------------------");
  // console.log("travaux Realises : " + travauxRealises);

  // console.log("----------------------------- 5 -------------------");
  // console.log("Proprete: " + Proprete);
  // console.log("elements: " + elements);

  // console.log("---------------------------- 6 -------------------");
  // console.log(`systeme d'acces: ${sysTeme}`);
  // console.log(`Eclairage: ${Eclairage}`);
  // console.log(`Signale: ${Signale}`);
  // console.log(`Ascenseur: ${Ascenseur}`);
  // console.log(`Boîtes-aux-lettres: ${Boites}`);

  // console.log("---------------------------- 7 -------------------");
  // console.log(`Tranquillité : ${Tranquility}`);
  // console.log(`Relations de voisinage: ${Voisinage}`);
  // console.log(
  //   `Propreté des abords et des parties communes: ${propreteCommunes}`
  // );
  // console.log(`Gestion des déchets: ${Dechets}`);

  // console.log("---------------------------- 8 -------------------");

  // console.log("Commantaires :" + commenTaires);

  // console.log("---------------------------- 9 -------------------");
  // // console.log(`Vous avez choisi : ${question9}`);
  // console.log("---------------------------- 10 -------------------");
  // console.log(`Vous avez choisi : ${question10}`);
});
