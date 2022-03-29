"use strict";

document.getElementById("searchUsername").addEventListener('click', function(){
    let gitUsernames = document.getElementById("searchGituser").value;
    let url = "https://api.github.com/" + gitUsernames; //+ "/tater/events";
    let encodedUrl = encodeURI(url);

    fetch(encodedUrl, {
        headers: {
            'Authorization': GIT_KEY
        }
    })

        .then(response => response.json())
        .then(data => {
            console.log(data);

        });
})