window.addEventListener("load", solve);

function solve(e) {
    e.preventDefault();

    let makeInputElement = document.querySelector('#make');
    let modelInputElement = document.querySelector('#model');
    let yearInputElement = document.querySelector('#year');
    let fuelSelectElement = document.querySelector('#fuel');
    let originalCostInputElement = document.querySelector('#original-cost');
    let sellingPriceInputElement = document.querySelector('#selling-price');
    let publishButtonElement = document.querySelector('#publish');

    publishButtonElement.addEventListener('click', publishCar);

    function publishCar(e) {
        e.preventDefault();

        // Validations
        if (!makeInputElement.value || !modelInputElement.value
            || !yearInputElement.value || !fuelSelectElement.value
            || !originalCostInputElement.value || !sellingPriceInputElement.value) {
            return;
        }

        if (Number(sellingPriceInputElement.value) < Number(originalCostInputElement.value)) {
            return;
        }

        // Creating table rows
        let tbodyElement = document.querySelector('#table-body');
        let trElement = htmlCreator('tr');
        trElement.className = 'row';

        let tdMake = htmlCreator('td', `${makeInputElement.value}`);
        let tdModel = htmlCreator('td', `${modelInputElement.value}`);
        let tdYear = htmlCreator('td', `${yearInputElement.value}`);
        let tdFuel = htmlCreator('td', `${fuelSelectElement.value}`);
        let tdCost = htmlCreator('td', `${originalCostInputElement.value}`);
        let tdPrice = htmlCreator('td', `${sellingPriceInputElement.value}`);
        let tdButtons = htmlCreator('td');

        let editButton = htmlCreator('button', 'Edit');
        editButton.className = 'action-btn edit';

        let sellButton = htmlCreator('button', 'Sell');
        sellButton.className = 'action-btn sell';

        tdButtons.appendChild(editButton);
        tdButtons.appendChild(sellButton);

        trElement.appendChild(tdMake);
        trElement.appendChild(tdModel);
        trElement.appendChild(tdYear);
        trElement.appendChild(tdFuel);
        trElement.appendChild(tdCost);
        trElement.appendChild(tdPrice);
        trElement.appendChild(tdButtons);

        tbodyElement.appendChild(trElement);

        // Set values to ''
        makeInputElement.value = '';
        modelInputElement.value = '';
        yearInputElement.value = '';
        fuelSelectElement.value = '';
        originalCostInputElement.value = '';
        sellingPriceInputElement.value = '';

        // Factory function
        function htmlCreator(tagName, content) {
            let el = document.createElement(tagName);
            if (content) {
                el.textContent = content;
            }
            return el;
        }

        // Added edit button functionality
        editButton.addEventListener('click', (e) => {
            e.preventDefault();

            makeInputElement.value = tdMake.textContent;
            modelInputElement.value = tdModel.textContent;
            yearInputElement.value = tdYear.textContent;
            fuelSelectElement.value = tdFuel.textContent;
            originalCostInputElement.value = tdCost.textContent;
            sellingPriceInputElement.value = tdPrice.textContent;
            trElement.remove(e.target.parentNode.parentNode.children);
        });

        // Added sell button functionality
        sellButton.addEventListener('click', (e) => {
            e.preventDefault();

            let ulElement = document.querySelector('#cars-list');

            let liElement = htmlCreator('li');
            liElement.className = 'each-list';
            carSpan = htmlCreator('span', `${tdMake.textContent} ${tdModel.textContent}`);
            yearSpan = htmlCreator('span', `${tdYear.textContent}`);
            differenceSpan = htmlCreator('span', `${tdPrice.textContent - tdCost.textContent}`);

            liElement.appendChild(carSpan);
            liElement.appendChild(yearSpan);
            liElement.appendChild(differenceSpan);

            ulElement.appendChild(liElement);

            trElement.remove(e.target.parentNode.parentNode.children);

            let profitElement = document.querySelector('#profit');

            let profitElements = document.querySelectorAll('li span:nth-of-type(3)');
            
            let profitMade = 0;
            for (let pr of profitElements) {
                profitMade += Number(pr.textContent);
            }

            profitElement.textContent = profitMade;
        })
    }













}
