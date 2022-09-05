window.addEventListener('load', solve);

function solve() {
    let type = document.querySelector('#type-product');
    let description = document.querySelector('#description');
    let name = document.querySelector('#client-name');
    let phone = document.querySelector('#client-phone');
    document.querySelector('form button').addEventListener('click', send);

    let recieved = document.querySelector('#received-orders');
    let completed = document.querySelector('#completed-orders');

    document.querySelector('.clear-btn').addEventListener('click', (e) => {
        let allFinishedDivs = completed.querySelectorAll('div');
        for (let div of allFinishedDivs) {
            div.remove();
        }
    })

    function send(e) {
        e.preventDefault();

        if (description.value && name.value && phone.value) {
            addInfo(e, type.value, name.value, phone.value, description.value);
            clearInputs();
        }

    }

    function addInfo(e, type, name, phone, description) {
        let div = htmlGenerator('div', '', recieved);
        div.setAttribute('class', 'container');
        htmlGenerator('h2', `Product type for repair: ${type}`, div);
        htmlGenerator('h3', `Client information: ${name}, ${phone}`, div);
        htmlGenerator('h4', `Description of the problem: ${description}`, div);

        let startBtn = htmlGenerator('button', 'Start repair', div);
        startBtn.setAttribute('class', 'start-btn');

        let finishBtn = htmlGenerator('button', 'Finish repair', div);
        finishBtn.setAttribute('class', 'finish-btn');
        finishBtn.setAttribute('disabled', 'disabled');

        startBtn.addEventListener('click', (e) => {
            startBtn.setAttribute('disabled', 'disabled');
            finishBtn.removeAttribute('disabled');
        });

        finishBtn.addEventListener('click', (e) => {
            e.target.parentNode.remove();

            let divFinished = htmlGenerator('div', '', completed);
            divFinished.setAttribute('class', 'container');
            htmlGenerator('h2', `Product type for repair: ${type}`, divFinished);
            htmlGenerator('h3', `Client information: ${name}, ${phone}`, divFinished);
            htmlGenerator('h4', `Description of the problem: ${description}`, divFinished);
        })
    }

    function htmlGenerator(tagName, content, parent) {
        let element = document.createElement(tagName);
        element.textContent = content;
        if (parent) {
            parent.appendChild(element)
        }
        return element;
    }

    function clearInputs() {
        type.value = '';
        description.value = '';
        name.value = '';
        phone.value = '';
    }
}