function solve() {
    let model = document.querySelector('#model');
    let year = document.querySelector('#year');
    let description = document.querySelector('#description');
    let price = document.querySelector('#price');
    let addBtn = document.querySelector('#add');

    let furnitureList = document.querySelector('#furniture-list');
    let totalPrice = document.querySelector('.total-price');

    addBtn.addEventListener('click', validateAndAdd);

    function validateAndAdd(e) {
        if (model.value !== '' && year.value !== '' && description.value !== '' && price.value >= 0 
        && Number(price.value) > 0 && Number(year.value) > 0) {
            add(e, model.value, year.value, description.value, price.value);
            clearInputs();
        }
    }

    function add(e, model, year, description, price) {
        e.preventDefault();

        let firstTr = htmlGenerator('tr', '', furnitureList);
        firstTr.setAttribute('class', 'info');
        htmlGenerator('td', `${model}`, firstTr);
        htmlGenerator('td', `${Number(price).toFixed(2)}`, firstTr);
        let td = htmlGenerator('td', '', firstTr);

        let moreBtn = htmlGenerator('button', 'More Info', td);
        moreBtn.setAttribute('class', 'moreBtn');

        let buyBtn = htmlGenerator('button', 'Buy it', td);
        buyBtn.setAttribute('class', 'buyBtn');

        let secondTr = htmlGenerator('tr', '', furnitureList);
        secondTr.setAttribute('class', 'hide');
        htmlGenerator('td', `Year: ${year}`, secondTr);
        let descriptionTd = htmlGenerator('td', `Description: ${description}`, secondTr);
        descriptionTd.setAttribute('colspan', 3);

        moreBtn.addEventListener('click', (e) => {
            e.target.textContent === 'More Info'
                ? e.target.textContent = 'Less Info'
                : e.target.textContent = 'More Info';
            secondTr.style.display = 'none'
                ? secondTr.style.display = 'contents'
                : secondTr.style.display = 'none';
        })

        buyBtn.addEventListener('click', (e) => {
            firstTr.remove();
            secondTr.remove();
            totalPrice.textContent = (Number(totalPrice.textContent) + Number(price)).toFixed(2);
        })
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