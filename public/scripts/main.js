const projectBtn = document.getElementById("projectscss");
projectBtn.onclick = function() {onTabClicked("projects")};
const contactBtn = document.getElementById("contactshtml");
contactBtn.onclick = function() {onTabClicked("contacts")};

function onTabClicked(str) {
    if(str == "projects") {
        window.location.href = "projects.html";
    } else if(str == "contacts") {
        window.location.href = "contacts.html";
    }
}

addTypewriter('_!&lt!*!&gt!Ben #D0B344Puhalski#', 'typeanim', 150);