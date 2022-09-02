window.addEventListener("load", solve);

function solve() {
    document.querySelector('#publish-btn').addEventListener('click', publishPost);

    function publishPost(e) {
        e.preventDefault();
        let titleElement = document.querySelector('#post-title');
        let categoryElement = document.querySelector('#post-category');
        let contentElement = document.querySelector('#post-content');

        if (!titleElement.value || !categoryElement.value || !contentElement.value) {
            return;
        }
        let ulElement = document.querySelector('#review-list');

        let liElement = htmlGenerator('li');
        let articleElement = htmlGenerator('article');
        let h4Element = htmlGenerator('h4', `${titleElement.value}`);
        let pCategoryElement = htmlGenerator('p', `Category: ${categoryElement.value}`);
        let pContentElement = htmlGenerator('p', `Content: ${contentElement.value}`);

        let editBtn = htmlGenerator('button', 'Edit');
        let approveBtn = htmlGenerator('button', 'Approve');

        liElement.className = 'rpost';
        editBtn.className = 'action-btn edit';
        approveBtn.className = 'action-btn approve';

        articleElement.appendChild(h4Element);
        articleElement.appendChild(pCategoryElement);
        articleElement.appendChild(pContentElement);
        liElement.appendChild(articleElement);
        liElement.appendChild(approveBtn);
        liElement.appendChild(editBtn);
        ulElement.appendChild(liElement);

        titleElement.value = '';
        categoryElement.value = '';
        contentElement.value = '';

        function htmlGenerator(tagName, content) {
            let el = document.createElement(tagName);
            if (content) {
                el.textContent = content;
            }
            return el;
        }

        editBtn.addEventListener('click', (e) => {
            // e.preventDefault();
            titleElement.value = h4Element.textContent;
            categoryElement.value = pCategoryElement.textContent.split('Category: ')[1];
            contentElement.value = pContentElement.textContent.split('Content: ')[1];
            liElement.remove(e.target.parentNode.children);
        })

        approveBtn.addEventListener('click', () => {
            
            let publishedList = document.querySelector('#published-list');
            publishedList.appendChild(liElement);
            liElement.removeChild(editBtn);
            liElement.removeChild(approveBtn);
        })

        document.querySelector('#clear-btn').addEventListener('click', (e) => {
            let publishedList = document.querySelector('#published-list');
            let lis = publishedList.querySelectorAll('li')
            for (let li of lis) {
                li.remove()
            }
        });
    }
}