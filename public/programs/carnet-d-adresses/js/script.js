
/***********************************
 * VARIABLES
*************************************/

var adBk = {
    storageID: "addressBook",
    contactList: [],
    lastContactID: -1,
    successClass: "alert--success",
    errorClass: "alert--danger",
    alert: function(success, message) {
        $("#alert").fadeIn();
        $("#alert").addClass(success ? this.successClass : this.errorClass);
        $("#alert").html(message);
        setTimeout( function() {
            $("#alert").fadeOut();
        }, 2000);
    }
};


/***********************************
 * LIST
*************************************/

adBk.getList = function() {
    if (localStorage.getItem(this.storageID)) {
        var jsonData = localStorage.getItem(this.storageID);
        this.contactList = JSON.parse(jsonData);
    }
    return this.contactList;
}

adBk.displayContact = function(id, firstName, lastName) {
    var liItem = '<li><a href="#" class="contactItem">'+lastName+" "+firstName+'</a></li>';
    $("#list").append(liItem);
    return liItem;
}

adBk.displayList = function() {
    $("#list").html("");

    for (var i = 0; i < this.contactList.length; i++) {

        // lisibilité des variables
        var id = this.contactList[i].id,
            firstName = this.contactList[i].firstName,
            lastName = this.contactList[i].lastName,
            phone = this.contactList[i].phone;

        // affichage du contact
        this.displayContact(i, firstName, lastName);

        // recherche du plus grand id
        if (id > this.lastContactID) { this.lastContactID = id; }
    }

    // création de l'évènement
    $("a").bind("click", function(e) {
        e.preventDefault();
        adBk.displayRecord($("a").index(this));
    });
}

/***********************************
 * NEW CONTACT
*************************************/

adBk.displayNewContact = function() {
    $("#newContact").fadeIn();
    $("#addNewContact").bind("click", adBk.addNewContact);
    $("#hideNewContact").bind("click", adBk.hideNewContact);
}

adBk.addNewContact = function() {
    adBk.lastContactID++;

    var newContact = {
        id: adBk.lastContactID,
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        phone: $("#phone").val()
    };

    // ajout du contact à la liste
    adBk.contactList.push(newContact);
    // mise à jour du Stockage Local
    var jsonData = JSON.stringify(adBk.contactList);
    if (!localStorage.setItem(adBk.storageID, jsonData)) {
        adBk.alert(true, "Succès&nbsp;!");
        adBk.init();
    }
    else {
        adBk.alert(false, "Echec, merci de réessayer");
    }
}

adBk.hideNewContact = function() {
    $("#newContact").fadeOut();
    $("#newContactForm").trigger("reset");
}

/***********************************
 * DISPLAY RECORD
*************************************/

adBk.displayRecord = function(index) {
    // apparition de la fiche
    $("#displayRecord").fadeIn();
    // écriture de la fiche
    $("#recordName").html(this.contactList[index].lastName + " " + this.contactList[index].firstName);
    $("#recordPhone").html(this.contactList[index].phone);
    // création des boutons
    $("#modifyRecord").bind("click", function() {
        adBk.modifyRecord(index);
    });
    $("#deleteRecord").bind("click", function() {
        adBk.deleteRecord(index);
    });
}

adBk.modifyRecord = function(index) {
    // modification du formulaire
    $("#newContactForm h3 span").html("Modifier");
    $("#addNewContact").html('<i class="fas fa-pen mrs"></i>Modifier');
    $("#firstName").val(this.contactList[index].firstName);
    $("#lastName").val(this.contactList[index].lastName);
    $("#phone").val(this.contactList[index].phone);
    // on cache la fiche et on montre le formulaire
    adBk.hideRecord();
    adBk.displayNewContact();
    // on change le rôle du bouton
    $("#addNewContact").unbind();
    $("#addNewContact").bind("click", function() {
        adBk.deleteRecord(index);
        adBk.addNewContact();
    });

}

adBk.deleteRecord = function(index) {
    console.log("delete : " + index);
    adBk.contactList.splice($.inArray(index, adBk.contactList),1);
    console.log(adBk.contactList);
}

adBk.hideRecord = function() {
    $("#displayRecord").fadeOut();
}

/***********************************
 * RESET
*************************************/

adBk.reset = function() {
    this.contactList = [];
    $("form").trigger("reset");
}

/***********************************
 * INIT
*************************************/

adBk.init = function() {
    $("#newContact, #displayRecord").fadeOut();

    this.reset();
    this.getList();
    this.displayList();
    console.log(adBk.contactList);
}

/* EVENT Buttons */

$("#displayNewContactForm").bind("click", adBk.displayNewContact);

$("#deleteRecord").bind("click", adBk.deleteRecord);
$("#hideRecord").bind("click", adBk.hideRecord);



$("#deleteAll").bind("click", function() {
    if (confirm("êtes-vous sûr de vouloir tout supprimer ?")) {
        localStorage.clear(adBk.storageID);
        console.log("Local storage deleted");
        adBk.init();
    }
});
