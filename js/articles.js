const articlesContainer = document.getElementById('articles-contianer');
const template = document.getElementById('articulo-template').content;

const url = 'https://irvingmartinez365.github.io/js/json/articles-info.json';

const xhr = new XMLHttpRequest();

xhr.open('GET', url);
xhr.responseType = 'json'
xhr.addEventListener('loadstart', () => {
    articlesContainer.innerHTML = '<img style="width: 60px; margin: auto; " src="assets/img/loading.gif" alt="loading">'
})
xhr.addEventListener('loadend', () => {
    articlesContainer.removeChild(articlesContainer.childNodes[0]);
})
xhr.addEventListener('load', () => {
    const response = xhr.response;
    

    const frag = document.createDocumentFragment();

    for(const info of response){
        let link = `lectura.html?articleID=${info["id"]}`;
        // console.log(link)
        template.querySelector('#article-template__link').setAttribute('href', link);
        template.querySelector('#article-template__name').textContent = info["name"];
        template.querySelector('.article-container #article-template__txt').textContent = info["description"];
        template.querySelector('.article-container #article-template__topic span').textContent = info["topic"];

        const element = template.cloneNode(true);

        //console.log(element);
        frag.appendChild(element);
    }
    articlesContainer.appendChild(frag);
    

}) 

xhr.send()