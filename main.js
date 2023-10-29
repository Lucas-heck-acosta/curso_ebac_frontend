$(document).ready(function(){
    const endpoint = "https://api.github.com/users/lucas-heck-acosta";
    const name = document.querySelector('#name');
    const pfp = document.querySelector('#pfp');
    const user = document.querySelector('#user');
    const repos = document.querySelector('#repos');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const link = document.querySelector('#link');


    fetch(endpoint)
    .then(function(resp){
        return resp.json();
    })
    .then(function(json){
        console.log(json);
        name.innerHTML = json.name;
        pfp.src = json.avatar_url;
        user.innerHTML = json.login;
        repos.innerHTML = json.public_repos;
        followers.innerHTML = json.followers;
        following.innerHTML = json.following;
        link.href = json.html_url;
    })
    .catch(function(error){
        alert(error); 
    })
    
})
