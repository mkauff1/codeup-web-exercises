"use strict";

document.getElementById("searchUsername").addEventListener('click', function(){
    let gitUsernames = document.getElementById("searchGituser").value;
    let urlOne = "https://api.github.com/users/" + gitUsernames + "/repos";
    //let urlTwo = "https://api.github.com/repos/DanielOmarZavala/codeup-web-exercises/commits{/sha}"

   fetch(urlOne, {
         headers: {
             'Authorization': GIT_KEY
         },
    // const USER_GITHUB_COMMIT = fetch(urlTwo, {
    //     headers: {
    //         'Authorization': GIT_KEY
    //     }
    })
        .then(response => response.json())
        .then(data => {
            //console.log(data);

            //console.log(data[0]);

            let commits = data[0].commits_url.replace("{/sha}","");
            console.log(commits);
            fetch(commits, {
                    headers: {
                    'Authorization': GIT_KEY
                }
            })
                .then(response => response.json())
                .then(commit => {
                    console.log(commit);
                });

        });
});

/*
const baseURL = 'https://api.github.com';

function getUserLastPushEvent (username) {
    return fetch(`${baseURL}/users/${username}/events/public`)
        .then(res => res.json())
        .then(events => {
            for (let event of events) {
                if (event.type === 'PushEvent') {
                    return event;
                }
            }
        });
}

getUserLastPushEvent('mojombo').then(event => {
    $('body').html('<h1>' + event.actor.created_at + '</h1>')
});
*/