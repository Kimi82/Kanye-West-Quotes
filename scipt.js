const apiURL = 'https://api.kanye.rest/'
const div = document.querySelector('h1');

fetch(apiURL)
.then(resp => resp.json())
    .then(resp => {
        div.innerText = (resp.quote);
    })
    .catch(error => console.dir(error));