document.addEventListener('DOMContentLoaded', function (event) {
    const thisScript = document.getElementById("typewriter");
    var regstr = thisScript.getAttribute("data-text");
    //var regstr = '_/&lt/*/&gt/Ben #D0B344Puhalski#';
    regstr = regstr.replaceAll('<','&lt');
    regstr = regstr.replaceAll('>', '&gt');

    const name = document.getElementById(thisScript.getAttribute("data-id"));

        //'&ltBen <span style="color:#D0B344">Puhalski</span>&gt'
    function typeWriter(str, out, outend, inColor) {
        if (str.length > 0) {
            var nextCharTime = 150;
            var atEnd = false;
            
            if(str.charAt(0) == '_') {
                nextCharTime = 0;
                str = str.substring(1);
            }
            if(str.charAt(0) == '*') {
                atEnd = true;
                str = str.substring(1);
            }

            if(str.charAt(0) == '!') {
                str = str.substring(1);
                let n = str.search('!');
                if(atEnd) {
                    outend += str.substring(0, n);
                } else {
                    out += str.substring(0, n);
                }
                str = str.substring(n+1);
            } else if(str.charAt(0) == '#') {
                nextCharTime = 0;
                if(inColor) {
                    str = str.substring(1);
                    out += '</span>'
                    outend = outend.replace('</span>', '');
                    inColor = false;
                } else {
                    out += '<span style="color:#' + str.substring(1, 7) + '">';
                    str = str.substring(7);
                    outend = '</span>' + outend;
                    inColor = true;
                }
            } else if(str.charAt(0) == '^') {
                console.log("merge " + out + " with " + outend);
                out += outend;
                outend = '';
                
                nextCharTime = 0;
                str = str.substring(1);
            } else {
                if(atEnd) {
                    outend += str.charAt(0);
                } else {
                    out += str.charAt(0);
                }
                str = str.substring(1);
            }
            
            name.innerHTML = out + outend;
            console.log(out + outend + "\n" + name.innerHTML);
            /*call function later*/
            setTimeout(function () {
                typeWriter(str, out, outend, inColor);
            }, nextCharTime);
        }
    }
    typeWriter(regstr, '', '', false);
});


