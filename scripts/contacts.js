const homeBtn = document.getElementById("homejs");
homeBtn.onclick = function() {onTabClicked("home")};
const projectBtn = document.getElementById("projectscss");
projectBtn.onclick = function() {onTabClicked("projects")};

function onTabClicked(str) {
    if(str == "projects") {
        window.location.href = "projects.html";
    } else if(str == "home") {
        window.location.href = "index.html";
    }
}
