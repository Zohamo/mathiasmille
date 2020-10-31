var kikiImg = document.querySelector("#kiki img"),
    kikiTooltip = document.querySelector("#kiki .tooltip");
var phrases = [
    "ouah&nbsp;! ouah&nbsp;!",
    "Grrrrr",
    "Meow&nbsp!?",
    "Allez au boulot Tata&nbsp;!",
    "ouah&nbsp;!",
    "ouah&nbsp;! ouah&nbsp;!",
    "À mon top il sera exactement<br><em>" + new Date() + "</em><br>TOP&nbsp;!",
    "N'oublie pas de rajouter <em>promener Kiki</em> dans ta liste&nbsp;!",
    "ouaf&nbsp;!"
];

function changeText() {
    var txtId = Math.ceil(Math.random() * (phrases.length - 1));
    kikiTooltip.innerHTML = phrases[txtId];
}

kikiImg.addEventListener("mouseenter", changeText);