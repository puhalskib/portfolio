
function addTypewriter(regstr, name, speed) {
    name = document.getElementById(name);
    regstr = regstr.replaceAll('<','&lt');
    regstr = regstr.replaceAll('>', '&gt');
    var frames = [];

    
    
    


    function typeWriter(str, out, outend, inColor) {
        if (str.length > 0) {
            var nextCharTime = 1;
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
            
            //name.innerHTML = out + outend;
            if(nextCharTime != 0) {
                frames.push(out + outend);
            }
            /*call function later*/
            /*setTimeout(function () {
                typeWriter(str, out, outend, inColor);
            }, nextCharTime);*/
            typeWriter(str, out, outend, inColor);
        }
    }
    typeWriter(regstr, '', '', false);

    var lastUpdate = Date.now();
    var myInterval = setInterval(tick, 0);

    function tick() {
        if((Date.now() - lastUpdate) > speed) {
            lastUpdate += speed;
            if(frames.length != 0) {
                name.innerHTML = frames[0];
                frames.shift();
            } else {
                clearInterval(myInterval);
            }
        }
    }


}