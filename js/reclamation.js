let feedbackForm = document.getElementById("feedback-form");



/********** question - reclamation - 1 ************/

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

/********** question - reclamation - 2 ************/
//satisfait
let tressfactionRadios_rec = document.getElementById("tres-satisfait-rec");
let plutotsfactionRadio_rec = document.getElementById("plutot-insatisfait-rec");
//insatisfait
let insatisfactionRadio_rec = document.getElementById("insatisfait-rec");
let causesInsatisfactionDiv_rec = document.getElementById("causes-insatisfaction-rec");

insatisfactionRadio_rec.addEventListener("click", function () {
    causesInsatisfactionDiv_rec.style.display = "block";
});

tressfactionRadios_rec.addEventListener("click", function () {
  causesInsatisfactionDiv_rec.style.display = "none";
});
plutotsfactionRadio_rec.addEventListener("click", function () {
  causesInsatisfactionDiv_rec.style.display = "none";
});




// form
feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let satisfactionRadios = document.getElementsByName("satisfaction");
    let selectedSatisfaction = "";
  
    for (let i = 0; i < satisfactionRadios.length; i++) {
      if (satisfactionRadios[i].checked) {
        selectedSatisfaction = satisfactionRadios[i].value;
        break;
      }
    }
  
    let causesCheckboxs = document.getElementsByName("causes-rec[]");
    let selectedCauses = [];
  
    for (let i = 0; i < causesCheckboxs.length; i++) {
      if (causesCheckboxs[i].checked) {
        selectedCauses.push(causesCheckboxs[i].value);
      }
    }
  
    // let autreDetailsInput = document.getElementById("autre-rec");
    // let autreDetails = "";
  
    // if (selectedCauses.indexOf("autre") !== -1) {
    //   autreDetails = autreDetailsInput.value;
    // }

/********** question - reclamation - 2 ************/

    let satisfactionRadios_rec = document.getElementsByName("satisfaction-rec");
    let selectedSatisfaction_rec = "";
  
    for (let i = 0; i < satisfactionRadios_rec.length; i++) {
      if (satisfactionRadios_rec[i].checked) {
        selectedSatisfaction_rec = satisfactionRadios_rec[i].value;
        break;
      }
    }
  
    let causesCheckboxs_rec = document.getElementsByName("causes-rec-2[]");
    let selectedCauses_rec = [];
  
    for (let i = 0; i < causesCheckboxs_rec.length; i++) {
      if (causesCheckboxs_rec[i].checked) {
        selectedCauses_rec.push(causesCheckboxs_rec[i].value);
      }
    }
  
    // let autreDetailsInput = document.getElementById("autre-rec-2");
    // let autreDetails = "";
  
    // if (selectedCauses.indexOf("autre") !== -1) {
    //   autreDetails = autreDetailsInput.value;
    // }


})