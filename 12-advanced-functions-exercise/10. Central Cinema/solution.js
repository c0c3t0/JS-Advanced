function solve() {
    let movieElement = document.querySelector('#container input:nth-of-type(1)');
    let hallElement = document.querySelector('#container input:nth-of-type(2)');
    let priceElement = document.querySelector('#container input:nth-of-type(3)');
    let onScreenBtn = document.querySelector('#container button');
    let clearBtn = document.querySelector('#archive button');

    let moviesOnScreen = document.querySelector('#movies ul');
    let archive = document.querySelector('#archive ul');

    function createElement(type, text) {
        let result = document.createElement(type);
        if (text) {
            result.textContent = text;
        }
        return result;
    }

    onScreenBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let movie = movieElement.value;
        let hall = hallElement.value;
        let price = priceElement.value;

        movieElement.value = '';
        hallElement.value = '';
        priceElement.value = '';

        if (!movie || !hall) {
            return;
        }
        if (price === '' || Number.isNaN(Number(price))) {
            return;
        }
        price = Number(price);

        let li = createElement('li');
        let span = createElement('span', movie);
        let strong = createElement('strong', `Hall: ${hall}`);

        let div = createElement('div');
        let strongPrice = createElement('strong', price.toFixed(2));
        let inputSoldTickets = createElement('input');
        inputSoldTickets.placeholder = 'Tickets Sold';
        let archiveBtn = createElement('button', 'Archive');

        div.appendChild(strongPrice);
        div.appendChild(inputSoldTickets);
        div.appendChild(archiveBtn);

        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(div);

        moviesOnScreen.appendChild(li);       

        archiveBtn.addEventListener('click', (e) => {
            e.preventDefault();

            if (inputSoldTickets.value === '' || Number.isNaN(Number(inputSoldTickets.value))) {
                return;
            }

            li.removeChild(strong);
            li.removeChild(div);

            let totalPrice = (Number(inputSoldTickets.value) * Number(strongPrice.textContent)).toFixed(2);
            let archiveStrong = createElement('strong', `Total amount: ${totalPrice}`);
            let deleteBtn = createElement('button', 'Delete');

            li.appendChild(archiveStrong);
            li.appendChild(deleteBtn);

            archive.appendChild(li);

            deleteBtn.addEventListener('click', () => {
                li.remove();
            })

            clearBtn.addEventListener('click', () => {
                archive.innerHTML = '';
            })
        })
    })
}
