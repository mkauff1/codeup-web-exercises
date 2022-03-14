"use script";
    /*KONAMI CODE*/
/*
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
    */
    $(document).keyup(function(e){
        console.log(e.keyCode);
    });
    let expectedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'a',
        66: 'b',
        13: 'enter'
    };
    var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a', 'enter'];

    var konamiCodePosition = 0;
    document.addEventListener('keydown', function(e) {
        var key = expectedKeys[e.keyCode];
        var requiredKey = konamiCode[konamiCodePosition];
        if (key == requiredKey) {
            konamiCodePosition++;

            if (konamiCodePosition == konamiCode.length) {
                activateCode();
                konamiCodePosition = 0;
            }
        } else {
            konamiCodePosition = 0;
        }
    });
    function activateCode() {
        document.body.style.backgroundImage = "url(pics/konami-code-30-lives.jpg)";
        document.querySelector("body").style.backgroundSize = "cover";

        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', '' +
            '/pics/03_Battle in the Jungle.mp3');

        audioElement.addEventListener('ended', function() {
            this.play();
        }, false);

        audioElement.addEventListener("canplay",function(){
            $("#length").text("Duration:" + audioElement.duration + " seconds");
            $("#source").text("Source:" + audioElement.src);
            $("#status").text("Status: Ready to play").css("color","green");
        });

        $('#play').click(function() {
            audioElement.play();
            $("#status").text("Status: Playing");
        });

        $('#pause').click(function() {
            audioElement.pause();
            $("#status").text("Status: Paused");
        });

        $('#restart').click(function() {
            audioElement.currentTime = 0;
        });

        alert("Added 30 Lives");
    }

/*


https://oldgameshelf.com/contra-208.html
    https://www.free80sarcade.com/contra.php


var SCREEN_WIDTH = 256;
var SCREEN_HEIGHT = 240;

var canvas_ctx, image;

var AUDIO_BUFFERING = 512;
var SAMPLE_COUNT = 4*1024;
var SAMPLE_MASK = SAMPLE_COUNT - 1;
var audio_samples_L = new Float32Array(SAMPLE_COUNT);
var audio_samples_R = new Float32Array(SAMPLE_COUNT);



function audio_callback(event){
    var dst = event.outputBuffer;
    var len = dst.length;

    // Attempt to avoid buffer underruns.
    if(audio_remain() < AUDIO_BUFFERING) nes.frame();

    var dst_l = dst.getChannelData(0);
    var dst_r = dst.getChannelData(1);
    for(var i = 0; i < len; i++){
        var src_idx = (audio_read_cursor + i) & SAMPLE_MASK;
        dst_l[i] = audio_samples_L[src_idx];
        dst_r[i] = audio_samples_R[src_idx];
    }

    audio_read_cursor = (audio_read_cursor + len) & SAMPLE_MASK;
}

function keyboard(callback, event){


    var player = 1;
    switch(event.keyCode){
        case 38: // UP
            callback(player, jsnes.Controller.BUTTON_UP); break;
        case 40: // Down
            callback(player, jsnes.Controller.BUTTON_DOWN); break;
        case 37: // Left
            callback(player, jsnes.Controller.BUTTON_LEFT); break;
        case 39: // Right
            callback(player, jsnes.Controller.BUTTON_RIGHT); break;
        case 65: // 'a' - qwerty, dvorak
        case 88: // 'x' - azerty
            callback(player, jsnes.Controller.BUTTON_A); break;
        case 90: // 's' - qwerty, azerty
        case 79: // 'o' - dvorak
            callback(player, jsnes.Controller.BUTTON_B); break;
        case 9: // Tab
            callback(player, jsnes.Controller.BUTTON_SELECT); break;
        case 13: // Return
            callback(player, jsnes.Controller.BUTTON_START); break;
        default: break;
    }
}

function nes_init(canvas_id){
    var canvas = document.getElementById(canvas_id);
    canvas_ctx = canvas.getContext("2d");
    image = canvas_ctx.getImageData(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    canvas_ctx.fillStyle = "black";
    canvas_ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    // Setup audio.
    var audio_ctx = new window.AudioContext();
    var script_processor = audio_ctx.createScriptProcessor(AUDIO_BUFFERING, 0, 2);
    script_processor.onaudioprocess = audio_callback;
    script_processor.connect(audio_ctx.destination);
    audio_ctx.resume();
//DAVID Add
    //document.querySelector('button').addEventListener('click', function() {
    document.getElementById('Sound').addEventListener('click', function() {
        audio_ctx.resume().then(() => {
            console.log('Playback resumed successfully');
        });
    });

    document.getElementById('Mute').addEventListener('click', function() {
        audio_ctx.suspend().then(() => {
            console.log('Playback resumed successfully');
        });
    });

}

document.addEventListener('keydown', (event) => {keyboard(nes.buttonDown, event)});
document.addEventListener('keyup', (event) => {keyboard(nes.buttonUp, event)});
*/