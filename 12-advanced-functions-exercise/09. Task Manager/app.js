function solve() {
    let taskElement = document.querySelector('#task');
    let descriptionElement = document.querySelector('#description');
    let dateElement = document.querySelector('#date');
    let addButtonElement = document.querySelector('#add');

    let sections = document.querySelectorAll('section');
    let openSection = sections[1];
    let inProgressSection = sections[2];
    let completeSection = sections[3];


    addButtonElement.addEventListener('click', addTask);

    function createElement(type, text, className) {
        let result = document.createElement(type);
        result.textContent = text;

        if (className) {
            result.className = className;
        }
        return result;
    }

    function addTask(e) {
        e.preventDefault(); 

        if (taskElement.value === '' || descriptionElement.value === '' || dateElement.value === '') {
            return;
        }

        let articleCreate = createElement('article');
        let h3Create = createElement('h3', taskElement.value);
        let p1Create = createElement('p', 'Description: ' + descriptionElement.value);
        let p2Create = createElement('p', 'Due Date: ' + dateElement.value);
        let divCreate = createElement('div', undefined, 'flex');

        let startButton = createElement('button', 'Start', 'green');
        let deleteButton = createElement('button', 'Delete', 'red');

        taskElement.value = '';
        descriptionElement.value = '';
        dateElement.value = '';
        
        startButton.addEventListener('click', (v) => {
            inProgressSection.children[1].appendChild(articleCreate);
            let finishButton = createElement('button', 'Finish', 'orange');
            divCreate.appendChild(finishButton);
            startButton.remove();

            finishButton.addEventListener('click', () => {
                completeSection.children[1].appendChild(articleCreate);
                finishButton.remove();
                deleteButton.remove();
            })
        });

        deleteButton.addEventListener('click', () => {
            articleCreate.remove();
        });


        articleCreate.appendChild(h3Create);
        articleCreate.appendChild(p1Create);
        articleCreate.appendChild(p2Create);

        divCreate.appendChild(startButton);
        divCreate.appendChild(deleteButton);

        articleCreate.appendChild(divCreate);

        openSection.appendChild(articleCreate);
        
    }
}