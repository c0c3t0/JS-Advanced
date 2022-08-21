function getArticleGenerator(input) {
    let articles = input;
    let divElement = document.querySelector('#content');

    return () => {
        if (articles.length) {
            let createArticle = document.createElement('article');
            createArticle.textContent = articles.shift();
            createArticle.style.display = 'block';
            divElement.appendChild(createArticle);
        }
    }
}
