/**animation Opacity */

// Fonction pour déterminer si un élément est visible à l'écran
function isElementVisible(element, fadeInPoint, fadeOutPoint) {
  let rect = element.getBoundingClientRect();
  let windowHeight = window.innerHeight || document.documentElement.clientHeight;
  let fadeInThreshold = fadeInPoint * windowHeight;
  let fadeOutThreshold = fadeOutPoint * windowHeight;
  
  return rect.top <= fadeInThreshold && rect.bottom >= fadeOutThreshold;
}

// Fonction de gestion du défilement
function handleScroll() {
  let fadeElements = document.querySelectorAll('.fade-in-out');
  fadeElements.forEach(function(element) {
    let fadeInPoint = parseFloat(element.getAttribute('data-fade-in-point'));
    let fadeOutPoint = parseFloat(element.getAttribute('data-fade-out-point'));
    
    if (isElementVisible(element, fadeInPoint, fadeOutPoint)) {
      element.classList.add('fade-in');
    } else {
      element.classList.remove('fade-in');
    }
  });
}

// Événement de défilement
window.addEventListener('scroll', handleScroll);


// click btn

function afficherTexte() {
  let texte =
    "<img src='../assets/icons/done.svg' class='icon-done'> <br/> Merci d’avoir partagé votre expérience.";
  document.getElementById("texteAffiche").innerHTML = texte;
  document.getElementById("myButton").style.display = "none";
  document.getElementById("texteAffiche").style.display = "block";
}


