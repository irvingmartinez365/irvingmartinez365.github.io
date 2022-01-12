const box = document.getElementById('article-http-container');

const url = document.URL.split('?');

const arg = url[1];

const ID = arg[arg.length - 1];

const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:5500/js/json/articles-info.json');

xhr.responseType = 'json';

xhr.addEventListener('load', () => {
    const response = xhr.response;
    const archiveName = response.find(e => e["id"] == ID)["archive"];

    const xhr2 = new XMLHttpRequest();

    xhr2.open('GET', `http://localhost:5500/articles/${archiveName}`);
    xhr2.responseType = "html";
    xhr2.addEventListener('load', () => {
        const html = xhr2.response;
        box.innerHTML = html;
    })

    xhr2.send();

    
})

xhr.send();






