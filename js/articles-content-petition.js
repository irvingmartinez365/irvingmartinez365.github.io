const box = document.getElementById('article-http-container');
const title = document.getElementsByTagName('title')[0];

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://irvingmartinez365.github.io/js/json/articles-info.json');
xhr.responseType = 'json';

xhr.addEventListener('load', () => {
    const response = xhr.response;

    const url = document.URL;

    const arrUrl = url.split('?')
    const arg = arrUrl[1];
    const ID = arg[arg.length - 1];
    const archiveName = response.find(e => e["id"] == ID)["archive"];
    const titleContent = response.find(e => e["id"] == ID)["name"];
    title.textContent = titleContent; 
    
    
    const xhr2 = new XMLHttpRequest();

    xhr2.open('GET', `https://irvingmartinez365.github.io/articles/${archiveName}`);
    xhr2.responseType = "html";

    xhr2.addEventListener('load', () => {
        const html = xhr2.response;
        box.innerHTML = html;
    })

    xhr2.send();
    
})

xhr.send();






