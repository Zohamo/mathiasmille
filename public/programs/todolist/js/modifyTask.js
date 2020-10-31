/***************************************
    VARIABLES
*********************** */

var modifyEls = document.querySelector(".check-item a.modif");

/***************************************
    FONCTIONS
*********************** */

function fillForm() {
    return false;
}

/***************************************
    PROGRAMME
*********************** */

for (var i = 0; i < modifyEls.length; i++) {
    modifyEls[i].addEventListener("click", fillForm)
}