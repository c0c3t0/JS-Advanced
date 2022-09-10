function solve() {
    const author = document.querySelector('#creator');
    const title = document.querySelector('#title');
    const category = document.querySelector('#category');
    const content = document.querySelector('#content');

    const createBtn = document.querySelector('button');
    const addArticle = document.querySelector('.site-content main section');

    const archive = document.querySelector('.archive-section ol');


    // const  = document.querySelector('#');

    createBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const article = htmlGenerator('article', '', addArticle);
        let tit = htmlGenerator('h1', `${title.value}`, article);
        const pCat = htmlGenerator('p', 'Category: ', article);
        htmlGenerator('strong', `${category.value}`, pCat);
        const pCreator = htmlGenerator('p', 'Creator: ', article);
        htmlGenerator('strong', `${author.value}`, pCreator);
        htmlGenerator('p', `${content.value}`, article);

        const divBtns = htmlGenerator('div', '', article);
        divBtns.className = 'buttons';
        const deleteBtn = htmlGenerator('button', 'Delete', divBtns);
        deleteBtn.className = 'btn delete';
        const archiveBtn = htmlGenerator('button', 'Archive', divBtns);
        archiveBtn.className = 'btn archive';

        archiveBtn.addEventListener('click', (e) => {
            htmlGenerator('li', `${tit.textContent}`, archive);
            let allLi = Array.from(archive.children);

            Array.from(allLi).sort((a,b) => a.textContent.localeCompare(b.textContent)).forEach(li=>{
                archive.appendChild(li)
            })
            e.target.parentNode.parentNode.remove();
        })

        deleteBtn.addEventListener('click', (e) =>{
            e.target.parentNode.parentNode.remove();

        })
        author.value = '';
        title.value = '';
        category.value = '';
        content.value = '';
    })



    function htmlGenerator(tagName, content, parent) {
        let el = document.createElement(tagName);
        el.textContent = content;
        if (parent) {
            parent.appendChild(el);
        }
        return el;
    }
}
