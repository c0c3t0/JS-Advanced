window.addEventListener('load', solve);

function solve() {
    let genre = document.querySelector('#genre');
    let name = document.querySelector('#name');
    let author = document.querySelector('#author');
    let date = document.querySelector('#date');
    let addBtn = document.querySelector('#add-btn');
    let div = document.querySelector('.all-hits-container');
    // let  = document.querySelector('#')

    addBtn.addEventListener('click', add);

    function add(e) {
        if (genre.value !== '' && name.value !== '' && author.value !== '' && date.value !== '') {
            allHits(e, genre.value, name.value, author.value, date.value);
            clearInputs();
        }
    }

    function allHits(e, genre, name, author, date) {
        e.preventDefault();

        let divHitsInfo = htmlGenerator('div', '', div);
        divHitsInfo.setAttribute('class', 'hits-info');
        let img = htmlGenerator('img', '', divHitsInfo);
        img.setAttribute('src', './static/img/img.png');
        htmlGenerator('h2', `Genre: ${genre}`, divHitsInfo);
        htmlGenerator('h2', `Name: ${name}`, divHitsInfo);
        htmlGenerator('h2', `Author: ${author}`, divHitsInfo);
        htmlGenerator('h3', `Date: ${date}`, divHitsInfo);

        let saveSongBtn = htmlGenerator('button', 'Save song', divHitsInfo);
        saveSongBtn.setAttribute('class', 'save-btn');

        let likeSongBtn = htmlGenerator('button', 'Like song', divHitsInfo);
        likeSongBtn.setAttribute('class', 'like-btn');

        let deleteBtn = htmlGenerator('button', 'Delete', divHitsInfo);
        deleteBtn.setAttribute('class', 'delete-btn');

    }



    function htmlGenerator(tagName, content, parent) {
        let el = document.createElement(tagName);
        el.textContent = content;
        if (parent) {
            parent.appendChild(el);
        }
        return el;
    }

    function clearInputs() {
        genre.value = '';
        name.value = '';
        author.value = '';
        date.value = '';
    }

}


