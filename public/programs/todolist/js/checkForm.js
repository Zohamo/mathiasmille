/***************************************
    VARIABLES
*********************** */

/* Delete */

var checkboxEls = document.getElementsByClassName("checkboxItem"),
    submitDeleteEl = document.getElementById("submitDelete");

/* New */

var titleEl = document.getElementById("title"),
    alertTitleEl = document.getElementById("title-help"),
    submitNewEl = document.getElementById("submitNew");

/***************************************
    FONCTIONS
*********************** */

function enableSubmitDelete() {
    var checked = false;
    /* vérifier si une case est cochée */
    for (var i = 0; i < checkboxEls.length; i++) {
        if (checkboxEls[i].checked) { checked = true; }
    }
    /* si oui activer "submit" */
    if (checked == true) { submitDeleteEl.disabled = false; }
    else { submitDeleteEl.disabled = true; }
}

function checkTitle(e) {
    if (e.target.value.length < 3) {
        alertTitleEl.style.display = "inline-block";
        submitNewEl.disabled = true;
    }
    else {
        alertTitleEl.style.display = "none";
        submitNewEl.disabled = false;
    }
}

/***************************************
    PROGRAMME
*********************** */

for (var i = 0; i < checkboxEls.length; i++) {
    checkboxEls[i].addEventListener("change", enableSubmitDelete);
}

titleEl.addEventListener("blur", checkTitle);