"use script";

    /*KONAMI CODE*/
let myKonami = [82, 89, 65];
let konamiPosition = 0;
$(document).keyup(function (e) {
    console.log(e.keyCode);
    let expectedKey = myKonami[konamiPosition];
    let keyPressed = e.keyCode;
    if (expectedKey === keyPressed) {
        konamiPosition++;
        if(konamiPosition === myKonami.length) {
            alert("added 30 lives");
            konamiPosition = 0;
        }
    } else {
        konamiPosition = 0;
    }
});