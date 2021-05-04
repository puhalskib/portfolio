const homeBtn = document.getElementById("homejs");
homeBtn.onclick = function() {onTabClicked("home")};
const contactBtn = document.getElementById("contactshtml");
contactBtn.onclick = function() {onTabClicked("contacts")};

function onTabClicked(str) {
    if(str == "contacts") {
        window.location.href = "contacts.html";
    } else if(str == "home") {
        window.location.href = "index.html";
    }
}

addTypewriter('.projects #ffffff_{}#', 'typeproj', 150);
setTimeout(function() {
addTypewriter('I have most experience in Java and C++ as well as ' +
    'an active interest in javascript and other technologies.', 'typeExper', 22);
}, 1800);
