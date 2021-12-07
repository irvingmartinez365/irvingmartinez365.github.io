const btn = document.getElementById('btn');
const nav = document.getElementById('nav');

btn.addEventListener('click', () => {
    nav.classList.toggle('show');
})