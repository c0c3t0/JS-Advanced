function solve() {
    let inputElement = document.querySelector('textarea');
    let btnElements = document.querySelectorAll('button');
    let tbodyElement = document.querySelector('tbody');

    btnElements[0].addEventListener('click', generateHandler);
    btnElements[1].addEventListener('click', buyHandler);

    function generateHandler() {
        let input = JSON.parse(inputElement.value);
        for (let furniture of input) {
            let row = document.createElement('tr');

            let tdImg = document.createElement('td');
            let img = document.createElement('img');
            img.src = furniture.img;

            let tdName = document.createElement('td');
            let pName = document.createElement('p');
            pName.textContent = furniture.name;

            let tdPrice = document.createElement('td');
            let pPrice = document.createElement('p');
            pPrice.textContent = Number(furniture.price);

            let decorationFactor = document.createElement('td');
            let pFactor = document.createElement('p');
            pFactor.textContent = Number(furniture.decFactor);

            let tdMark = document.createElement('td');
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

            row.appendChild(tdImg);
            tdImg.appendChild(img);
            row.appendChild(tdName);
            tdName.appendChild(pName);
            row.appendChild(tdPrice);
            tdPrice.appendChild(pPrice);
            row.appendChild(decorationFactor);
            decorationFactor.appendChild(pFactor);
            row.appendChild(tdMark);
            tdMark.appendChild(checkbox);

            tbodyElement.appendChild(row)
        };
        console.log(input);

    }

    function buyHandler(e) {
        let checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

        let checkedBoxes = checkboxes.filter(box => box.checked)
            .map(box => box.parentNode.parentNode);

        let bought = [];
        let prices = 0;
        let avrFactor = 0;

        for(let i = 0; i < checkedBoxes.length; i++) {
            bought.push(checkedBoxes[i].children[1].children[0].textContent);
            prices += Number(checkedBoxes[i].children[2].children[0].textContent);
            avrFactor += (Number(checkedBoxes[i].children[3].children[0].textContent))/checkedBoxes.length;
        }

        let outputElement = document.querySelectorAll('textarea')[1];
        outputElement.value += `Bought furniture: ${bought.join(", ")}\nTotal price: ${prices.toFixed(2)}\nAverage decoration factor: ${avrFactor}`;
    }
}