

main();

function main() {
    console.log("hello world");
}

document.addEventListener('DOMContentLoaded', function (event) {
    const anim = ['',
        '&lt&gt',
        '&lt&gt',
        '&lt&gt',
        '&lt&gt',
        '&ltB&gt',
        '&ltBe&gt',
        '&ltBen&gt',
        '&ltBen &gt',
        '&ltBen <span style="color:#D0B344">P</span>&gt',
        '&ltBen <span style="color:#D0B344">Pu</span>&gt',
        '&ltBen <span style="color:#D0B344">Puh</span>&gt',
        '&ltBen <span style="color:#D0B344">Puha</span>&gt',
        '&ltBen <span style="color:#D0B344">Puhal</span>&gt',
        '&ltBen <span style="color:#D0B344">Puhals</span>&gt',
        '&ltBen <span style="color:#D0B344">Puhalsk</span>&gt',
        '&ltBen <span style="color:#D0B344">Puhalski</span>&gt'
    ]
    const name = document.getElementById("typeanim");

    function typeWriter(ar, i) {
        if (i < ar.length) {
            name.innerHTML = ar[i];

            setTimeout(function () {
                typeWriter(ar, i + 1)
            }, 200);
        }
    }
    typeWriter(anim, 0);
});

const projectBtn = document.getElementById("projectscss");
projectBtn.onclick = function() {onTabClicked("projects")};
const contactBtn = document.getElementById("contactshtml");
contactBtn.onclick = function() {onTabClicked("contacts")};

function onTabClicked(str) {
    if(str == "projects") {
        projectBtn.style.backgroundColor = '#1E1E1E';
        projectBtn.style.cursor = "default";
        contactBtn.style.backgroundColor = '#404040';
        contactBtn.style.cursor = "pointer";
        projectBtn.style.borderWidth = "0px";
        contactBtn.style.borderWidth = "0px";
    } else if(str == "contacts") {
        window.location.href = "contacts.html"
        projectBtn.style.backgroundColor = '#404040';
        projectBtn.style.cursor = "pointer";
        contactBtn.style.backgroundColor = '#1E1E1E';
        contactBtn.style.cursor = "default";
        projectBtn.style.borderWidth = "0px";
        contactBtn.style.borderWidth = "0px";
        
    }
}

