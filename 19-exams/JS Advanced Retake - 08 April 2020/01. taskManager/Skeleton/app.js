function solve() {
    document.querySelector('#add').addEventListener('click', validateInputs);
    const task = document.querySelector('#task');
    const description = document.querySelector('#description');
    const date = document.querySelector('#date');

    function validateInputs(e) {
        e.preventDefault();

        if (!task.value || !description.value || !date.value) {
            return;
        }
        addTask();
        clearInputs();
    }

    function addTask() {
        const openSectionDiv = document.querySelectorAll('section')[1].children[1];

        const article = htmlGenerator('article', '', openSectionDiv);
        htmlGenerator('h3', task.value, article);
        htmlGenerator('p', `Description: ${description.value}`, article);
        htmlGenerator('p', `Due Date: ${date.value}`, article);

        const divFlex = htmlGenerator('div', '', article, 'flex');
        const startBtn = htmlGenerator('button', 'Start', divFlex, 'green');
        startBtn.addEventListener('click', moveToProgress);

        const deleteBtn = htmlGenerator('button', 'Delete', divFlex, 'red');
        deleteBtn.addEventListener('click', deleteTask);
    }

    function moveToProgress(e) {
        const inProgressDiv = document.querySelector('section #in-progress');
        const currentArticle = e.target.parentNode.parentNode;

        inProgressDiv.appendChild(currentArticle);
        currentArticle.querySelector('.green').remove();
        const finishBtn = htmlGenerator('button', 'Finish', currentArticle.querySelector('.flex'), 'orange');
        finishBtn.addEventListener('click', moveToComplete);
    }

    function deleteTask(e) {
        e.target.parentNode.parentNode.remove();
    }

    function moveToComplete(e) {
        const completeSectionDiv = document.querySelectorAll('section')[3].children[1];
        const currentArticle = e.target.parentNode.parentNode;

        completeSectionDiv.appendChild(currentArticle);
        currentArticle.querySelector('.flex').remove();
    }

    function htmlGenerator(tag, text, parent, className) {
        const el = document.createElement(tag);
        el.textContent = text;
        if (parent) {
            parent.appendChild(el);
        }
        if (className) {
            el.className = className;
        }

        return el;
    }

    function clearInputs() {
        task.value = '';
        description.value = '';
        date.value = '';
    }
}