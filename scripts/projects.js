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
