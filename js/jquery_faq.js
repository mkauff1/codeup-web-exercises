"use strict";

$(document).ready(function(){
    $("dd").addClass("invisible");

    $("#btn1").click(function(){
        //$(".invisible").css("visibility", "hidden");
        $("dd").toggleClass("invisible");
    });

    $("dd").click(function() {
        $(this).toggleClass( "highlight" );
    });

    $("#btn2").click(function (){
        $("ul").each(function(){
            $(this).children().last().toggleClass("highlight");
        });
    });

    $("h3").addClass("bold-font");
    $("h3").click(function(){
        $(this).next().children().toggleClass("bold-font");
    });

    $("li").click(function(){
        $(this).parent().children().first().css("font", "blue");
    });
});

m8RE75H8zDsLWQv