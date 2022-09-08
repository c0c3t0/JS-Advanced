window.addEventListener('load', solve);

function solve() {
    let model = document.querySelector('#model');
    let year = document.querySelector('#year');
    let description = document.querySelector('#description');
    let price = document.querySelector('#price');
    let addBtn = document.querySelector('#add');

    let furnitureList = document.querySelector('#furniture-list');

    addBtn.addEventListener('click', validateAndAdd);

    function validateAndAdd(e) {
        if (!model.value || !year.value || ! description.value || !price.value) {
            return;
        }
        add(e, model.value, year.value, description.value, price.value);
        clearInputs();

    
    }

    function add(e, model, year, description, price) {
        e.preventDefault();

        let tr = htmlGenerator('tr', '', furnitureList);
        tr.setAttribute('class', 'info');
        htmlGenerator('td', `${model}`, tr);
        htmlGenerator('td', `${Number(price).toFixed(2)}`, tr);
        let td = htmlGenerator('td', '', tr);

        let moreBtn = htmlGenerator('button', 'More Info', td);
        moreBtn.setAttribute('class', 'moreBtn');

        let buyBtn = htmlGenerator('button', 'Buy It', td);
        buyBtn.setAttribute('class', 'buyBtn');

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
        model.value = '';
        year.value = '';
        description.value = '';
        price.value = '';
    }
}
