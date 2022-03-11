"use strict";

//$(document).ready(function() {
//    alert( 'The DOM has finished loading!' );
//});
/*
let student = {
    userName: "Matt",
    id: 12,
    role: admin
}
*/
/*
$('body').append(getTemplate(student));


function getTemplate(student){
    return '<div class="container">' +
        '<h1>Yeehaw</h1>' +
        '<p>Hey. ${userName}! Hola</p>' +
        '</div>';
}
*/
//let hobo = $('#hello');
//alert(hobo.html());

$('.codeup').css('border', '1px solid #F00');

$('.font-wee').css('font-size', '20px');

$('p, .font-wee').css('background-color', '#FF0');

// Only works once
$('h1').click(function (){
    if ($(this).css('background-color') === 'rgba(0, 0, 0, 0)'){
        $(this).css('background-color', 'yellow');
    } else {
        $(this).css('background-color', 'white');
    }

});

$('li').hover(function() {
    $(this).css('color', 'red');
},
function() {
    $(this).css('color', 'black');
});

$('p').dblclick(function(){
    $(this).css('font-size', '18px');
});


/*RY'S MOUSE EVENTS LECTURE*/
$(document).ready(function() {

    $("li").click(function () {
        console.log($(this).css("background-color"));
        if ($(this).css("background-color") === "rgba(0, 0, 0, 0)") {
            $(this).css("background-color", "yellow");
        } else {
            $(this).css("background-color", "rgba(0, 0, 0, 0)");
        }
    });

    $("h1").dblclick(function (e) {
        console.log("e");
        $(this).css("color", "teal");
    });

    $(".top-heading").hover(function () {

    }, function () {
        $(this).css("font-style", "italic");
    }, function () {
        $(this).css("font-style", "normal");
    });

    /*KEYBOARD EVENTS*/
    $("#search").keydown(function (e) {
        console.log(e.key);
    });
});