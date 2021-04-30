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
            }, 150);
        }
    }
    typeWriter(anim, 0);
});
