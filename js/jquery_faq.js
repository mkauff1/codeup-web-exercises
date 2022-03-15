"use strict";

$(document).ready(function(){
    $("dd").addClass("invisible");

    $("dd").click(function(){
        $(".invisible").css("visibility", "hidden");
        $(this).toggleClass(".invisible")
    });

    $("dd").hover(function() {
        $(this).toggleClass( "highlight" );
    });
});